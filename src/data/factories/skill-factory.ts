import { cs } from '../cs';
import { os } from '../os';
import { Skill } from '../models/skill';
import { SkillList, SkillRecord } from '../types/skills';
import { characterSkillList } from '../character-skill-list';
import { ISkill } from '../interfaces/skills';
import { occupationalSkillList } from '../occupational-skill-list';

export class SkillFactory {
    static generateSkillRecord(): SkillRecord {
        const allSkillData: Record<string, any> = { ...cs, ...os };
        const skills: Record<string, Skill> = {};

        for (let skillId in allSkillData) {
            const skillData: any = allSkillData[skillId];
            skills[skillId] = new Skill({ ...skillData, id: skillId });
        }

        return skills;
    }

    static generateSkillList(
        skillRecord: SkillRecord,
        keyList: Record<string, Array<ISkill['id']>>,
    ): SkillList {
        const list: SkillList = {};

        for (let skillListKey in keyList) {
            const skills: SkillRecord = {};

            for (let skillId of keyList[skillListKey]) {
                skills[skillId] = skillRecord[skillId];
            }

            list[skillListKey] = skills;
        }

        return list;
    }

    static generateCSList(skillRecord: SkillRecord) {
        return SkillFactory.generateSkillList(skillRecord, characterSkillList);
    }

    static generateOSList(skillRecord: SkillRecord) {
        return SkillFactory.generateSkillList(skillRecord, occupationalSkillList);
    }
}
