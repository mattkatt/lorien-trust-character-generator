import { ICharacterSkill, IOccupationalSkill } from "./skills";

export interface ICharacterState {
  characterSkillPoints: number;
  spentCharacterSkillPoints: number;
  unspentCharacterSkillPoints: number;
  characterOSPs: number;
  characterSkills: Array<ICharacterSkill>;
  occupationalSkills: Array<IOccupationalSkill>;
  activeSkills: number;
}
