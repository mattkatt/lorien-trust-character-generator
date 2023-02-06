export type ISkill = {
    id: string;
    name: string;
    description: string;
    tier: 0 | 1 | 2 | 3 | 4 | 5;
    cost: number;
    prerequisites: Array<ISkill['id']>;
    restrictedSkills: Array<ISkill['id']>;
    restrictedPurchase: boolean;
    consumesHeadSpace: boolean;
    replaces?: ISkill['id'] | Array<ISkill['id']>;
};
