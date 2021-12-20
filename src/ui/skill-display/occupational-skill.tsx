import React, { FC, useContext, useEffect, useState } from 'react';
import { Alert, Card, Col, Row } from 'antd';

import { CharacterContext } from '../../context/character-context';
import { occupationalSkillList } from '../../data/occupational-skill-list';
import { Helpers } from '../../helpers/helpers';
import { SkillButton } from './skill-button';
import { SelectedOccupationalSkills } from './selected-occupational-skills';

type breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const OccupationalSkill: FC = () => {
  const { characterState } = useContext(CharacterContext);
  const [size, setSize] = useState<breakpoint>('xs');

  useEffect(() => {
    const onResize = () => {
      let width = window.innerWidth;
      let newSize: breakpoint;

      if (width >= 1200) {
        newSize = 'xl';
      } else if (width >= 992) {
        newSize = 'lg';
      } else if (width >= 768) {
        newSize = 'md';
      } else if (width >= 576) {
        newSize = 'sm';
      } else {
        newSize = 'xs';
      }

      if (newSize !== size) {
        setSize(newSize);
      }
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [size]);

  const getColSpan = (breakpoint: breakpoint): number => {
    switch (breakpoint) {
      case 'xs':
      case 'sm':
        return 24;
      case 'md':
        return 12;
      case 'lg':
        return 8;
      case 'xl':
        return 6;
    }
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <SelectedOccupationalSkills />

          {characterState.unspentCharacterSkillPoints ? (
            <Alert
              message='You must spend all your character skill points before you can select occupational skills'
              type='warning'
            />
          ) : null}
        </Col>
      </Row>

      <Row style={{ margin: '15px' }} gutter={16}>
        <Col span={24}>
          <h2>Available Skills:</h2>
        </Col>
      </Row>

      <Row style={{ margin: '15px' }} gutter={16}>
        {Object.keys(occupationalSkillList).map((skillListKey) => (
          <Col span={getColSpan(size)} key={skillListKey}>
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
