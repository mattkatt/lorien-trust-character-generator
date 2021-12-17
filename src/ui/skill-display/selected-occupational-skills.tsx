import React, { FC, useContext } from 'react';
import { Alert } from 'antd';
import { CharacterContext } from '../../context/character-context';

export const SelectedOccupationalSkills: FC = () => {
  const { characterState } = useContext(CharacterContext);
  const { occupationalSkills } = characterState;

  return (
    <div style={{ backgroundColor: 'white', padding: '28px' }}>
      <h2>Selected Occupational Skills:</h2>
      {occupationalSkills.length >= 0 ? <Alert message='No skills selected' /> : null}
      <ul>{occupationalSkills.map((skill) => skill.name)}</ul>
    </div>
  );
};
