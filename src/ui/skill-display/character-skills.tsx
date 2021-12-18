import React, { FC, useContext } from 'react';
import { Collapse, Typography } from 'antd';

import { characterSkillList } from '../../data/character-skill-list';
import { Helpers } from '../../helpers/helpers';
import { CharacterContext } from '../../context/character-context';
import { SkillButton } from './skill-button';

const { Paragraph } = Typography;

export const CharacterSkills: FC = () => {
  const { characterState } = useContext(CharacterContext);

  const totalSkillPoints = characterState.spentCharacterSkillPoints + characterState.unspentCharacterSkillPoints;

  return (
    <>
      <h2>Character Skills</h2>
      <Paragraph>
        Skill Point Spend: {characterState.spentCharacterSkillPoints} / {totalSkillPoints}
      </Paragraph>

      <Collapse>
        {Object.keys(characterSkillList).map((skillList) => (
          <Collapse.Panel header={Helpers.camelToReadable(skillList)} key={skillList}>
            {characterSkillList[skillList].map((skill) => (
              <SkillButton key={skill.id} skill={skill} />
            ))}
          </Collapse.Panel>
        ))}
      </Collapse>
    </>
  );
};
