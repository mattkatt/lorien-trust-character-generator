import React, { FC } from 'react';
import { ICharacterSkill, IOccupationalSkill } from '../../data/skills';
import { Helpers } from '../../helpers/helpers';

interface ISkillPopoverDescription {
  skill: ICharacterSkill | IOccupationalSkill;
}

export const SkillDescription: FC<ISkillPopoverDescription> = ({ skill }) => {
  const getInfo = () => {
    const prerequisites = skill.prerequisites
      ? skill.prerequisites.map((skill) => Helpers.camelToReadable(skill)).join(', ')
      : null;

    if ('tier' in skill) {
      const replaces = () => {
        if (!skill.replaces) {
          return <i>None</i>;
        }

        if (Array.isArray(skill.replaces)) {
          return skill.replaces.map((s) => Helpers.camelToReadable(s)).join(', ');
        }

        return Helpers.camelToReadable(skill.replaces);
      };

      return (
        <>
          <b>Cost:</b> {skill.cost}
          <br />
          <b>Tier:</b> {skill.tier}
          <br />
          <b>Prerequisites:</b> {prerequisites ?? <i>None</i>}
          <br />
          <b>Replaces:</b> {replaces()}
          <br />
        </>
      );
    } else {
      return (
        <>
          <b>Cost:</b> {skill.cost}
          <br />
          <b>Prerequisites:</b> {prerequisites ?? <i>None</i>}
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
