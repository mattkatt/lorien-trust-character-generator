import { ICharacterSkill, IOccupationalSkill } from '../interfaces/skills';

export const characterSkills: Record<string, ICharacterSkill> = {
  ambidexterity: {
    name: 'Ambidexterity',
    id: 'ambidexterity',
    cost: 2,
    description:
      'With this skill, you can wield weapons or cast spells with your off-hand as well as with your primary hand. This does not mean that your off-hand counts as your primary hand for any effect or skill that states that only the primary hand may be used.',
  },
  largeWeaponUse: {
    name: 'Large Weapon Use',
    id: 'largeWeaponUse',
    cost: 2,
    description:
      'Your character can use a large melee weapon of 43" - 72" in overall length in two hands in melee combat. You may also use a weapon of pole-arm design of 43”- 84” overall length.',
  },
  projectileWeaponUse: {
    name: 'Projectile Weapon Use',
    id: 'projectileWeaponUse',
    cost: 4,
    description: ' Your character can use a bow, crossbow, or sling to launch projectiles.',
  },
  shieldUse: {
    name: 'Shield Use',
    id: 'shieldUse',
    cost: 2,
    description:
      'Your character may use a single shield for defence only, using your off hand (or if you have Ambidexterity, with either hand). When using a shield you may not employ the hand holding the shield for any other purpose.',
  },
  missileWeaponUse: {
    name: 'Missile Weapon Use',
    id: 'missileWeaponUse',
    cost: 1,
    description:
      ' Your character has the ability to throw a single missile (e.g. a rock or knife) in combat using your primary hand.',
  },
  bodyDevelopment1: {
    name: 'Body Development 1',
    id: 'bodyDevelopment1',
    cost: 4,
    description: 'Characters with this skill have 2 Base LHV',
    restrictedSkills: ['bodyDevelopment2'],
  },
  bodyDevelopment2: {
    name: 'Body Development 2',
    id: 'bodyDevelopment2',
    cost: 8,
    description: 'Characters with this skill have 3 Base LHV',
    restrictedSkills: ['bodyDevelopment1'],
  },
  lightArmourUse: {
    name: 'Light Armour Use',
    id: 'lightArmourUse',
    cost: 2,
    description: 'Light Armour has a base AV of 1',
  },
  mediumArmourUse: {
    name: 'Medium Armour Use',
    id: 'mediumArmourUse',
    cost: 3,
    description: 'Medium Armour has a base AV of 2',
  },
  heavyArmourUse: {
    name: 'Heavy Armour Use',
    id: 'heavyArmourUse',
    cost: 4,
    description: 'Heavy Armour has a base AV of 3',
  },
  potionLore: {
    name: 'Potion Lore',
    id: 'potionLore',
    cost: 3,
    description:
      'Your character can recognise most potions, including the effects the preparation will have on a person who uses it.',
  },
  poisonLore: {
    name: 'Poison Lore',
    id: 'poisonLore',
    cost: 3,
    description:
      'Your character can recognise most Poisons, including the effects the preparation will have on a person.',
  },
  cartography: {
    name: 'Cartography',
    id: 'cartography',
    cost: 1,
    description:
      'Your character can draw maps of the area that you are in (geographical region). This skill also allows you to navigate from maps and plans.',
  },
  senseMagic: {
    name: 'Sense Magic',
    id: 'senseMagic',
    cost: 1,
    description:
      'Your character can sense if there is any magic within an object. With your outstretched arm, the palm of your casting hand must be approx. 1ft off the item and your character must concentrate for 10 seconds.',
  },
  evaluate: {
    name: 'Evaluate',
    id: 'evaluate',
    cost: 1,
    description: 'Your character can estimate the intrinsic value of an item.',
  },
  recogniseForgery: {
    name: 'Recognise Forgery',
    id: 'recogniseForgery',
    cost: 1,
    description:
      'With this skill, your character can examine an item and determine if it is genuine or not.',
  },
  triage: {
    name: 'Triage',
    id: 'triage',
    cost: 1,
    description:
      'Your character can spend 1 minute of role-played action within Proximity distance (1ft) of a limb location (not Torso or Head) and remove a mortal wound on that limb (raising it to 0LHV).',
    restrictedSkills: ['triageAdvanced'],
  },
  triageAdvanced: {
    name: 'Triage (Advanced)',
    id: 'triageAdvanced',
    cost: 2,
    description:
      'Your character can spend 1 minute of role-played action within Proximity distance (1ft) of a body location to remove a mortal wound on that location (raising it to 0LHV). In addition, if all of the targets locations are at 0LHV, a character with the Triage (Advanced) skill may spend 5 minutes of role-played action within Proximity distance (1ft) of the target, on completion all of the targets locations will be simultaneously raised to 1LHV and will become Debilitated (10 mins).',
    restrictedSkills: ['triage'],
  },
  healing1: {
    name: 'Healing 1',
    id: 'healing1',
    cost: 4,
    description:
      'Grants you the ability to cast 1st level effects from the Healing list and grants you +4 base Spell Power per day.',
    restrictedSkills: ['healing2'],
  },
  healing2: {
    name: 'Healing 2',
    id: 'healing2',
    cost: 8,
    description:
      'Grants you the ability to cast 2nd level effects from the Healing list and grants you +12 base Spell Power per day.',
    restrictedSkills: ['healing1', 'corruption2', 'incantation2', 'spellcasting2'],
  },
  corruption1: {
    name: 'Corruption 1',
    id: 'corruption1',
    cost: 4,
    description:
      'Grants you the ability to cast 1st level effects from the Corruption list and grants you +4 base Spell Power per day.',
    restrictedSkills: ['corruption2'],
  },
  corruption2: {
    name: 'Corruption 2',
    id: 'corruption2',
    cost: 8,
    description:
      'Grants you the ability to cast 2nd level effects from the Corruption list and grants you +12 base Spell Power per day.',
    restrictedSkills: ['corruption1', 'healing2', 'incantation2', 'spellcasting2'],
  },
  incantation1: {
    name: 'Incantation 1',
    id: 'incantation1',
    cost: 4,
    description:
      'Grants you the ability to cast 1st level effects from the Incantation list and grants you +4 base Spell Power per day.',
    restrictedSkills: ['incantation2'],
  },
  incantation2: {
    name: 'Incantation 2',
    id: 'incantation2',
    cost: 8,
    description:
      'Grants you the ability to cast 2nd level effects from the Incantation list and grants you +12 base Spell Power per day.',
    restrictedSkills: ['incantation1', 'healing2', 'corruption2', 'spellcasting2'],
  },
  spellcasting1: {
    name: 'Spellcasting 1',
    id: 'spellcasting1',
    cost: 4,
    description:
      'Grants you the ability to cast 1st level effects from the Spellcasting list and grants you +4 base Spell Power per day.',
    restrictedSkills: ['spellcasting2'],
  },
  spellcasting2: {
    name: 'Spellcasting 2',
    id: 'spellcasting2',
    cost: 8,
    description:
      'Grants you the ability to cast 2nd level effects from the Spellcasting list and grants you +12 base Spell Power per day.',
    restrictedSkills: ['spellcasting1', 'healing2', 'corruption2', 'incantation2'],
  },
  ritualMagic1: {
    name: 'Ritual Magic 1',
    id: 'ritualMagic1',
    cost: 2,
    description: 'Add the Transportation Spell to your available spell list(s)',
    prerequisites: [
      'healing1',
      'healing2',
      'corruption1',
      'corruption2',
      'incantation1',
      'incantation2',
      'spellcasting1',
      'spellcasting2',
    ],
    restrictedSkills: ['ritualMagic2', 'ritualMagic3'],
  },
  ritualMagic2: {
    name: 'Ritual Magic 2',
    id: 'ritualMagic2',
    cost: 4,
    description:
      'Add the Transportation Spell to your available spell list(s) and perform 1 Ritual per event which will provide 10 points of power in any ritual you lead',
    prerequisites: [
      'healing1',
      'healing2',
      'corruption1',
      'corruption2',
      'incantation1',
      'incantation2',
      'spellcasting1',
      'spellcasting2',
    ],
    restrictedSkills: ['ritualMagic1', 'ritualMagic3'],
  },
  ritualMagic3: {
    name: 'Ritual Magic 3',
    id: 'ritualMagic3',
    cost: 6,
    description:
      'Add the Transportation Spell and Network Attunement Rites to your available spell list(s) and perform 1 ritual per day which will provide 10 points of power in any ritual you lead. Network Attunement also requires a level 2 casting ability (any type) to perform.',
    prerequisites: [
      'healing1',
      'healing2',
      'corruption1',
      'corruption2',
      'incantation1',
      'incantation2',
      'spellcasting1',
      'spellcasting2',
    ],
    restrictedSkills: ['ritualMagic1', 'ritualMagic2'],
  },
  contribute: {
    name: 'Contribute',
    id: 'contribute',
    cost: 1,
    description: 'Your character can contribute one point of ritual power to the Ritual.',
  },
  plusBasePower1: {
    name: '+Base Power 1',
    id: 'plusBasePower1',
    cost: 2,
    description: 'Grants +4 base spell Power',
    restrictedSkills: ['plusBasePower2', 'plusBasePower3', 'plusBasePower4'],
  },
  plusBasePower2: {
    name: '+Base Power 2',
    id: 'plusBasePower2',
    cost: 4,
    description: 'Grants +8 base spell Power',
    restrictedSkills: ['plusBasePower1', 'plusBasePower3', 'plusBasePower4'],
  },
  plusBasePower3: {
    name: '+Base Power 3',
    id: 'plusBasePower3',
    cost: 6,
    description: 'Grants +12 base spell Power',
    restrictedSkills: ['plusBasePower1', 'plusBasePower2', 'plusBasePower4'],
  },
  plusBasePower4: {
    name: '+Base Power 4',
    id: 'plusBasePower4',
    cost: 8,
    description: 'Grants +16 base spell Power',
    restrictedSkills: ['plusBasePower1', 'plusBasePower2', 'plusBasePower3'],
  },
  invocation: {
    name: 'Invocation',
    id: 'invocation',
    cost: 2,
    description:
      'This skill allows for the activation of certain items. With your outstretched arm, the palm of your casting hand must be approx. 1ft from the item you are attempting to invoke, and you must concentrate for 10 seconds. Armour does not restrict invocation because the effect and/or power resides within the invoked item and therefore is not disrupted by any armour worn by the invoker. To invoke an item, the character must use the vocal “I invoke this item” (for standard items and Glyphs). To Invoke a scroll the character must read the full in-character text of the scroll. Chant effects generated by invocable items require the invoker to maintain the chant.',
  },
};

export const occupationalSkills: Record<string, IOccupationalSkill> = {
  createPoisonNovice: {
    name: 'Create Poison (Novice)',
    id: 'createPoisonNovice',
    cost: 20,
    description: '',
    tier: 2,
    restrictedPurchase: false,
    prerequisites: ['poisonLore'],
  },
  createPoisonArtisan: {
    name: 'Create Poison (Artisan)',
    id: 'createPoisonArtisan',
    cost: 30,
    description: '',
    tier: 3,
    restrictedPurchase: false,
    prerequisites: ['poisonLore', 'createPoisonNovice'],
  },
  createPoisonMaster: {
    name: 'Create Poison (Master)',
    id: 'createPoisonMaster',
    cost: 40,
    description: '',
    tier: 4,
    restrictedPurchase: false,
    prerequisites: ['poisonLore', 'createPoisonArtisan'],
  },
  createPoisonMagical: {
    name: 'Create Poison (Magical)',
    id: 'createPoisonMagical',
    cost: 50,
    description: '',
    tier: 5,
    restrictedPurchase: true,
    prerequisites: ['poisonLore', 'createPoisonMaster'],
  },
};
