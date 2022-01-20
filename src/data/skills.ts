import { cs } from './cs';
import { os } from './os';

import { Helpers } from '../helpers/helpers';

export type ISkill = {
    name: string;
    id: string;
    cost: number;
    description: string;
    prerequisites?: Array<ISkill['id']>;
    restrictedSkills?: Array<ISkill['id']>;
};

export type ICharacterSkill = ISkill & {
    //
};

export type IOccupationalSkill = ISkill & {
    tier: 1 | 2 | 3 | 4 | 5;
    restrictedPurchase?: boolean;
    replaces?: ISkill['id'] | Array<ISkill['id']>;
};

function skillFactory<TData extends { [key: string]: any }>(
    data: TData,
): Record<keyof TData, ICharacterSkill | IOccupationalSkill> {
    const returnedSkills = {} as Record<keyof TData, ISkill>;

    for (let skillId in data) {
        let skillData = data[skillId] as ICharacterSkill | IOccupationalSkill;

        let convertedSkill: ISkill = {
            id: skillId,
            name: skillData.name ?? Helpers.camelToReadable(skillId),
            cost: skillData.cost ?? 0,
            description: skillData.description,
            prerequisites: skillData.prerequisites,
            restrictedSkills: skillData.restrictedSkills,
        };

        if ('tier' in skillData) {
            (convertedSkill as IOccupationalSkill)['cost'] = skillData.cost
                ? skillData.cost
                : skillData.tier * 10;
            (convertedSkill as IOccupationalSkill)['tier'] = skillData.tier;
            (convertedSkill as IOccupationalSkill)['restrictedPurchase'] =
                skillData?.restrictedPurchase;
            (convertedSkill as IOccupationalSkill)['replaces'] = skillData?.replaces;
        }

        returnedSkills[skillId] = convertedSkill;
    }

    return returnedSkills;
}

export const characterSkills = skillFactory(cs) as Record<keyof typeof cs, ICharacterSkill>;
export const occupationalSkills = skillFactory(os) as Record<keyof typeof os, IOccupationalSkill>;
export const fullSkills = { ...characterSkills, ...occupationalSkills } as Record<string, ISkill>;
