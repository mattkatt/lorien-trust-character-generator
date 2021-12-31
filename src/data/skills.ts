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
      id: skillId,
      name: skillData.name ?? Helpers.camelToReadable(skillId),
      description: skillData.description,
      prerequisites: skillData.prerequisites,
      restrictedSkills: skillData.restrictedSkills,
    };

    if (Helpers.isOccupationalSkill(skillData)) {
      let convertedOS = convertedSkill as IOccupationalSkill;
      convertedOS['cost'] = skillData.cost ?? skillData.tier * 10;
      convertedOS['tier'] = skillData.tier;
      convertedOS['restrictedPurchase'] = skillData?.restrictedPurchase;
      convertedOS['replaces'] = skillData?.replaces;
      returnedSkills[skillId] = convertedOS;
    } else {
      let convertedCS = convertedSkill as ICharacterSkill;
      convertedCS['cost'] = skillData.cost;
      returnedSkills[skillId] = convertedCS;
    }
  }

  return returnedSkills;
}

export const characterSkills = skillFactory(csSkills) as Record<string, ICharacterSkill>;

export const occupationalSkills = skillFactory(osSkills) as Record<string, IOccupationalSkill>;
