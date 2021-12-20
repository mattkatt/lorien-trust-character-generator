import React, { FC, useContext } from 'react';
import { Alert } from 'antd';
import { CharacterContext } from '../../context/character-context';

export const SelectedOccupationalSkills: FC = () => {
  const { characterState } = useContext(CharacterContext);
  const { occupationalSkills } = characterState;

  const skillsToDisplay = occupationalSkills.map((skill) => {
    const isOverwritten = occupationalSkills.some((s) => s.replaces === skill.id);

    return !isOverwritten ? <li>{skill.name}</li> : null;
  });

  return (
    <div style={{ backgroundColor: 'white', padding: '28px' }}>
      <h2>Selected Occupational Skills:</h2>
      {occupationalSkills.length <= 0 ? <Alert message='No skills selected' /> : null}
      <ul>{skillsToDisplay}</ul>
    </div>
  );
};
