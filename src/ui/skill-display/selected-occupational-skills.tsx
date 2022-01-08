import React, { FC, useContext } from 'react';
import { Alert, Popover, Typography } from 'antd';
import { CharacterContext } from '../../context/character-context';
import { SkillDescription } from './skill-description';

const { Paragraph } = Typography;

export const SelectedOccupationalSkills: FC = () => {
  const { characterState } = useContext(CharacterContext);
  const { occupationalSkills } = characterState;

  const skillsToDisplay = occupationalSkills.map((skill) => {
    const isOverwritten = occupationalSkills.some((s) => {
      if (Array.isArray(s.replaces)) {
        return s.replaces.some((replaces) => replaces === skill.id);
      }
      return s.replaces === skill.id;
    });

    return isOverwritten ? null : (
      <li key={skill.id}>
        <Popover
          content={<SkillDescription skill={skill} />}
          title={skill.name}
          placement={'bottomLeft'}
        >
          {skill.name}
        </Popover>
      </li>
    );
  });

  const ospTotal = occupationalSkills.reduce((total, skill) => total + skill.cost, 0);

  return (
    <div style={{ backgroundColor: 'white', padding: '28px' }}>
      <h2>Selected Occupational Skills:</h2>
      {occupationalSkills.length <= 0 ? (
        <Alert message='No skills selected' />
      ) : (
        <Paragraph>
          Total OSPs: <b>{ospTotal}</b>
        </Paragraph>
      )}
      <ul>{skillsToDisplay}</ul>
    </div>
  );
};
