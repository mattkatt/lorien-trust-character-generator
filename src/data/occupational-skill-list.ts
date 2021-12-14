import { IOccupationalSkill } from "../interfaces/skills"
import { occupationalSkills } from "./skills"

export const occupationalSkillList: Record<string, Array<IOccupationalSkill>> = {
    alchemistsGuild: [
        occupationalSkills.createPoisonNovice,
        occupationalSkills.createPoisonArtisan,
        occupationalSkills.createPoisonMaster,
        occupationalSkills.createPoisonMagical,
    ]
}
