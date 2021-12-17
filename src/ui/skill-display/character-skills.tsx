import React, { FC, useContext } from "react";
import { Collapse, Typography } from "antd";

import {
  characterSkillList,
  CharacterSkillList,
} from "../../data/character-skill-list";
import { Helpers } from "../../helpers/helpers";
import { CharacterContext } from "../../context/character-context";
import { SkillButton } from "./skill-button";

const { Paragraph } = Typography;

export const CharacterSkills: FC = () => {
  const { characterState } = useContext(CharacterContext);
  const { characterSkillPoints, spentCharacterSkillPoints } = characterState;

  const characterSkillLists: Array<CharacterSkillList> = [
    "weaponSkills",
    "armourSkills",
    "knowledgeSkills",
    "powerSkills",
  ];

  return (
    <>
      <h2>Character Skills</h2>
      <Paragraph>
        Skill Point Spend: {spentCharacterSkillPoints} / {characterSkillPoints}
      </Paragraph>

      <Collapse>
        {characterSkillLists.map((skillList) => (
          <Collapse.Panel
            header={Helpers.camelToReadable(skillList)}
            key={skillList}
          >
            {characterSkillList[skillList].map((skill) => (
              <SkillButton key={skill.id} skill={skill} />
            ))}
          </Collapse.Panel>
        ))}
      </Collapse>
    </>
  );
};
