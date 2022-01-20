export const os = {
    createPoisonNovice: {
        name: 'Create Poison (Novice)',
        description: '',
        tier: 2,
        prerequisites: ['poisonLore'],
    },
    createPoisonArtisan: {
        name: 'Create Poison (Artisan)',
        description: '',
        tier: 3,
        prerequisites: ['poisonLore', 'createPoisonNovice'],
        replaces: 'createPoisonNovice',
    },
    createPoisonMaster: {
        name: 'Create Poison (Master)',
        description: '',
        tier: 4,
        prerequisites: ['poisonLore', 'createPoisonArtisan'],
        replaces: 'createPoisonArtisan',
    },
    createPoisonMagical: {
        name: 'Create Poison (Magical)',
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['poisonLore', 'createPoisonMaster'],
        replaces: 'createPoisonMaster',
    },
    createPotionNovice: {
        name: 'Create Potion (Novice)',
        description: '',
        tier: 2,
        prerequisites: ['potionLore'],
    },
    createPotionArtisan: {
        name: 'Create Potion (Artisan)',
        description: '',
        tier: 3,
        prerequisites: ['potionLore', 'createPotionNovice'],
        replaces: 'createPotionNovice',
    },
    createPotionMaster: {
        name: 'Create Potion (Master)',
        description: '',
        tier: 4,
        prerequisites: ['potionLore', 'createPotionArtisan'],
        replaces: 'createPotionArtisan',
    },
    createPotionMagical: {
        name: 'Create Potion (Magical)',
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['potionLore', 'createPotionMaster'],
        replaces: 'createPotionMaster',
    },
    createReagents: {
        description: '',
        tier: 1,
        prerequisites: ['poisonLore||potionLore'],
    },
    createReagentsImproved: {
        name: 'Create Reagents (Improved)',
        description: '',
        tier: 2,
        prerequisites: ['createReagents'],
        replaces: 'createReagents',
    },
    increasedAlchemicalProduction: {
        description: '',
        tier: 4,
        prerequisites: ['createReagentsImproved'],
        replaces: 'createReagentsImproved',
    },
    createAntidotes: {
        description: '',
        tier: 1,
        prerequisites: ['poisonLore||potionLore'],
    },
    createAntidotesImproved: {
        name: 'Create Antidotes (Improved)',
        description: '',
        tier: 3,
        prerequisites: ['createAntidotes'],
        replaces: 'createAntidotes',
    },
    herbLore: {
        description: '',
        tier: 1,
    },
    oiledWeapons: {
        description: '',
        tier: 3,
        prerequisites: ['immuneToFumble'],
    },
    masterPoisoner: {
        description: '',
        tier: 4,
    },
    forensicAnalysis: {
        description: '',
        tier: 3,
    },
    immuneToLethalAlchemicalVenoms: {
        description: '',
        tier: 4,
    },
    armoursmithApprentice: {
        name: 'Armoursmith (Apprentice)',
        description: '',
        tier: 1,
    },
    repairEnchantedItems: {
        description: '',
        tier: 2,
        prerequisites: ['armoursmithApprentice'],
        replaces: 'armoursmithApprentice',
    },
    armoursmithArtisan: {
        name: 'Armoursmith (Artisan)',
        description: '',
        tier: 4,
        prerequisites: ['repairEnchantedItems'],
        replaces: 'repairEnchantedItems',
    },
    armoursmithMaster: {
        name: 'Armoursmith (Master)',
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['armoursmithArtisan'],
        replaces: 'armoursmithArtisan',
    },
    weaponsmithApprentice: {
        name: 'Weaponsmith (Apprentice)',
        description: '',
        tier: 1,
    },
    repairDestroyedItems: {
        description: '',
        tier: 2,
        prerequisites: ['weaponsmithApprentice'],
        replaces: 'weaponsmithApprentice',
    },
    weaponsmithArtisan: {
        name: 'Weaponsmith (Artisan)',
        description: '',
        tier: 4,
        prerequisites: ['repairDestroyedItems'],
        replaces: 'repairDestroyedItems',
    },
    weaponsmithMaster: {
        name: 'Weaponsmith (Master)',
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['weaponsmithArtisan'],
        replaces: 'weaponsmithArtisan',
    },
    immuneToRepel: {
        description: '',
        tier: 2,
    },
    immuneToRepelAndStrikedown: {
        description: '',
        tier: 3,
        prerequisites: ['immuneToRepel'],
        replaces: 'immuneToRepel',
    },
    mightyBlow: {
        description: '',
        tier: 4,
        prerequisites: ['immuneToRepelAndStrikedown'],
        replaces: 'immuneToRepelAndStrikedown',
    },
    crushingBlow: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['mightyBlow'],
        replaces: 'mightyBlow',
    },
    additionalReforging: {
        description: '',
        tier: 1,
    },
    spellTempering: {
        description: '',
        tier: 3,
        prerequisites: ['additionalReforging'],
        replaces: 'additionalReforging',
    },
    shieldMastery: {
        description: '',
        tier: 3,
    },
    shieldMasteryExpert: {
        name: 'Shield Mastery (Expert)',
        description: '',
        tier: 3,
        prerequisites: ['shieldMastery'],
        replaces: 'shieldMastery',
    },
    detectAndRemoveBeguile: {
        description: '',
        tier: 2,
    },
    immuneToCharms: {
        description: '',
        tier: 3,
        prerequisites: ['detectAndRemoveBeguile'],
    },
    castMassCharms: {
        description: '',
        tier: 4,
        prerequisites: ['immuneToCharms'],
        replaces: 'immuneToCharms',
    },
    beguile: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['castMassCharms', 'detectAndRemoveBeguile'],
        replaces: 'detectAndRemoveBeguile',
    },
    immuneToFear: {
        description: '',
        tier: 1,
    },
    immuneToMute: {
        description: '',
        tier: 2,
        prerequisites: ['immuneToFear'],
    },
    rally: {
        description: '',
        tier: 4,
        restrictedPurchase: true,
        prerequisites: ['immuneToMute', 'immuneToFear'],
        replaces: 'immuneToFear',
    },
    immuneToMindEffects: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['rally'],
    },
    sleeplessChanting: {
        description: '',
        tier: 2,
    },
    unendingVoice: {
        description: '',
        tier: 3,
        prerequisites: ['sleeplessChanting'],
        replaces: 'sleeplessChanting',
    },
    translateNamedScriptX: {
        name: 'Translate Named Script <X>',
        description: '',
        tier: 1,
    },
    writtenForgery: {
        description: '',
        tier: 4,
        prerequisites: ['translateNamedScriptX', 'recogniseForgery'],
    },
    forgery: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['writtenForgery', 'recogniseForgery'],
        replaces: 'writtenForgery',
    },
    scriptMasterX: {
        name: 'Script Master <X>',
        description: '',
        tier: 3,
        prerequisites: ['translateNamedScriptX'],
        replaces: 'translateNamedScriptX',
    },
    polyglot: {
        cost: 70,
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['scriptMasterX'],
        replaces: 'scriptMasterX',
    },
    immuneToBefriendAndConfusion: {
        description: '',
        tier: 3,
    },
    locate: {
        description: '',
        tier: 2,
    },
    concealItem: {
        description: '',
        tier: 2,
    },
    concealItemImproved: {
        name: 'Conceal Item (Improved)',
        description: '',
        tier: 3,
        prerequisites: ['concealItem'],
        replaces: 'concealItem',
    },
    performTransportRite: {
        description: '',
        tier: 1,
    },
    performTeleportRite: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['performTransportRite'],
        replaces: 'performTransportRite',
    },
    revitaliseUnliving: {
        description: '',
        tier: 1,
    },
    repairUnlivingAdvanced: {
        name: 'Repair Unliving (Advanced)',
        description: '',
        tier: 2,
        prerequisites: ['revitaliseUnliving'],
        replaces: 'revitaliseUnliving',
    },
    mindHealing: {
        description: '',
        tier: 4,
        prerequisites: ['repairUnlivingAdvanced||advancedHealing'],
    },
    sourceOfUnlife: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['mindHealing', 'repairUnlivingAdvanced'],
        replaces: ['mindHealing', 'repairUnlivingAdvanced'],
    },
    mortician: {
        description: '',
        tier: 2,
    },
    morticianExpert: {
        name: 'Mortician (Expert)',
        tier: 4,
        prerequisites: ['mortician'],
        replaces: 'mortician',
    },
    dismissControlPlus2: {
        name: 'Dismiss/Control +2',
        description: '',
        tier: 1,
    },
    dismissControlPlus4: {
        name: 'Dismiss/Control +4',
        description: '',
        tier: 2,
        prerequisites: ['dismissControlPlus2'],
        replaces: 'dismissControlPlus2',
    },
    dismissControlPlus6: {
        name: 'Dismiss/Control +6',
        description: '',
        tier: 4,
        prerequisites: ['dismissControlPlus4'],
        replaces: 'dismissControlPlus4',
    },
    dismissControlPlus8: {
        name: 'Dismiss/Control +8',
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['dismissControlPlus6'],
        replaces: 'dismissControlPlus6',
    },
    healAlienOrAberrantPattern: {
        description: '',
        tier: 3,
    },
    healMagicalPattern: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['healAlienOrAberrantPattern'],
        replaces: 'healAlienOrAberrantPattern',
    },
    immuneToDisease: {
        description: '',
        tier: 3,
    },
    discernUnliving: {
        description: '',
        tier: 3,
    },
    revive: {
        description: '',
        tier: 1,
    },
    advancedHealing: {
        description: '',
        tier: 2,
        prerequisites: ['revive'],
        replaces: 'revive',
    },
    sourceOfLife: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['mindHealing', 'advancedHealing'],
        replaces: ['mindHealing', 'advancedHealing'],
    },
    triageMaster: {
        name: 'Triage (Master)',
        description: '',
        tier: 2,
    },
    triageExpert: {
        name: 'Triage (Expert)',
        description: '',
        tier: 4,
        prerequisites: ['revive'],
        replaces: 'revive',
    },
    discernPatternType: {
        description: '',
        tier: 1,
    },
    advancedPatternScan: {
        description: '',
        tier: 4,
        prerequisites: ['discernPatternType'],
        replaces: 'discernPatternType',
    },
    guardedChannelling: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['immuneToDisease'],
        replaces: 'immuneToDisease',
    },
    discernElementalBeing: {
        description: '',
        tier: 3,
    },
    lastRites: {
        description: '',
        tier: 1,
    },
    lastRitesImproved: {
        name: 'Last Rites (Improved)',
        description: '',
        tier: 4,
        prerequisites: ['lastRites'],
        replaces: 'lastRites',
    },
    castAdditionalIncantation: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['lastRitesImproved||masterCountermagic'],
    },
    castHighCountermagic: {
        description: '',
        tier: 3,
    },
    masterCountermagic: {
        description: '',
        tier: 4,
        prerequisites: ['castHighCountermagic||highMagicIncantation||highMagicSpellcasting'],
        replaces: 'castHighCountermagic',
    },
    transcendArmour: {
        description: '',
        tier: 2,
    },
    champion: {
        description: '',
        tier: 4,
        prerequisites: ['transcendArmour'],
        replaces: 'transcendArmour',
    },
    dedicatedFollower: {
        description: '',
        tier: 3,
    },
    damageReductionFatal: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['dedicatedFollower'],
        replaces: 'dedicatedFollower',
    },
    discernAncestralBeing: {
        description: '',
        tier: 3,
    },
    riteMaster: {
        description: '',
        tier: 1,
    },
    ritualMagicImproved: {
        name: 'Ritual Magic (Improved)',
        description: '',
        tier: 3,
        prerequisites: ['riteMaster'],
        replaces: 'riteMaster',
    },
    ritualistExpert: {
        name: 'Ritual Magic (Expert)',
        description: '',
        tier: 4,
        prerequisites: ['ritualMagicImproved'],
        replaces: 'ritualMagicImproved',
    },
    ritualistMaster: {
        name: 'Ritual Magic (Master)',
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['ritualistExpert'],
        replaces: 'ritualistExpert',
    },
    castAdditionalMagecraft: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['masterCountermagic'],
        replaces: 'masterCountermagic',
    },
    contributeTo2ndRitual: {
        description: '',
        tier: 1,
    },
    contributeTo3rdRitual: {
        description: '',
        tier: 1,
        prerequisites: ['contributeTo2ndRitual'],
        replaces: 'contributeTo2ndRitual',
    },
    discernDaemonicBeing: {
        description: '',
        tier: 3,
    },
    thaulmonicAlignment: {
        description: '',
        tier: 3,
        restrictedPurchase: true,
    },
    impweaveExpertise: {
        description: '',
        tier: 3,
        restrictedPurchase: true,
    },
    immuneToFumble: {
        description: '',
        tier: 1,
    },
    immuneToFumbleAndShatter: {
        description: '',
        tier: 3,
        prerequisites: ['immuneToFumble'],
        replaces: 'immuneToFumble',
    },
    immuneToThrough: {
        description: '',
        tier: 4,
        prerequisites: ['immuneToFumbleAndShatter'],
    },
    magicResistance: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['immuneToThrough'],
        replaces: 'immuneToThrough',
    },
    tracking: {
        description: '',
        tier: 1,
    },
    strikedownShot: {
        description: '',
        tier: 4,
        prerequisites: ['immuneToFumbleAndShatter'],
    },
    haltShot: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['strikedownShot'],
        replaces: 'strikedownShot',
    },
    discernRace: {
        description: '',
        tier: 2,
        prerequisites: ['tracking'],
    },
    discernRaceAndPattern: {
        description: '',
        tier: 4,
        prerequisites: ['discernRace'],
        replaces: 'discernRace',
    },
    etherealShot: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['discernRaceAndPattern'],
        replaces: 'discernRaceAndPattern',
    },
    immuneToSleep: {
        description: '',
        tier: 4,
        prerequisites: ['immuneToBefriendAndConfusion'],
    },
    bowyerApprentice: {
        name: 'Bowyer (Apprentice)',
        description: '',
        tier: 4,
    },
    bowyerMaster: {
        name: 'Bowyer (Master)',
        description: '',
        tier: 4,
        prerequisites: ['bowyerApprentice'],
        replaces: 'bowyerApprentice',
    },
    handOfNature: {
        description: '',
        tier: 2,
    },
    trapLore: {
        description: '',
        tier: 3,
    },
    enchantProjectileWeapon: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
    },
    focusedThrough: {
        description: '',
        tier: 2,
        prerequisites: ['immuneToFumble'],
    },
    through: {
        description: '',
        tier: 4,
        restrictedPurchase: true,
        prerequisites: ['focusedThrough'],
        replaces: 'focusedThrough',
    },
    weaponFinesse: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['through'],
        replaces: 'through',
    },
    immuneToImmobilisation: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['immuneToRepelAndStrikedown'],
    },
    traverseFactionWards: {
        description: '',
        tier: 3,
    },
    tnsSpiral: {
        name: 'TNS Spiral',
        description: '',
        tier: 1,
        restrictedPurchase: true,
        prerequisites: ['oathswornScoutsGuild'],
    },
    identify: {
        description: '',
        tier: 2,
        prerequisites: [
            'spellcasting1||spellcasting2||incantation1||incantation2||healing1||healing2||corruption1||corruption2||senseMagic',
        ],
    },
    diagnosePowers: {
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['identify'],
        replaces: 'identify',
    },
    bankAdvisorClerk: {
        name: 'Bank Advisor (Clerk)',
        description: '',
        tier: 2,
        restrictedPurchase: true,
        prerequisites: ['oathswornBank'],
        replaces: 'oathswornBank',
    },
    bankAdvisorAssociate: {
        name: 'Bank Advisor (Associate)',
        description: '',
        tier: 3,
        restrictedPurchase: true,
        prerequisites: ['bankAdvisorClerk'],
        replaces: 'bankAdvisorClerk',
    },
    bankAdvisorBroker: {
        name: 'Bank Advisor (Broker)',
        description: '',
        tier: 4,
        restrictedPurchase: true,
        prerequisites: ['bankAdvisorAssociate'],
        replaces: 'bankAdvisorAssociate',
    },
    generalKnowledgeX: {
        name: 'General Knowledge <X>',
        description: '',
        tier: 1,
    },
    newsmonger: {
        description: '',
        tier: 2,
        prerequisites: ['generalKnowledgeX'],
        replaces: 'generalKnowledgeX',
    },
    improvedResearchAbility: {
        description: '',
        tier: 4,
        prerequisites: ['newsmonger'],
    },
    plus4SpellPower: {
        name: '+4 Spell Power',
        description: '',
        tier: 1,
    },
    plus8SpellPower: {
        name: '+8 Spell Power',
        description: '',
        tier: 2,
        prerequisites: ['plus4SpellPower'],
        replaces: 'plus4SpellPower',
    },
    plus12SpellPower: {
        name: '+12 Spell Power',
        description: '',
        tier: 4,
        prerequisites: ['plus8SpellPower'],
        replaces: 'plus8SpellPower',
    },
    plus16SpellPower: {
        name: '+16 Spell Power',
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['plus12SpellPower'],
        replaces: 'plus12SpellPower',
    },
    arcaneCrafterApprentice: {
        description: '',
        tier: 1,
    },
    arcaneCrafterAdept: {
        description: '',
        tier: 2,
        prerequisites: ['arcaneCrafterApprentice'],
        replaces: 'arcaneCrafterApprentice',
    },
    arcaneCrafterMaster: {
        description: '',
        tier: 4,
        prerequisites: ['arcaneCrafterAdept'],
        replaces: 'arcaneCrafterAdept',
    },
    darkIncantation: {
        description: '',
        tier: 1,
        restrictedPurchase: true,
    },
    daemonology: {
        description: '',
        tier: 1,
        restrictedPurchase: true,
    },
    elementalism: {
        description: '',
        tier: 1,
        restrictedPurchase: true,
    },
    enchanting: {
        description: '',
        tier: 1,
        restrictedPurchase: true,
    },
    lightIncantation: {
        description: '',
        tier: 1,
        restrictedPurchase: true,
    },
    necromancy: {
        description: '',
        tier: 1,
        restrictedPurchase: true,
    },
    shadowMagic: {
        description: '',
        tier: 1,
        restrictedPurchase: true,
    },
    theology: {
        description: '',
        tier: 1,
        restrictedPurchase: true,
    },
    highMagicDaemonology: {
        name: 'High Magic (Daemonology)',
        description: '',
        tier: 4,
        restrictedPurchase: true,
        prerequisites: ['daemonology'],
        replaces: 'daemonology',
    },
    highMagicElementalism: {
        name: 'High Magic (Elementalism)',
        description: '',
        tier: 4,
        restrictedPurchase: true,
        prerequisites: ['elementalism'],
        replaces: 'elementalism',
    },
    highMagicNecromancy: {
        name: 'High Magic (Necromancy)',
        description: '',
        tier: 4,
        restrictedPurchase: true,
        prerequisites: ['necromancy'],
        replaces: 'necromancy',
    },
    highMagicTheology: {
        name: 'High Magic (Theology)',
        description: '',
        tier: 4,
        restrictedPurchase: true,
        prerequisites: ['theology'],
        replaces: 'theology',
    },
    highMagicSpellcasting: {
        name: 'High Magic (Spellcasting)',
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['spellcasting2'],
    },
    highMagicCorruption: {
        name: 'High Magic (Corruption)',
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['corruption2'],
    },
    highMagicIncantation: {
        name: 'High Magic (Incantation)',
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['incantation2'],
    },
    highMagicHealing: {
        name: 'High Magic (Healing)',
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['healing2'],
    },
    quickArmourRepair: {
        description: '',
        tier: 1,
    },
    armourMastery: {
        description: '',
        tier: 2,
    },
    armourMasteryAdvanced: {
        name: 'Armour Mastery (Expert)',
        description: '',
        tier: 4,
        prerequisites: ['armourMastery'],
        replaces: 'armourMastery',
    },
    armourMasteryExpert: {
        name: 'Armour Mastery (Expert)',
        description: '',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['armourMasteryAdvanced'],
        replaces: 'armourMasteryAdvanced',
    },
    awakenedX: {
        name: 'Awakened <X>',
        description: '',
        tier: 1,
        restrictedPurchase: true,
    },
    tutor: {
        description: '',
        tier: 4,
        restrictedPurchase: true,
    },
    magicalArmourMastery: {
        description: '',
        tier: 2,
        prerequisites: ['lightArmourUse||mediumArmourUse||heavyArmourUse'],
    },
    escapeBonds: {
        description: '',
        tier: 3,
    },
    shieldDismissLevel: {
        description: '',
        tier: 3,
        restrictedPurchase: true,
    },
    fearsomeAspect: {
        description: '',
        tier: 4,
        restrictedPurchase: true,
    },
    plus1LHV: {
        name: '+1 LHV',
        description: '',
        tier: 5,
        restrictedPurchase: true,
    },
};
