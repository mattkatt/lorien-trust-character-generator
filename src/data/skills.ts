import csSkills from './cs.json';
import osSkills from './os.json';

import { Helpers } from '../helpers/helpers';

export interface ISkill {
  name: string;
  id: string;
  cost: number;
  description: string;
  prerequisites?: Array<ISkill['id']>;
  restrictedSkills?: Array<ICharacterSkill['id']>;
}

export interface ICharacterSkill extends ISkill {
  cost: 1 | 2 | 3 | 4 | 6 | 8;
}

export interface IOccupationalSkill extends ISkill {
  tier: 1 | 2 | 3 | 4 | 5;
  cost: 10 | 20 | 30 | 40 | 50;
  restrictedPurchase?: boolean;
  replaces?: IOccupationalSkill['id'] | Array<IOccupationalSkill['id']>;
}

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
