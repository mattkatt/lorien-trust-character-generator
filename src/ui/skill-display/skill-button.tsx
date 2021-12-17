import React, { FC, useContext } from "react";
import {
  ICharacterSkill,
  IOccupationalSkill,
  ISkill,
} from "../../interfaces/skills";
import { Button, Popover } from "antd";
import { SkillPopover } from "./skill-popover";
import { CharacterContext } from "../../context/character-context";
import { Helpers } from "../../helpers/helpers";

interface ISkillButtonProps {
  skill: ISkill;
}

export const SkillButton: FC<ISkillButtonProps> = ({ skill }) => {
  const {
    characterState,
    addCharacterSkill,
    addOccupationalSkill,
    removeCharacterSkill,
    removeOccupationalSkill,
  } = useContext(CharacterContext);
  const skillType = Helpers.isOccupationalSkill(skill)
    ? "occupational"
    : "character";
  const usedSkillList = Helpers.isCharacterSkill(skill)
    ? characterState.characterSkills
    : characterState.occupationalSkills;

  const isSelected = (): boolean => {
    return usedSkillList.some((s) => s.id === skill.id);
  };

  const isDisabled = (): boolean => {
    const isRestricted = usedSkillList.some((s) =>
      s.restrictedSkills?.includes(skill.id)
    );

    const enoughSkillPoints = Helpers.isCharacterSkill(skill)
      ? skill.cost <= characterState.unspentCharacterSkillPoints
      : true;

    const meetsPrerequisites = skill?.prerequisites
      ? skill.prerequisites.some((prerequisite) => {
          return usedSkillList.some((s) => s.id === prerequisite);
        })
      : true;

    return isRestricted || !enoughSkillPoints || !meetsPrerequisites;
  };

  const onSkillClick = () => {
    if (isSelected()) {
      skillType === "character"
        ? removeCharacterSkill(skill as ICharacterSkill)
        : removeOccupationalSkill(skill as IOccupationalSkill);
    } else {
      skillType === "character"
        ? addCharacterSkill(skill as ICharacterSkill)
        : addOccupationalSkill(skill as IOccupationalSkill);
    }
  };

  return (
    <Popover
      content={<SkillPopover skill={skill} />}
      title={skill.name}
      placement={"rightBottom"}
    >
      <Button
        block
        type={isSelected() ? "primary" : "dashed"}
        disabled={isDisabled() && !isSelected()}
        onClick={onSkillClick}
      >
        {`${skill.name} - {${skill.cost}}`}
      </Button>
    </Popover>
  );
};
