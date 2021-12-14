import { ICharacterState } from "./character-state"
import { ICharacterSkill, IOccupationalSkill } from "./skills"

export interface ICharacterContext {
    characterState: ICharacterState
    setCharacterState: (newState: ICharacterState) => void
    setCharacterOSPs: (OSPs: number) => void,
    setCharacterSkills: (skills: Array<ICharacterSkill>) => void,
    addCharacterSkill: (skill: ICharacterSkill) => void,
    removeCharacterSkill: (skill: ICharacterSkill) => void,
    setOccupationalSkills: (skills: Array<IOccupationalSkill>) => void,
    addOccupationalSkill: (skill: IOccupationalSkill) => void,
    removeOccupationalSkill: (skill: IOccupationalSkill) => void,
    setActiveSkills: (skills: number) => void,
}


export interface ICharacterProvider {
    character: ICharacterState
}
