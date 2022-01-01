import { characterSkills as cs } from './skills';
import { ICharacterSkill } from './skills';

export const characterSkillList: Record<string, Array<ICharacterSkill>> = {
  weaponSkills: [
    cs.ambidexterity,
    cs.largeWeaponUse,
    cs.projectileWeaponUse,
    cs.shieldUse,
    cs.missileWeaponUse,
  ],
  armourSkills: [
    cs.bodyDevelopment1,
    cs.bodyDevelopment2,
    cs.lightArmourUse,
    cs.mediumArmourUse,
    cs.heavyArmourUse,
  ],
  knowledgeSkills: [
    cs.potionLore,
    cs.poisonLore,
    cs.cartography,
    cs.senseMagic,
    cs.evaluate,
    cs.recogniseForgery,
    cs.triage,
    cs.triageAdvanced,
  ],
  powerSkills: [
    cs.healing1,
    cs.healing2,
    cs.corruption1,
    cs.corruption2,
    cs.incantation1,
    cs.incantation2,
    cs.spellcasting1,
    cs.spellcasting2,
    cs.ritualMagic1,
    cs.ritualMagic2,
    cs.ritualMagic3,
    cs.contribute,
    cs.plusBasePower1,
    cs.plusBasePower2,
    cs.plusBasePower3,
    cs.plusBasePower4,
    cs.invocation,
  ],
};
