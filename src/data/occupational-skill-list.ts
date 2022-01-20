import { IOccupationalSkill, occupationalSkills as os } from './skills';

export const occupationalSkillList: Record<string, Array<IOccupationalSkill>> = {
    alchemistsGuild: [
        os.createPoisonNovice,
        os.createPoisonArtisan,
        os.createPoisonMaster,
        os.createPoisonMagical,
        os.createPotionNovice,
        os.createPotionArtisan,
        os.createPotionMaster,
        os.createPotionMagical,
        os.createReagents,
        os.createReagentsImproved,
        os.increasedAlchemicalProduction,
        os.createAntidotes,
        os.createAntidotesImproved,
        os.herbLore,
        os.oiledWeapons,
        os.masterPoisoner,
        os.forensicAnalysis,
        os.immuneToLethalAlchemicalVenoms,
    ],
    armourersGuild: [
        os.armoursmithApprentice,
        os.repairEnchantedItems,
        os.armoursmithArtisan,
        os.armoursmithMaster,
        os.weaponsmithApprentice,
        os.repairDestroyedItems,
        os.weaponsmithArtisan,
        os.weaponsmithMaster,
        os.immuneToRepel,
        os.immuneToRepelAndStrikedown,
        os.mightyBlow,
        os.crushingBlow,
        os.additionalReforging,
        os.spellTempering,
        os.shieldMastery,
        os.shieldMasteryExpert,
    ],
    bardsGuild: [
        os.detectAndRemoveBeguile,
        os.immuneToCharms,
        os.castMassCharms,
        os.beguile,
        os.immuneToFear,
        os.immuneToMute,
        os.rally,
        os.immuneToMindEffects,
        os.sleeplessChanting,
        os.unendingVoice,
        os.translateNamedScriptX,
        os.writtenForgery,
        os.forgery,
        os.scriptMasterX,
        os.polyglot,
        os.herbLore,
        os.immuneToBefriendAndConfusion,
    ],
    casinoGuild: [
        os.detectAndRemoveBeguile,
        os.immuneToCharms,
        os.castMassCharms,
        os.immuneToFear,
        os.immuneToMute,
        os.rally,
        os.immuneToMindEffects,
        os.locate,
        os.concealItem,
        os.concealItemImproved,
        os.performTransportRite,
        os.performTeleportRite,
    ],
    corruptorsGuild: [
        os.revitaliseUnliving,
        os.repairUnlivingAdvanced,
        os.mindHealing,
        os.sourceOfUnlife,
        os.mortician,
        os.morticianExpert,
        os.dismissControlPlus2,
        os.dismissControlPlus4,
        os.dismissControlPlus6,
        os.dismissControlPlus8,
        os.healAlienOrAberrantPattern,
        os.healMagicalPattern,
        os.immuneToFear,
        os.immuneToDisease,
        os.discernUnliving,
    ],
    healersGuild: [
        os.revive,
        os.advancedHealing,
        os.mindHealing,
        os.sourceOfLife,
        os.triageMaster,
        os.triageExpert,
        os.discernPatternType,
        os.advancedPatternScan,
        os.healAlienOrAberrantPattern,
        os.healMagicalPattern,
        os.immuneToDisease,
        os.guardedChannelling,
        os.herbLore,
        os.discernElementalBeing,
    ],
    incantorsGuild: [
        os.dismissControlPlus2,
        os.dismissControlPlus4,
        os.dismissControlPlus6,
        os.dismissControlPlus8,
        os.lastRites,
        os.lastRitesImproved,
        os.castAdditionalIncantation,
        os.castHighCountermagic,
        os.masterCountermagic,
        os.castAdditionalIncantation,
        os.transcendArmour,
        os.champion,
        os.dedicatedFollower,
        os.damageReductionFatal,
        os.immuneToFear,
        os.discernAncestralBeing,
        os.discernUnliving,
    ],
    magesGuild: [
        os.riteMaster,
        os.ritualMagicImproved,
        os.ritualistExpert,
        os.ritualistMaster,
        os.castHighCountermagic,
        os.masterCountermagic,
        os.castAdditionalMagecraft,
        os.transcendArmour,
        os.champion,
        os.contributeTo2ndRitual,
        os.contributeTo3rdRitual,
        os.performTransportRite,
        os.discernDaemonicBeing,
        os.thaulmonicAlignment,
        os.impweaveExpertise,
    ],
    militiaGuild: [
        os.immuneToFumble,
        os.immuneToFumbleAndShatter,
        os.immuneToThrough,
        os.magicResistance,
        os.immuneToRepel,
        os.immuneToRepelAndStrikedown,
        os.mightyBlow,
        os.crushingBlow,
        os.immuneToFear,
        os.immuneToMute,
        os.rally,
        os.immuneToMindEffects,
        os.tracking,
        os.locate,
        os.shieldMastery,
        os.shieldMasteryExpert,
    ],
    rangersGuild: [
        os.immuneToFumble,
        os.immuneToFumbleAndShatter,
        os.strikedownShot,
        os.haltShot,
        os.tracking,
        os.discernRace,
        os.discernRaceAndPattern,
        os.etherealShot,
        os.immuneToBefriendAndConfusion,
        os.immuneToSleep,
        os.bowyerApprentice,
        os.bowyerMaster,
        os.oiledWeapons,
        os.handOfNature,
        os.trapLore,
        os.enchantProjectileWeapon,
    ],
    scoutsGuild: [
        os.immuneToFumble,
        os.focusedThrough,
        os.through,
        os.weaponFinesse,
        os.immuneToRepel,
        os.immuneToRepelAndStrikedown,
        os.immuneToImmobilisation,
        os.translateNamedScriptX,
        os.writtenForgery,
        os.forgery,
        os.tracking,
        os.concealItem,
        os.locate,
        os.traverseFactionWards,
        os.trapLore,
        os.tnsSpiral,
        os.oiledWeapons,
        os.masterPoisoner,
    ],
    bankOfErdreja: [
        os.immuneToFumble,
        os.concealItem,
        os.locate,
        os.identify,
        os.diagnosePowers,
        os.immuneToMindEffects,
        os.bankAdvisorClerk,
        os.bankAdvisorAssociate,
        os.bankAdvisorBroker,
    ],
    knowledgeGuilds: [os.generalKnowledgeX, os.newsmonger, os.improvedResearchAbility],
    arcaneGuilds: [
        os.plus4SpellPower,
        os.plus8SpellPower,
        os.plus12SpellPower,
        os.plus16SpellPower,
        os.arcaneCrafterApprentice,
        os.arcaneCrafterAdept,
        os.arcaneCrafterMaster,
        os.darkIncantation,
        os.daemonology,
        os.elementalism,
        os.enchanting,
        os.lightIncantation,
        os.necromancy,
        os.shadowMagic,
        os.theology,
        os.highMagicDaemonology,
        os.highMagicElementalism,
        os.highMagicNecromancy,
        os.highMagicTheology,
        os.highMagicSpellcasting,
        os.highMagicCorruption,
        os.highMagicIncantation,
        os.highMagicHealing,
        os.identify,
        os.diagnosePowers,
    ],
    martialGuilds: [
        os.quickArmourRepair,
        os.armourMastery,
        os.armourMasteryAdvanced,
        os.armourMasteryExpert,
    ],
    generic: [
        os.immuneToRepel,
        os.immuneToRepelAndStrikedown,
        os.immuneToImmobilisation,
        os.awakenedX,
        os.tutor,
        os.magicalArmourMastery,
        os.escapeBonds,
        os.shieldDismissLevel,
        os.fearsomeAspect,
        os.plus1LHV,
    ],
};
