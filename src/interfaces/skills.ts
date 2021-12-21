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
  replaces?: IOccupationalSkill['id'];
}
