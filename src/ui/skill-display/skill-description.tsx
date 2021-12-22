import React, { FC } from 'react';
import { ISkill } from '../../interfaces/skills';
import { Helpers } from '../../helpers/helpers';

interface ISkillPopoverDescription {
  skill: ISkill;
}

export const SkillDescription: FC<ISkillPopoverDescription> = ({ skill }) => {
  const getInfo = () => {
    const prerequisites = skill.prerequisites
      ? skill.prerequisites.map((skill) => Helpers.camelToReadable(skill)).join(', ')
      : null;

    if (Helpers.isCharacterSkill(skill)) {
      return (
        <>
          <b>Cost:</b> {skill.cost}
          <br />
          <b>Prerequisites:</b> {prerequisites ?? <i>None</i>}
          <br />
        </>
      );
    }

    if (Helpers.isOccupationalSkill(skill)) {
      return (
        <>
          <b>Cost:</b> {skill.cost}
          <br />
          <b>Tier:</b> {skill.tier}
          <br />
          <b>Prerequisites:</b> {prerequisites ?? <i>None</i>}
          <br />
          <b>Replaces:</b> {skill.replaces ? Helpers.camelToReadable(skill.replaces) : <i>None</i>}
          <br />
        </>
      );
    }
  };

  return (
    <div style={{ maxWidth: '60vw' }}>
      {getInfo()}
      {skill.description}
    </div>
  );
};
