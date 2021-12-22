import React, { FC, useContext } from 'react';
import { ICharacterSkill, IOccupationalSkill, ISkill } from '../../interfaces/skills';
import { Button, Popover } from 'antd';
import { SkillDescription } from './skill-description';
import { CharacterContext } from '../../context/character-context';
import { Helpers } from '../../helpers/helpers';
import { AppContext } from '../../context/app-context';

interface ISkillButtonProps {
  skill: ISkill;
}

export const SkillButton: FC<ISkillButtonProps> = ({ skill }) => {
  const { appState } = useContext(AppContext);
  const {
    characterState,
    addCharacterSkill,
    addOccupationalSkill,
    removeCharacterSkill,
    removeOccupationalSkill,
  } = useContext(CharacterContext);
  const skillType = Helpers.isOccupationalSkill(skill) ? 'occupational' : 'character';
  const usedSkillList = [...characterState.characterSkills, ...characterState.occupationalSkills];

  const isSelected = () => usedSkillList.some((s) => s.id === skill.id);

  const isDisabled = () => {
    const isRestricted = usedSkillList.some((s) => s.restrictedSkills?.includes(skill.id));

    const enoughSkillPoints = Helpers.isCharacterSkill(skill)
      ? skill.cost <= characterState.unspentCharacterSkillPoints
      : true;

    const meetsPrerequisites = skill?.prerequisites
      ? skill.prerequisites.every((prerequisite) => {
          if (prerequisite.includes('||')) {
            return prerequisite.split('||').some((orPrerequisite) => {
              return usedSkillList.some((usedSkill) => usedSkill.id === orPrerequisite);
            });
          }

          return usedSkillList.some((s) => s.id === prerequisite);
        })
      : true;

    return isRestricted || !enoughSkillPoints || !meetsPrerequisites;
  };

  const isRestricted = (skill as IOccupationalSkill)?.restrictedPurchase ?? false;

  const onSkillClick = () => {
    if (isSelected()) {
      skillType === 'character'
        ? removeCharacterSkill(skill as ICharacterSkill)
        : removeOccupationalSkill(skill as IOccupationalSkill);
    } else {
      skillType === 'character'
        ? addCharacterSkill(skill as ICharacterSkill)
        : addOccupationalSkill(skill as IOccupationalSkill);
    }
  };

  return appState.hideDisabledSkills && isDisabled() && !isSelected() ? null : (
    <Popover
      content={<SkillDescription skill={skill} />}
      title={skill.name}
      placement={'rightBottom'}
    >
      <Button
        block
        type={isSelected() ? 'primary' : 'dashed'}
        disabled={isDisabled() && !isSelected()}
        onClick={onSkillClick}
      >
        {`${skill.name} - {${skill.cost}}`}
        {isRestricted ? ' @' : null}
      </Button>
    </Popover>
  );
};
