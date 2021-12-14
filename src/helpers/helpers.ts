import { ICharacterSkill, IOccupationalSkill, ISkill } from "../interfaces/skills"

export class Helpers {
    static capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

    static camelToReadable = (str: string): string => {
        const result = str.replace(/([A-Z])/g, " $1")
        return result.charAt(0).toUpperCase() + result.slice(1)
    }

    static isOccupationalSkill = (skill: ISkill): skill is IOccupationalSkill => (skill as IOccupationalSkill).cost >= 10;

    static isCharacterSkill = (skill: ISkill): skill is ICharacterSkill => (skill as ICharacterSkill).cost < 10;
}
