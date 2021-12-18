import { ICharacterState } from './character-state';
import { ICharacterSkill, IOccupationalSkill } from './skills';

export interface ICharacterContext {
  characterState: ICharacterState;
  addCharacterSkill: (skill: ICharacterSkill) => void;
  removeCharacterSkill: (skill: ICharacterSkill) => void;
  addOccupationalSkill: (skill: IOccupationalSkill) => void;
  removeOccupationalSkill: (skill: IOccupationalSkill) => void;
}
