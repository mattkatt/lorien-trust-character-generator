import React, { FC, useContext, useEffect, useState } from "react";
import { Alert, Card, Col, Row } from "antd";

import { CharacterContext } from "../../context/character-context";
import { occupationalSkillList } from "../../data/occupational-skill-list";
import { Helpers } from "../../helpers/helpers";
import { SkillButton } from "./skill-button";

type breakpoint = "xs" | "sm" | "md" | "lg";

export const OccupationalSkill: FC = () => {
  const { characterState } = useContext(CharacterContext);
  const { occupationalSkills, characterSkills, characterSkillPoints } =
    characterState;
  const [size, setSize] = useState<breakpoint>("xs");

  useEffect(() => {
    const onResize = () => {
      let width = window.innerWidth;
      let newSize: breakpoint;

      if (width >= 992) {
        newSize = "lg";
      } else if (width >= 768) {
        newSize = "md";
      } else if (width >= 576) {
        newSize = "sm";
      } else {
        newSize = "xs";
      }

      if (newSize !== size) {
        setSize(newSize);
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [size]);

  if (
    characterSkills.reduce((prev, next) => prev + next.cost, 0) <
    characterSkillPoints
  ) {
    return (
      <Row style={{ margin: "15px" }} gutter={16}>
        <Col span={24}>
          <Alert
            message="You must spend all your character skill points before you can select occupational skills"
            type="warning"
          />
        </Col>
      </Row>
    );
  }

  return (
    <>
      <Row>
        <Col span={24}>
          <div style={{ backgroundColor: "white", padding: "28px" }}>
            <h2>Selected Occupational Skills:</h2>
            {occupationalSkills.length >= 0 ? (
              <Alert message="No skills selected" />
            ) : null}
            <ul>{occupationalSkills.map((skill) => skill.name)}</ul>
          </div>
        </Col>
      </Row>
      <Row style={{ margin: "15px" }} gutter={16}>
        <Col span={24}>
          <h2>Available Skills:</h2>
        </Col>
      </Row>
      <Row style={{ margin: "15px" }} gutter={16}>
        {Object.keys(occupationalSkillList).map((skillListKey) => (
          <Col span={6} key={skillListKey}>
            <Card title={Helpers.camelToReadable(skillListKey)}>
              {occupationalSkillList[skillListKey].map((skill) => (
                <SkillButton key={skill.id} skill={skill} />
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
