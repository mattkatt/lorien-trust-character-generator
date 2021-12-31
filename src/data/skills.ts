import csSkills from './cs.json';
import osSkills from './os.json';

import { ICharacterSkill, IOccupationalSkill } from '../interfaces/skills';
import { Helpers } from '../helpers/helpers';

function skillFactory(data: {
  [key: string]: any;
}): Record<string, ICharacterSkill | IOccupationalSkill> {
  const returnedSkills: Record<string, ICharacterSkill | IOccupationalSkill> = {};

  for (let skillId in data) {
    let skillData = data[skillId];
    let convertedSkill = {
      name: skillData.name ?? Helpers.camelToReadable(skillId),
      id: skillId,
      cost: skillData.cost,
      description: skillData.description,
      prerequisites: skillData?.prerequisites,
      restrictedSkills: skillData?.restrictedSkills,
    };

    if (Helpers.isOccupationalSkill(skillData)) {
      let convertedOS = convertedSkill as IOccupationalSkill;
      convertedOS['tier'] = skillData.tier;
      convertedOS['restrictedPurchase'] = skillData?.restrictedPurchase;
      convertedOS['replaces'] = skillData?.replaces;
      returnedSkills[skillId] = convertedOS;
    }

    if (Helpers.isCharacterSkill(skillData)) {
      returnedSkills[skillId] = convertedSkill as ICharacterSkill;
    }
  }

  return returnedSkills;
}

export const characterSkills = skillFactory(csSkills) as Record<string, ICharacterSkill>;

export const occupationalSkills = skillFactory(osSkills) as Record<string, IOccupationalSkill>;
