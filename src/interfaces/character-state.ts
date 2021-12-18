import { ICharacterSkill, IOccupationalSkill } from './skills';

export interface ICharacterState {
  spentCharacterSkillPoints: number;
  unspentCharacterSkillPoints: number;
  characterOSPs: number;
  characterSkills: Array<ICharacterSkill>;
  occupationalSkills: Array<IOccupationalSkill>;
  activeSkills: number;
}
