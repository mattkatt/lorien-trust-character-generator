import { characterSkills } from './skills';
import { ICharacterSkill } from '../interfaces/skills';

export const characterSkillList: Record<string, Array<ICharacterSkill>> = {
  weaponSkills: [
    characterSkills.ambidexterity,
    characterSkills.largeWeaponUse,
    characterSkills.projectileWeaponUse,
    characterSkills.shieldUse,
    characterSkills.missileWeaponUse,
  ],
  armourSkills: [
    characterSkills.bodyDevelopment1,
    characterSkills.bodyDevelopment2,
    characterSkills.lightArmourUse,
    characterSkills.mediumArmourUse,
    characterSkills.heavyArmourUse,
  ],
  knowledgeSkills: [
    characterSkills.potionLore,
    characterSkills.poisonLore,
    characterSkills.cartography,
    characterSkills.senseMagic,
    characterSkills.evaluate,
    characterSkills.recogniseForgery,
    characterSkills.triage,
    characterSkills.triageAdvanced,
  ],
  powerSkills: [
    characterSkills.healing1,
    characterSkills.healing2,
    characterSkills.corruption1,
    characterSkills.corruption2,
    characterSkills.incantation1,
    characterSkills.incantation2,
    characterSkills.spellcasting1,
    characterSkills.spellcasting2,
    characterSkills.ritualMagic1,
    characterSkills.ritualMagic2,
    characterSkills.ritualMagic3,
    characterSkills.contribute,
    characterSkills.plusBasePower1,
    characterSkills.plusBasePower2,
    characterSkills.plusBasePower3,
    characterSkills.plusBasePower4,
    characterSkills.invocation,
  ],
};
