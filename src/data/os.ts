/**
 * All content in this file is copyright 2023 Lorien Trust - no reproduction or
 * alteration of this data is permissable without permission from Lorien Trust
 * or its parent company, Merlinroute.
 */

export const os = {
    createPoisonNovice: {
        name: 'Create Poison (Novice)',
        description:
            'This skill allows the character to make a level 1 poison at each Lorien Trust Main Event with ingredients that can be obtained and used in the Alchemists Guild. This skill may also be used with the Distilling process.',
        tier: 2,
        prerequisites: ['poisonLore'],
    },
    createPoisonArtisan: {
        name: 'Create Poison (Artisan)',
        description:
            'This skill allows the character to make a level 1 and a level 2 poison at each Lorien Trust Main Event with ingredients that can be obtained and used in the Alchemists Guild. This skill may also be used with the Distilling process.',
        tier: 3,
        prerequisites: ['poisonLore', 'createPoisonNovice'],
        replaces: 'createPoisonNovice',
    },
    createPoisonMaster: {
        name: 'Create Poison (Master)',
        description:
            'This skill allows the character to make a level 1, a level 2 and a level 3 poison at each Lorien Trust Main Event with ingredients that can be obtained and used in the Alchemists Guild. This skill may also be used with the Distilling process.',
        tier: 4,
        prerequisites: ['poisonLore', 'createPoisonArtisan'],
        replaces: 'createPoisonArtisan',
    },
    createPoisonMagical: {
        name: 'Create Poison (Magical)',
        description:
            'This skill allows the character to make a level 1, a level 2 and a level 3 poison at each Lorien Trust Main Event plus one Magical poison per event with ingredients that can be obtained and used in the Alchemists Guild. Once per year a character with the Create Poison (Magical) Occupational Skill can use their Magical Poison create for that event to create a single Tailored Magical Poison. Details of levels and costs of materials can be gained in-character at the Alchemists Guild. Note: The term Magical used for this skill refers to the level of expertise, as many of the lower level poisons can also be magical in nature.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['poisonLore', 'createPoisonMaster'],
        replaces: 'createPoisonMaster',
    },
    createPotionNovice: {
        name: 'Create Potion (Novice)',
        description:
            'This skill allows the character to make a level 1 potion at each Lorien Trust Main Event with ingredients that can be obtained and used in the Alchemists Guild. This skill may also be used with the Distilling process.',
        tier: 2,
        prerequisites: ['potionLore'],
    },
    createPotionArtisan: {
        name: 'Create Potion (Artisan)',
        description:
            'This skill allows the character to make a level 1 and a level 2 potion at each Lorien Trust Main Event with ingredients that can be obtained and used in the Alchemists Guild. This skill may also be used with the Distilling process.',
        tier: 3,
        prerequisites: ['potionLore', 'createPotionNovice'],
        replaces: 'createPotionNovice',
    },
    createPotionMaster: {
        name: 'Create Potion (Master)',
        description:
            'This skill allows the character to make a level 1, a level 2 and a level 3 potion at each Lorien Trust Main Event with ingredients that can be obtained and used in the Alchemists Guild. This skill may also be used with the Distilling process.',
        tier: 4,
        prerequisites: ['potionLore', 'createPotionArtisan'],
        replaces: 'createPotionArtisan',
    },
    createPotionMagical: {
        name: 'Create Potion (Magical)',
        description:
            'This skill replaces Create Potion (Master) and allows the character to make a level 1, a level 2 and a level 3 potion at each Lorien Trust Main Event plus one Magical potion per event with ingredients that can be obtained and used in the Alchemists Guild. Once per year a character with the Create Potion (Magical) Occupational Skill can use their Magical Potion create for that event to create a single Tailored Magical Potion. Details of levels and costs of materials can be gained In-character at the Alchemists Guild. Note: The term Magical used for this skill refers to the level of expertise, as many of the lower level potions can also be magical in nature. If a Potion has a PR of 1 or more it is considered Magical for the purposes of Lammies, Loresheets and Special Creatures',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['potionLore', 'createPotionMaster'],
        replaces: 'createPotionMaster',
    },
    createReagents: {
        description:
            'This skill allows the character to create one alchemical reagent at each Lorien Trust Main Event using ingredients from the Alchemists Guild. These reagents will expire at the end of the event and can be used to improve and aid the creation of Alchemical items. The character must gain permission from the Guild to use their facilities.',
        tier: 1,
        prerequisites: ['poisonLore||potionLore'],
    },
    createReagentsImproved: {
        name: 'Create Reagents (Improved)',
        description:
            ' This skill replaces Create Reagents and allows the character to create two alchemical reagents at each Lorien Trust Main Event using ingredients from the Alchemists Guild. These reagents will expire at the end of the event and can be used to improve and aid the creation of both Alchemical items. The character must gain permission from the Guild to use their facilities.',
        tier: 2,
        prerequisites: ['createReagents'],
        replaces: 'createReagents',
    },
    increasedAlchemicalProduction: {
        description:
            'Any crafted Potion, Poison or Antidote created with the characters own occupational skills count as being created with reagents. The character will not create reagents that can be traded, given away or otherwise used by any other character – instead their skill in Alchemy mimics the requirement for their use',
        tier: 4,
        prerequisites: ['createReagentsImproved'],
        replaces: 'createReagentsImproved',
    },
    createAntidotes: {
        description:
            'This skill allows the character to make a single first level antidote or protection potion at each Lorien Trust Main Event',
        tier: 1,
        prerequisites: ['poisonLore||potionLore'],
    },
    createAntidotesImproved: {
        name: 'Create Antidotes (Improved)',
        description:
            'This skill allows the character to make up to three first or second level antidotes or protection potions at each Lorien Trust Main Event.',
        tier: 3,
        prerequisites: ['createAntidotes'],
        replaces: 'createAntidotes',
    },
    herbLore: {
        description:
            'This skill allows the character to use herbs and natural ingredients from a local area, utilising regional remedies and natural skills to cause effects similar and often the same as some spells. Before each event you can download a Herb Loresheet from the Lorien Trust Website. This sheet should be filled out and carried with your character card whist in-character. The sheet will detail the number of herbs available to you each day (12) as well as boxes to mark off (in a similar way to Spell Power Sheets for Casters) and will additionally detail the effects of each herb (or combination). Each Herb application requires a proximity action (holding your hand approx. 1ft from the target/target location) for 10 seconds (this does not require concentration). This sheet represents your ability to quickly pick and use herbs in your immediate area that are easily secreted - and cannot be traded or stolen.',
        tier: 1,
    },
    oiledWeapons: {
        description:
            'A character with this skill may apply and use weapon oils on their own melee, projectile or thrown weapons without the Poison Lore CS. This cannot be used with a skill, lammie or loresheet that would modify the damage effect and it will not grant access to the Poison Loresheet. Requires concentration to use and follows the same rules as applying a Venom to a melee weapon in the Poison Lore Character skill (3 seconds minimum concentration). See the entry for Weapon Oils in the Potion and Poison section of the Handbook',
        tier: 3,
        prerequisites: ['immuneToFumble'],
    },
    masterPoisoner: {
        description:
            'The use of the Master Poisoner skill requires the presence of a Referee or Marshal and they will determine a reasonable amount of time that the poison will linger (no longer than 30 mins after which the poison will be spoiled).\n• The character may place a venom poison or weapon oil upon an object or area no larger than 1 foot by 1 foot (approx. 30cm) in size. The first person to come into contact this object or area will be affected by the oil or venom in all ways as if struck by a weapon (and if the location is armoured, the rules apply for that as well). This can include doors, weapons and shield grips, In-character objects or patches of floor, furniture or even drinking vessels (outside of). The referee or Marshal will determine if an item is unsuitable - this may include areas or items considered ineligible for health and safety.\n• A venom or weapon oil may be directly applied to an immobilised or unconscious character by concentrating for 10 seconds with the primary hand held approx. 1ft above the character. If applied in this way, the armour of the target is considered to be bypassed(including magical armour).\n• A venom or weapon oil may be directly applied to an item (such as a book, piece of A4 paper, item or part of an item they are holding - like the handle of a dagger) and pass this to another character to be affected. The item must be held in the off-hand and the Poison or weapon oil applied with the main hand. The master Poisoner must keep the item in the off-hand until passed on or placed. Once contact with the item has been broken the rules in the first point of Master Poisoner above take precedence.\n• A venom may be applied to an item of food or drink (Warning – This may only ever be a roleplayed action, adding any ingredient, however safe to real food or drink will not be tolerated). The first character to consume any part of the poisoned food or drink will be affected by the venom as if they had been struck by a venom that has bypassed all armour',
        tier: 4,
    },
    forensicAnalysis: {
        description:
            'With this skill, the character may examine a dead body for 1 minute and detect if the character was under the influence of a poison when they died and how quickly the poison acted, as well as determining if the Poison was Magical or not. After a further 1 minute of examination the Race, Pattern Type and details of any potions that were affecting the character when it died can also be determined',
        tier: 3,
    },
    immuneToLethalAlchemicalVenoms: {
        description: 'The character is immune to all Lethal Alchemical Venoms (Non-Magical).',
        tier: 4,
    },
    armoursmithApprentice: {
        name: 'Armoursmith (Apprentice)',
        description:
            'This skill allows the character to make a level 1 suit of armour or a level 1 shield at each Lorien Trust Main Event (1 item total per event). In addition, this skill also allows one reforge (a process of heating and quenching) that allows more powerful, complex or desirable items to be made. The character may only use these reforge abilities on an item that they are creating themselves and some items may require more than one reforge to create. A character with this skill may remove a Corrosion effect from an armour location with 30 seconds of appropriate roleplay',
        tier: 1,
    },
    repairEnchantedItems: {
        description:
            'This skill allows the character to make a level 1 suit of armour or a level 1 shield at each Lorien Trust Main Event (1 item total per event). This skill also allows one reforge (a process of heating and quenching) that allow more powerful, complex or desirable items – the character may only use these reforge abilities on an item that they are creating themselves and some items may require more than one reforge to create. In addition this skill allows the character to repair crafted shields that have been destroyed. This repair requires a minimum of 1 minute of appropriate roleplayed action. A character with this skill may remove a Corrosion effect from an armour location with 30 seconds of appropriate roleplay.',
        tier: 2,
        prerequisites: ['armoursmithApprentice'],
        replaces: 'armoursmithApprentice',
    },
    armoursmithArtisan: {
        name: 'Armoursmith (Artisan)',
        description:
            'This skill allows the character to make a level 1 and level 2 suit of armour or level 1 and level 2 shield at each Lorien Trust Main Event (mix and match - 2 items in total per event). In addition, this skill also allows two reforges (a process of heating and quenching) that allows more powerful, complex or desirable items to be made. The character may only use these reforge abilities on an item that they are creating themselves and some items may require more than one reforge to create. In addition this skill also allows the character to repair a crafted shield that has been destroyed. This repair requires a minimum of 1 minute appropriate roleplayed action and is reduced to a minimum of 30 seconds for a shield if the character also has the CS Shield Use. A character with this skill may remove a Corrosion effect from an armour location with 30 seconds of appropriate roleplay.',
        tier: 4,
        prerequisites: ['repairEnchantedItems'],
        replaces: 'repairEnchantedItems',
    },
    armoursmithMaster: {
        name: 'Armoursmith (Master)',
        description:
            'This skill replaces Armoursmith (Artisan) and allows the character to make a level 1, level 2 and level 3 suit of armour or level 1, level 2 and level 3 shield at each Lorien Trust Main Event (mix and match - 3 items in total per event). In addition, this skill also allows three reforges (a process of heating and quenching) that allows more powerful, complex or desirable items to be made. The character may only use these reforge abilities on an item that they are creating themselves and some items may require more than one reforge to create. In addition this skill allows the character to repair any shield (crafted or otherwise) that has been destroyed. This repair requires a minimum of 1 minute appropriate roleplayed action and is reduced to a minimum of 30 seconds for a shield if the character also has the CS Shield Use. A character with this skill may remove a Corrosion effect from an armour location with 30 seconds of appropriate roleplay.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['armoursmithArtisan'],
        replaces: 'armoursmithArtisan',
    },
    weaponsmithApprentice: {
        name: 'Weaponsmith (Apprentice)',
        description:
            'This skill allows the character to make a level 1 melee weapon or a level 1 shield at each Lorien Trust Main Event (1 item total per event). This skill also allows one reforge (a process of heating and quenching) that allow more powerful, complex or desirable items – the character may only use these reforge abilities on an item that they are creating themselves and some items may require more than one reforge to create.',
        tier: 1,
    },
    repairDestroyedItems: {
        description:
            'This skill allows the character to make a level 1 melee weapon or a level 1 shield at each Lorien Trust Main Event (1 item total per event). This skill also allows one reforge (a process of heating and quenching) that allow more powerful, complex or desirable items – the character may only use these reforge abilities on an item that they are creating themselves and some items may require more than one reforge to create. In addition this skill allows the character to repair a crafted weapon or shield that has been destroyed. This repair requires a minimum of 1 minute of appropriate roleplayed action.',
        tier: 2,
        prerequisites: ['weaponsmithApprentice'],
        replaces: 'weaponsmithApprentice',
    },
    weaponsmithArtisan: {
        name: 'Weaponsmith (Artisan)',
        description:
            'This skill replaces Repair Destroyed items and allows the character to make a level 1 and level 2 melee weapon or level 1 and level 2 shield at each Lorien Trust Main Event (2 items in total per event). This skill also allows two reforges (a process of heating and quenching) that allow more powerful, complex or desirable items – the character may only use these reforge abilities on an item that they are creating themselves and some items may require more than one reforge to create. In addition this skill allows the character to repair crafted weapons and shields that has been destroyed. This repair requires a minimum of 1 minute appropriate roleplayed action and is reduced to 30 seconds for a shield if the character also has the CS Shield Use.',
        tier: 4,
        prerequisites: ['repairDestroyedItems'],
        replaces: 'repairDestroyedItems',
    },
    weaponsmithMaster: {
        name: 'Weaponsmith (Master)',
        description:
            'This skill allows the character to make a level 1, level 2 and level 3 melee weapon or level 1, level 2 and level 3 shield at each Lorien Trust Main Event (3 items in total per event). This skill also allows three reforges (a process of heating and quenching) that allow more powerful, complex or desirable items – the character may only use these reforge abilities on an item that they are creating themselves and some items may require more than one reforge to create. In addition this skill allows the character to repair any weapon or shield (crafted or otherwise) that has been destroyed. This repair requires a minimum of 1 minute appropriate roleplayed action and is reduced to a minimum of 30 seconds for a shield if the character also has the CS Shield Use.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['weaponsmithArtisan'],
        replaces: 'weaponsmithArtisan',
    },
    immuneToRepel: {
        description: 'The character is immune to the Repel effect.',
        tier: 2,
    },
    immuneToRepelAndStrikedown: {
        description: 'The character is immune to the Strikedown and Repel effects.',
        tier: 3,
        prerequisites: ['immuneToRepel'],
        replaces: 'immuneToRepel',
    },
    mightyBlow: {
        description:
            'If the character has the Large melee weapon use CS may strike for the Strikedown effect with a large melee weapon. They are also immune to the effects Repel and Strikedown. This skill may not be purchased by anyone with the skill Goblin Resilience and prevents the purchase of Goblin Resilience.',
        tier: 4,
        prerequisites: ['immuneToRepelAndStrikedown'],
        replaces: 'immuneToRepelAndStrikedown',
    },
    crushingBlow: {
        description:
            'This skill allows a character to strike for the Crush or Strikedown effects with a well role-played blow with a large melee weapon held in two hands. The character is also immune to the Strikedown and Repel effects. This skill may not be purchased by anyone with the skill Goblin Resilience and prevents the purchase of Goblin Resilience.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['mightyBlow'],
        replaces: 'mightyBlow',
    },
    additionalReforging: {
        description:
            'This allows more powerful, complex or desirable items to be made. The character may only use these reforge abilities on an item that they are creating themselves and some items may require more than one reforge to create. See Armoursmith and Weaponsmith occupational skill entries for more details. If the character has both the Armoursmith and Weaponsmith occupational skill – they will gain an additional reforge for each.',
        tier: 1,
    },
    spellTempering: {
        description:
            'This skill allows the character to make a spell tempered (Standard) item at each Lorien Trust Main Event.',
        tier: 3,
        prerequisites: ['additionalReforging'],
        replaces: 'additionalReforging',
    },
    shieldMastery: {
        description:
            'A character with this skill can use a shield to parry weapon blows inflicting the Normal (non-magical) Crush effect without damaging the shield. This Occupational Skill will not alter any other damage effect that ignores armour.',
        tier: 3,
    },
    shieldMasteryExpert: {
        name: 'Shield Mastery (Expert)',
        description:
            ' A character with this skill can use a shield to parry weapon blows inflicting the Normal or Enchanted (Non-Artefact) Crush effect without damaging the shield. This Occupational Skill will not alter any other damage effect that ignores armour',
        tier: 3,
        prerequisites: ['shieldMastery'],
        replaces: 'shieldMastery',
    },
    detectAndRemoveBeguile: {
        description:
            'This skill gives a character the ability to detect and remove the Beguile effect on another character. To detect if an individual is under the influence of a Beguile, the character must engage them in meaningful conversation for at least 30 seconds, after which they may make the call “detect beguile”. To remove a Beguile it must be detected as above, the character must then continue the conversation for another thirty seconds. At the end of this period all effects of the Beguile are removed. This ability requires concentration.',
        tier: 2,
    },
    immuneToCharms: {
        description:
            'This skill makes the character immune to all charm effects (Befriend, Beguile, Enthral and Enthral Unliving).',
        tier: 3,
        prerequisites: ['detectAndRemoveBeguile'],
    },
    castMassCharms: {
        description:
            'The character is immune to all charm effects (Befriend, Beguile, Enthral and Enthral Unliving). The character may also change the effects Befriend, Enthral or Enthral Unliving into mass effects, if they are capable of casting them. This requires 4 power to cast as a level 3 spell effect. The enhanced spell counts in all ways as a mass spell and therefore cannot be countered. The vocals for the spell are “By my High Magic Power I mass Befriend you all/Enthral you all/Enthral Unliving”. Note: this effect may not be combined with Spell Reduction (regardless of source).',
        tier: 4,
        prerequisites: ['immuneToCharms'],
        replaces: 'immuneToCharms',
    },
    beguile: {
        description:
            'The character has the ability to detect and remove the Beguile effect and is immune to Charms. To detect if an individual is under the influence of a Beguile, the character must engage them in meaningful conversation for at least 30 seconds, after which they may make the call “detect beguile”. To remove a Beguile it must be detected as above, the character must then continue the conversation for another thirty seconds. At the end of this period all effects of the Beguile are removed. This ability requires concentration. The character also may use 4 spell Power to create an innate Beguile effect after 5 minutes of meaningful two-way conversation with their intended target. This effect cannot be countered and the OOC call is “innate beguile”. Note: this is an effect and not a spell and may not be combined with Spell Reduction.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['castMassCharms', 'detectAndRemoveBeguile'],
        replaces: 'detectAndRemoveBeguile',
    },
    immuneToFear: {
        description: 'This skill makes the character immune to the Fear effect.',
        tier: 1,
    },
    immuneToMute: {
        description: 'The character is immune to the Mute effect.',
        tier: 2,
        prerequisites: ['immuneToFear'],
    },
    rally: {
        description:
            'The character is immune to the Fear. Once per 10 mins the character may cast Mass Remove Fear (may not be countered). This ability does not require the caster to have any casting ability or power.',
        tier: 4,
        restrictedPurchase: true,
        prerequisites: ['immuneToMute', 'immuneToFear'],
        replaces: 'immuneToFear',
    },
    immuneToMindEffects: {
        description:
            'The character is immune to all Mind effects (Befriend, Beguile, Confusion, Disregard, Enthral, Enthral Unliving, Fear, Mass Fear, Remove Fear, Sleep).',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['rally'],
    },
    sleeplessChanting: {
        description: 'The character is immune to any sleep effect while casting a Chant effect.',
        tier: 2,
    },
    unendingVoice: {
        description:
            'This skill grants the character Spell Reduction (1) for all Chant effects. In addition, the character is immune to any Sleep effect while casting a Chant effect.',
        tier: 3,
        prerequisites: ['sleeplessChanting'],
        replaces: 'sleeplessChanting',
    },
    translateNamedScriptX: {
        name: 'Translate Named Script <X>',
        description:
            'This skill allows a character to translate one named script to common for every TNS that is purchased. Each of the most common scripts are listed below and fall into one to three Script families: Regional and Historical, People and Race, Myth and Magic. A loresheet for each script can be collected from Game Control once this skill is on the character card. Some TNS scripts are not listed below and are not part of the Script Categories – these TNS Scripts are only available with particular prerequisites or Loresheets. NOTE: Only a character with a TNS Skill may attempt to translate a language in this way. Any attempt to translate the script using a “Hard Skill” (i.e. using a process of deduction or by utilising out-of-character knowledge or devices) will be breaking the Spirit of the Rules and Cheating.',
        tier: 1,
    },
    writtenForgery: {
        description:
            'A character with this skill is able to create in-character forged documents. Once per event a character with the Written Forgery skill may create paperwork that allows access to training facilities, magical books or other resources that normally allow training. Both the Forging Character and Training Character must visit Game Control at the same time to complete the out-of-character function of the Written Forgery skill (this is in addition to any in-character roleplay). The Written Forgery that the skill creates, allows a single Tier 1, 2 or 3 skill (including restricted skills) from any Guild to be accessed. The skill will be added to the character card immediately. Guild permission is not required (or recommended) for the use of this training forgery.',
        tier: 4,
        prerequisites: ['translateNamedScriptX', 'recogniseForgery'],
    },
    forgery: {
        description:
            'A character with this skill is able to create forged items (excluding weapons, armour and shields) with appropriate additional skills. The character must be in the relevant Guild to use this skill and may create a single forged item per Lorien Trust Main Event. Forged crafted items (such as a Forged Potion) require an appropriate Create Skill and will consume a make slot from your event allocation of the appropriate level. The character must gain permission from the Guild to use their facilities.\nIn addition a character with this skill is able to create in-character forged documents. Once per event a character with the Forgery skill may create paperwork that allows access to training facilities, magical books or other resources that normally allow training. Both the Forging Character and Training Character must visit Game Control at the same time to complete the out-of-character function of the Forgery skill (this is in addition to any in-character roleplay). The Forgery allows a two Tier 1, 2 or 3 skills or a single Tier 4 skill (including restricted skills) from any Guild to be accessed. The skill will be added to the character card immediately. Guild permission is not required (or recommended) for the use of this training forgery.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['writtenForgery', 'recogniseForgery'],
        replaces: 'writtenForgery',
    },
    scriptMasterX: {
        name: 'Script Master <X>',
        description:
            'This skill replaces the TNS from the family of TNS skills it belongs to and allows a character to collect all of the loresheets for each of the TNS Scripts within that chosen Script Category (Regional and Historical, People and Race or Myth and Magic). This skill also allows the character to translate all of the named scripts in this category to common.',
        tier: 3,
        prerequisites: ['translateNamedScriptX'],
        replaces: 'translateNamedScriptX',
    },
    polyglot: {
        cost: 70,
        description:
            'This skill replaces Script Master and allows the character to collect all of the TNS Loresheets for the Scripts under the Regional & Historical, People & Race and Myth & Magic categories. This skill also allows the character to translate all of the named scripts in these categories to common.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['scriptMasterX'],
        replaces: 'scriptMasterX',
    },
    immuneToBefriendAndConfusion: {
        description: 'This skill makes the character immune to the Confusion and Befriend effects.',
        tier: 3,
    },
    locate: {
        description:
            'With this skill a character can do a more thorough and quicker search of an individual using the searching rules. A character using the Locate skill reduces the time required for performing an in-character search to 30 seconds. In addition, items concealed using the Conceal Item Occupational Skill must be revealed to the person using the Locate skill in addition to the normal search',
        tier: 2,
    },
    concealItem: {
        description:
            'With this skill a character can conceal a single item about their person. The item must be fully hidden in the character’s clothing or kit to count as concealed. This item cannot then be found by searching unless the Locate Occupational Skill is used. This item cannot be larger than a small melee weapon. Items will remain concealed even after character death. To use your conceal item skill you must attach a Conceal Item Lammie (available as a download from the Loresheets and Files PDF on the Lorien Trust Website), this will have your Character name and Player ID written on it before the lammie is sealed. To conceal an item requires concentration and will take 10 seconds – once the item is concealed, concentration is not required. You should attach your conceal lammie to the item and hide it within your character kit. When a concealed item is removed from its hidden place (by choice or through searching) the conceal lammie should be removed and retained to either re-attach using the rules above or for concealing a different item. NOTE: If you have an item that is concealed that is Magical (has a PR Rating) if a Detect magic is cast on you the detect magic will work but will not allow the item to be found. The concealed item may not be coins or an item such as a box or pouch containing coins.',
        tier: 2,
    },
    concealItemImproved: {
        name: 'Conceal Item (Improved)',
        description:
            'In addition to the Conceal item ability the restriction on the concealed items is lifted and you may conceal a pouch containing a maximum of 50 coins (Copper, Stell, Gold or Taal). This concealed pouch cannot be found by searching unless the searcher has the Locate Occupational Skill. The coins must remain in the pouch to count as concealed. You may use Conceal (improved) to conceal a single object (as per the Conceal Item occupational skill) instead of hiding coins but not at the same time. Items will remain concealed even after character death. To use your conceal item (Improved) skill you must attach a Conceal Item Lammie (available as a download from the Loresheets and Files PDF on the Lorien Trust Website), this will have your Character name and Player ID written on it before the lammie is sealed. To conceal a pouch requires concentration and will take 10 seconds - once the item is concealed, concentration is not required. You should attach your conceal lammie to the pouch and hide it within your character kit. When a concealed item is removed from its hidden place (by choice or through searching) the conceal lammie should be removed and retained to either re-attach using the rules above or for concealing a different item. NOTE: If you have an item that is concealed that is Magical (has a PR Rating) if a Detect magic is cast on you the detect magic will work but will not allow the item to be found.',
        tier: 3,
        prerequisites: ['concealItem'],
        replaces: 'concealItem',
    },
    performTransportRite: {
        description:
            ' This skill adds the Transportation Spell to the characters available spell list(s).',
        tier: 1,
    },
    performTeleportRite: {
        description:
            'This skill adds the Transportation and Teleport Spells to the characters available spell list(s). In addition the character has spell reduction (1) for the Teleport spell.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['performTransportRite'],
        replaces: 'performTransportRite',
    },
    revitaliseUnliving: {
        description:
            'Requirements to use: Repair Unliving Spell. This skill allows a character to extend a Repair Unliving to every location on a single character, for no additional Spell Power. The repair is location by location, not simultaneous and the Corruptor may choose what damage to repair first. Contact with any part of the target is sufficient but the Chant of Repair Unliving cannot repair any location with a mortal wound, these must be repaired separately. The spell functions in all other ways as normal. In addition the character may expend one power and concentrate on a target within proximity distance, after 10 seconds they may remove the debilitation effect.',
        tier: 1,
    },
    repairUnlivingAdvanced: {
        name: 'Repair Unliving (Advanced)',
        description:
            'This skill allows a character to extend a Chant of Repair Unliving to affect every location on a single character, without requiring extra Spell Power. The repair is location by location, not simultaneous and the Corruptor may choose what damage to repair first. Proximity distance with any part of the target is sufficient and the spell functions in all other ways as normal. In addition the character may expend one power and concentrate on a target within proximity distance, after 10 seconds they may remove the debilitation effect',
        tier: 2,
        prerequisites: ['revitaliseUnliving'],
        replaces: 'revitaliseUnliving',
    },
    mindHealing: {
        description:
            'A character with this skill may extend the Discerning Wounds vocal to include the detection of mind effects. This detection effect requires a minimum of 10 seconds whilst holding a hand in proximity range of the target and using the vocals “Discern Wound, Poison, Pattern Effect, Dismiss, Disease or Mind Effect”. The character with this skill may also add to a Chant of Heal Wound or Chant of Repair Unliving Spell with the additional vocal “and also remove any Mind Effects from your pattern”. If this spell (and additional vocal) is maintained for a minimum of 30 seconds the character will remove all Mind effects from the target. Using this ability requires concentration. In addition the character with this Occupational Skill also has the Immune to Sleep Occupational Skill',
        tier: 4,
        prerequisites: ['repairUnlivingAdvanced||advancedHealing'],
    },
    sourceOfUnlife: {
        description:
            ' This skill includes the Repair Unliving (Advanced) and Mind Healing Occupational Skills. It also allows the character to cast the Total Repair Unliving Spell without having the requirement of the High Magic Occupational Skill. If the character gains the High Magic (Corruption) Occupational Skill, they gain Spell Reduction (3) for the spell Total Repair Unliving.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['corruption2', 'mindHealing', 'repairUnlivingAdvanced'],
        replaces: ['mindHealing', 'repairUnlivingAdvanced'],
    },
    mortician: {
        description:
            'Enables a character with the Triage (Advanced) CS to use it on corporeal Unliving characters. Note: This skill has no effect on a person suffering from Disease, Decay or on a location with a Fatal wound or Smite effect. Requires Concentration to use. This skill will have no effect when used with Triage (Advanced) for raising LHV above 0 (zero).',
        tier: 2,
        prerequisites: ['triageAdvanced'],
    },
    morticianExpert: {
        name: 'Mortician (Expert)',
        description:
            'This skill reduces the time required for each Mortician activity to 30 seconds rather than 1 minute. This skill will have no effect when used with Triage (Advanced) for raising LHV above 0 (zero)',
        tier: 4,
        prerequisites: ['mortician'],
        replaces: 'mortician',
    },
    dismissControlPlus2: {
        name: 'Dismiss/Control +2',
        description:
            'This skill allows the character to add 2 to the total of any Dismiss or Control they cast, including casting as part of a wedge. Note: A Wedge must consist of at least 3 contributing characters – all casting the same Dismiss or Control affect (I.e. Control Elemental) and may include both normal and High Casting versions of the same spell.',
        tier: 1,
    },
    dismissControlPlus4: {
        name: 'Dismiss/Control +4',
        description:
            'This skill allows the character to add 4 to the total of any Dismiss or control they cast, including casting as part of a wedge. Note: A Wedge must consist of at least 3 contributing characters - all casting the same Dismiss or Control affect (I.e. Control Elemental) and may include both normal and High Casting versions of the same spell',
        tier: 2,
        prerequisites: ['dismissControlPlus2'],
        replaces: 'dismissControlPlus2',
    },
    dismissControlPlus6: {
        name: 'Dismiss/Control +6',
        description:
            'This skill allows the character to add 6 to the total of any Dismiss or control they cast, including casting as part of a wedge. Note: A Wedge must consist of at least 3 contributing characters - all casting the same Dismiss or Control affect (I.e. Control Elemental) and may include both normal and High Casting versions of the same spell.',
        tier: 4,
        prerequisites: ['dismissControlPlus4'],
        replaces: 'dismissControlPlus4',
    },
    dismissControlPlus8: {
        name: 'Dismiss/Control +8',
        description:
            'This skill allows the character to add 8 to the total of any Dismiss or control they cast, including casting as part of a wedge. Note: A Wedge must consist of at least 3 contributing characters - all casting the same Dismiss or Control affect (I.e. Control Elemental) and may include both normal and High Casting versions of the same spell',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['dismissControlPlus6'],
        replaces: 'dismissControlPlus6',
    },
    healAlienOrAberrantPattern: {
        description:
            'A character with this skill may use any of their Cure (in the Cure Category) effects on individuals with Alien or Aberrant life patterns. This skill does not grant any additional ability to heal Unliving or Magical Patterns.',
        tier: 3,
        prerequisites: ['healing1||healing2||corruption1||corruption2'],
    },
    healMagicalPattern: {
        description:
            'A character with this skill may use any or their Cure (in the Cure Category) effects on individuals with Alien, Aberrant or Magical Patterns. This skill does not work on Unliving Patterns.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['healAlienOrAberrantPattern'],
        replaces: 'healAlienOrAberrantPattern',
    },
    immuneToDisease: {
        description: 'This skill makes the character immune to the Disease effect',
        tier: 3,
        prerequisites: ['healing1||healing2||corruption1||corruption2'],
    },
    discernUnliving: {
        description:
            'A character with this skill may, after 10 seconds of concentration on a single target within 30 feet (~9m), make the call “discern level of Unliving being or possession” or ask a referee or marshal to enquire from the target. If the target examined is an Unliving being or has an Unliving possession they should tell the discerner the dismiss level. The target will not be aware in-character that they have been discerned. Some Unliving creatures may be shielded from this effect and may be able to locate the direction or even the character Discerning, see Shield Dismiss Level Occupational Skill',
        tier: 3,
    },
    revive: {
        description:
            'This skill allows a character to extend a Chant of Heal Wound to every location on a single character, for no additional Spell Power. The healing is location by location, not simultaneous and the healer may choose what damage to heal first. Proximity distance with any part of the target is sufficient but the Chant of Heal Wound cannot heal any location with a mortal wound, these must be healed separately. The spell functions in all other ways as normal. In addition the character may expend one power and concentrate on a target within proximity distance, after 10 seconds they may remove a non-venom debilitation effect.',
        tier: 1,
        prerequisites: ['healing1||healing2'],
    },
    advancedHealing: {
        description:
            'This skill allows a character to extend a Chant of Heal Wound to affect every location on a single character, without requiring extra spell Power. The healing is location by location, not simultaneous and the healer may choose what damage to heal first. In addition the character may expend one power and concentrate on a target within proximity distance, after 10 seconds they may remove the debilitation effect.',
        tier: 2,
        prerequisites: ['revive'],
        replaces: 'revive',
    },
    sourceOfLife: {
        description:
            'This skill includes the Advanced Healing and Mind Healing Occupational Skills. It also allows the character to cast the Total Heal Spell without having the requirement of the High Magic Occupational Skill. If the character gains the High Magic (Healing) Occupational Skill, they gain Spell Reduction (3) for the spell Total Heal.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['healing2', 'mindHealing', 'advancedHealing'],
        replaces: ['mindHealing', 'advancedHealing'],
    },
    triageMaster: {
        name: 'Triage (Master)',
        description:
            'This skill reduces the time required for each Triage (Advanced) activity to 30 seconds rather than 1 minute to a Living pattern. This skill will have no effect when used with Triage (Advanced) for raising LHV above 0 (zero).',
        tier: 2,
        prerequisites: ['triageAdvanced'],
    },
    triageExpert: {
        name: 'Triage (Expert)',
        description:
            'This skill reduces the time required for each Triage (Advanced) activity to 30 seconds rather than 1 minute to a Living Pattern. In addition the character may use the Triage (Expert) to repair damage to an Alien or Magical Pattern using the standard Triage (Advanced) Character skill rules (1 min per location). This skill will have no effect when used with Triage (Advanced) for raising LHV above 0 (zero).',
        tier: 4,
        prerequisites: ['triageMaster'],
        replaces: 'triageMaster',
    },
    discernPatternType: {
        description:
            'This skill gives a character the ability to determine the type of the target\'s pattern (Living, Unliving or Magical). This requires the character to place their hand approx. 1ft of the character and concentrate for 10 seconds and make the call "Discern Pattern Type". This does not allow the detection of Alien or Aberrant patterns',
        tier: 1,
        prerequisites: ['healing1||healing2||corruption1||corruption2'],
    },
    advancedPatternScan: {
        description:
            'The character may place a hand approx. 1ft from the target and concentrate for 10 seconds to discern their pattern type (Living, Unliving, or Magical), if they are an Alien or Aberrant pattern and if they are under the effects of a possession. They will not be able to detect the rank of the possession. If a referee or marshal is present they may add additional information. A character with the Advanced Pattern skill will also be able to detect if a character is Regenerating damage but will not be able to detect the rate at which they are regenerating. Advanced pattern scan may also allow the detection and understanding of the cures required for some Curses.',
        tier: 4,
        prerequisites: ['discernPatternType'],
        replaces: 'discernPatternType',
    },
    guardedChannelling: {
        description:
            'A Channeler with this skill may add to any non-instant Cure spell (in the Cure Category) to the vocal “and also claim an aura of defence”. They will then be under an Aura of Defence while casting the non-instant Cure spell. The Aura of Defence effect will end as soon as the location(s) being cured are fully cured.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['healing1||healing2', 'immuneToDisease'],
        replaces: 'immuneToDisease',
    },
    discernElementalBeing: {
        description:
            'A character with this skill can, after 10 seconds of concentration at a range of up to 30 feet (~9m), make the call “discern level of elemental being or possession” or ask a referee or marshal to enquire from the target. If the target examined is an elemental being or has an elemental possession, they should tell the discerner the dismiss level. The target will not be aware in-character that they have been discerned. Some Elemental creatures may be shielded from this effect and may be able to locate the direction or even the character Discerning, see Shield Dismiss Level Occupational Skill.',
        tier: 3,
    },
    lastRites: {
        description: 'This skill grants Spell Reduction (1) on the effect Lay to Rest',
        tier: 1,
        prerequisites: ['incantation1||incantation2'],
    },
    lastRitesImproved: {
        name: 'Last Rites (Improved)',
        description:
            'This skill grants the character Spell Reduction (1) for the spell Lay to Rest and Spell Reduction (2) for the Spell Speak with Ancestor.',
        tier: 4,
        prerequisites: ['lastRites'],
        replaces: 'lastRites',
    },
    castAdditionalIncantation: {
        description:
            'The character can cast spells from the standard Incantation list as well as their converted spell list.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: [
            'lightIncantation||darkIncantation',
            'lastRitesImproved||masterCountermagic',
        ],
    },
    castHighCountermagic: {
        description:
            'With this skill a character may use 4 power and cast a High Countermagic spell.',
        tier: 3,
        prerequisites: ['incantation1||incantation2||spellcasting1||spellcasting2'],
    },
    masterCountermagic: {
        description:
            'The caster may cast the High Countermagic spell and have Spell Reduction (1) for the effects Iron Will and High Countermagic.',
        tier: 4,
        prerequisites: ['castHighCountermagic||highMagicIncantation||highMagicSpellcasting'],
        replaces: 'castHighCountermagic',
    },
    transcendArmour: {
        description:
            'This skill allows the character to cast ranged spells (that they are able to cast) in medium armour and mass spells in heavy armour. They still may not cast ranged spells in heavy armour.',
        tier: 2,
        prerequisites: ['lightArmourUse||mediumArmourUse||heavyArmourUse'],
    },
    champion: {
        description:
            'This skill allows the character to cast ranged and mass spells in any level of armour.',
        tier: 4,
        prerequisites: ['transcendArmour'],
        replaces: 'transcendArmour',
    },
    dedicatedFollower: {
        description:
            'The character is automatically affected by the Lay to Rest effect upon death. In addition if the character with Dedicated Follower gains a Paladin Armour High Sigil it will confer an AV of 3 on all locations instead of 2 (but will follow all of the standard rules for the spell including the maximum AV of 4 for an Armour Type).',
        tier: 3,
    },
    damageReductionFatal: {
        description:
            'Grants the character Damage Reduction (Fatal) and changes the Fatal Damage effect to the following:\n• Fatal only affects Living patterns\n• The Fatal default damage type is Enchanted unless preceded by an Elemental Weakness or Artefact\n• Inflicts a single blow to the location ignoring the Ritual of Peace\n• Ignores all armour\n• Places the Target into their Grace Period\n• Prevents healing (and Regeneration) from affecting the Target until all the Fatal Wounds are removed',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['dedicatedFollower'],
        replaces: 'dedicatedFollower',
    },
    discernAncestralBeing: {
        description:
            'A character with this skill can, after 10 seconds of concentration at a range of up to 30 feet (~9m), make the call “discern level of ancestral being or possession” or ask a referee or marshal to enquire from the target. If the target examined is an ancestral being or has an ancestral possession, they should tell the discerner the dismiss level. The target will not be aware in-character that they have been discerned. Some Ancestral creatures may be shielded from this effect and may be able to locate the direction or even the character Discerning, see Shield Dismiss Level Occupational Skill.',
        tier: 3,
    },
    riteMaster: {
        description:
            'This skill allows a character to use Spell Power donated from other characters towards the Spell Power cost of any rite that involves both the rite master and the donating character. This donation must be OOC.',
        tier: 1,
        prerequisites: ['ritualMagic1||ritualMagic2||ritualMagic3'],
    },
    ritualMagicImproved: {
        name: 'Ritual Magic (Improved)',
        description:
            'The character may add 1 to the power of any ritual they perform. The character may also use Spell Power donated from other characters towards the Spell Power cost of any rite that involves both the rite master and the donating character. This donation must be OOC.',
        tier: 3,
        prerequisites: ['riteMaster'],
        replaces: 'riteMaster',
    },
    ritualistExpert: {
        name: 'Ritual Magic (Expert)',
        description:
            'The character may add 3 to the power of any ritual they perform. The character may also use Spell Power donated from other characters towards the Spell Power cost of any rite that involves both the rite master and the donating character. This donation must be OOC.',
        tier: 4,
        prerequisites: ['ritualMagicImproved'],
        replaces: 'ritualMagicImproved',
    },
    ritualistMaster: {
        name: 'Ritual Magic (Master)',
        description:
            'The character may add a total of 5 to the power of any ritual they perform. The character may also use Spell Power donated from other characters towards the Spell Power cost of any rite that involves both the rite master and the donating character. This donation must be OOC.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['ritualistExpert'],
        replaces: 'ritualistExpert',
    },
    castAdditionalMagecraft: {
        description:
            ' The character can cast spells from the standard Spellcasting list as well as their converted spell list.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['enchanting||shadowMagic', 'masterCountermagic'],
        replaces: 'masterCountermagic',
    },
    contributeTo2ndRitual: {
        description: 'This skill allows the character to contribute to a second ritual each day',
        tier: 1,
        prerequisites: ['contribute'],
    },
    contributeTo3rdRitual: {
        description: 'This skill allows the character to contribute to a third ritual each day',
        tier: 1,
        prerequisites: ['contributeTo2ndRitual'],
        replaces: 'contributeTo2ndRitual',
    },
    discernDaemonicBeing: {
        description:
            'A character with this skill can, after 10 seconds of concentration at a range of up to 30 feet (~9m), make the call “discern level of Daemonic being or possession” or ask a referee or marshal to enquire from the target. If the target examined is a Daemonic being or has a Daemonic possession, they should tell the discerner the dismiss level. The target will not be aware in-character that they have been discerned. Some Daemonic creatures may be shielded from this effect and may be able to locate the direction or even the character Discerning, see Shield Dismiss Level Occupational Skill.',
        tier: 3,
    },
    thaulmonicAlignment: {
        description:
            'If the character with Thaulmonic Alignment gains a Mage Armour High Sigil it will confer an AV of 3 on all locations instead of 2 (but will follow all of the standard rules for the spell including the maximum AV of 4 for an Armour Type).',
        tier: 3,
        restrictedPurchase: true,
    },
    impweaveExpertise: {
        description:
            'Gains Spell Reduction (1) for any Daemonology Spell that they have the ability to cast (using their own power). May not be combined with any other Spell Reduction ability, power or item.',
        tier: 3,
        restrictedPurchase: true,
    },
    immuneToFumble: {
        description: 'This skill makes the character immune to the Fumble effect.',
        tier: 1,
    },
    immuneToFumbleAndShatter: {
        description:
            'The character and any item held are immune to the Fumble and Shatter effects.',
        tier: 3,
        prerequisites: ['immuneToFumble'],
        replaces: 'immuneToFumble',
    },
    immuneToThrough: {
        description:
            'The character and their armour are immune to the Through effect, unless it has the Artefact or appropriate Elemental Weakness damage type. This Occupational Skill will not alter any other damage effect that ignores armour.',
        tier: 4,
        prerequisites: ['immuneToFumbleAndShatter'],
    },
    magicResistance: {
        description:
            'The character and their armour are immune to the Through effect, unless it has the Artefact or appropriate Elemental Weakness damage type. This grants the character Damage Reduction (Harm & Mage Bolt). This Skill will not alter any other damage effect that ignores armour. Provides no protection against Retribution.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['immuneToThrough'],
        replaces: 'immuneToThrough',
    },
    tracking: {
        description:
            'This skill requires the presence of a marshal or referee and will often be restricted to particular situations, locations or opportunities. This skill allows a character to look for clues, tracks and tell-tale signs of other creatures when they first visit an area (usually in wooded or rural areas). The character will gain a rough idea as to the type of creatures in that area (Orc, Human, Elven etc.) from length of stride, weight and markings of footprints, the way foliage has been disturbed or other such information. It may also be possible to determine approximate numbers of the creatures, direction of travel etc. (depending on weather conditions, time of day and other factors). The character using Tracking must role-play checking the area for a minimum of 30 seconds (more roleplay may get greater information). Once per hour a character with the Tracking skill can use their tracking skill to sense creatures nearby. The character must remain immobile (should stay comfortably still and not move, cast spells, or perform any other in-character actions including parrying/striking blows etc.) and remain silent for 1 min – after this time has elapsed the character may use the vocals “Detect <Race> 30 feet” (<Race> being any of the starting character races available during character creation highlighted in Bold). This detection ability may only be used after dusk (8pm).',
        tier: 1,
    },
    strikedownShot: {
        description:
            ' This skill allows a character to choose to strike for the Strikedown effect with ammunition from a projectile weapon. This cannot be used with a skill, lammie or loresheet that would modify the damage effect and will replace the normal Through call of an arrow or bolt',
        tier: 4,
        prerequisites: ['projectileWeaponUse', 'immuneToFumbleAndShatter'],
    },
    haltShot: {
        description:
            'This skill allows a character to choose to strike for the Halt or Strikedown effects with ammunition from a projectile weapon. This cannot be used with a skill, lammie or loresheet that would modify the damage effect and will replace the normal Through call of an arrow or bolt.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['strikedownShot'],
        replaces: 'strikedownShot',
    },
    discernRace: {
        description:
            "After 10 seconds concentration on a single target within 30 feet (~9m), the character may make the call “discern race” or ask a referee or marshal to enquire from the target. The target will not be aware in-character that they have been discerned. Discern Race will give the race on the target's character card.",
        tier: 2,
        prerequisites: ['tracking'],
    },
    discernRaceAndPattern: {
        description:
            "After 10 seconds concentration on a single target within 30 feet (~9m), the character may make the call “Discern Race and Pattern” or ask a referee or marshal to enquire from the target. The target will not be aware in-character that they have been discerned. The discern will give the race on the target's character card and if their pattern state is Living, Unliving or Magical. This does not allow the detection of Alien or Aberrant patterns.",
        tier: 4,
        prerequisites: ['discernRace'],
        replaces: 'discernRace',
    },
    etherealShot: {
        description:
            'Once per 10 mins a character with the Ethereal Shot skill may Discern the race and pattern of a single target and then for 1 minute the character may shoot projectiles at that target that will strike for the appropriate Affect damage call (Race or Pattern Type).',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['projectileWeaponUse', 'discernRaceAndPattern'],
        replaces: 'discernRaceAndPattern',
    },
    immuneToSleep: {
        description: 'The character is immune to the Sleep effect.',
        tier: 4,
        prerequisites: ['immuneToBefriendAndConfusion'],
    },
    bowyerApprentice: {
        name: 'Bowyer (Apprentice)',
        description:
            'This skill allows the character to make a Crafting Level 1 Projectile Weapon or Bandolier at each Lorien Trust Main Event with tools and materials obtained and used in the relevant Guild area. The character must gain permission from the Guild to use their facilities. This skill allows you to reduce the time required for checking that retrieved or returned projectiles are safe to use again (see Projectile Weapons Use description). A Bowyer (Apprentice) may check up to 6 projectiles per min (10 Seconds per projectile). In addition this skill allows you to Mend a Shattered Bow or crossbow with 1 min of appropriate roleplay, this ability does not require any power and may not be used to Mend any other item.',
        tier: 4,
    },
    bowyerMaster: {
        name: 'Bowyer (Master)',
        description:
            'This skill allows the character to make a Crafting Level 1 and Level 2 Projectile Weapon or Bandolier at each Lorien Trust Main Event with tools that can be obtained and used in the relevant Guild area. Alternatively the Bowyer (Master) may combine the Level 1 and Level 2 Crafting to make a once a year Projectile Weapon. This skill allows you to reduce the time required for checking that retrieved or returned projectiles are safe to use again (see Projectile Weapons Use description). A Bowyer (Master) may check up to 12 projectiles per min (5 Seconds per projectile). In addition this skill allows you to Mend a Shattered Bow or crossbow with 30 seconds of appropriate roleplay, this ability does not require any power and may not be used to Mend any other item.',
        tier: 4,
        prerequisites: ['bowyerApprentice'],
        replaces: 'bowyerApprentice',
    },
    handOfNature: {
        description:
            'The character is particularly adept at treating wounds effectively and allows the character with Triage or Triage (Advanced) to use their skills on two locations at the same time (must be stated at the start of the action). This skill will have no effect when used with Triage (Advanced) for raising LHV above 0 (zero).',
        tier: 2,
        prerequisites: ['triage||triageAdvanced'],
    },
    trapLore: {
        description:
            ' Trap Lore allows the character to make a single Trap Bag at each Lorien Trust Main Event with materials that can be obtained and then used to craft items in the Scouts Guild. The character must gain permission from the Guild to use their facilities. In addition the character with the Trap Lore skill can also perform the following actions:\n• Once per 10 mins the character may check an area or object for a trap. The target area must be no greater than a 1ft Square space or an object such as a door, box, handle, or other suspicious object. The character requires concentration and hold a free hand approx. 1ft from the target for 30 seconds. If a trap is detected it may be disarmed safely with a further 30 seconds of appropriate roleplay. This action requires the presence of a Referee or Marshal.\n• A character with Trap Lore may set a Trap with a Crafted Trap Bag. This action will consume the materials of the Trap Bag itself and will transfer the effect of the Trap Bag to the trapped object or area for 10 mins. This action requires the presence of a Referee or Marshal.',
        tier: 3,
    },
    enchantProjectileWeapon: {
        description:
            ' This skill allows a character to choose to shoot for enchanted through with a projectile weapon. The weapon does not count as enchanted in any way other than to shoot for enchanted damage.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['projectileWeaponUse'],
    },
    focusedThrough: {
        description:
            'This skill allows a character to strike for the Through effect once every 10 minutes with a small or medium melee weapon held in their primary hand. This cannot be used with a skill, lammie or loresheet that would modify the damage effect. If the target is immobilised the character may strike for through with every strike.',
        tier: 2,
        prerequisites: ['immuneToFumble'],
    },
    through: {
        description:
            'This skill replaces Focused Through and allows a character to strike for the Through effect with a small or medium melee weapon held in their primary hand. This cannot be used with a skill, lammie or loresheet that would modify the damage effect.',
        tier: 4,
        restrictedPurchase: true,
        prerequisites: ['focusedThrough'],
        replaces: 'focusedThrough',
    },
    weaponFinesse: {
        description:
            ' This skill allows a character to strike for the Through effect with thrown weapons thrown from their primary hand (requires thrown weapon CS), or with melee blows from any weapon that the character has the ability to use (including weapons used with the ambidexterity CS). This cannot be used with a skill, lammie or loresheet that would modify the damage effect',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['missileWeaponUse', 'through'],
        replaces: 'through',
    },
    immuneToImmobilisation: {
        description:
            'The character is immune to all Immobilisation effects. This does not work on the Petrification effect.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['immuneToRepelAndStrikedown'],
    },
    traverseFactionWards: {
        description:
            's This skill allows the character to move through Faction Wards with 10 seconds of roleplay action. This skill will not allow a character to cross a raised ritual circle seal.',
        tier: 3,
    },
    oathswornScoutsGuild: {
        name: 'Oathsworn <Scouts Guild>',
        description:
            'The character has sworn a binding Oath to support the Faction or Guild. This Occupational Skill can be only be gained with permission from the relevant Faction or Guild and may be removed by the Oathbreaker Curse. This skill may only be purchased at a main Lorien Trust event and does not count towards your 4 skill purchases permitted per year.',
        tier: 1,
        restrictedSkills: ['oathswornBank'],
        consumesHeadSpace: false,
    },
    tnsSpiral: {
        name: 'TNS Spiral',
        description:
            'This skill allows a character to translate one named script to common for every TNS that is purchased. Each of the most common scripts are listed below and fall into one to three Script families: Regional and Historical, People and Race, Myth and Magic. A loresheet for each script can be collected from Game Control once this skill is on the character card. Some TNS scripts are not listed below and are not part of the Script Categories – these TNS Scripts are only available with particular prerequisites or Loresheets. NOTE: Only a character with a TNS Skill may attempt to translate a language in this way. Any attempt to translate the script using a “Hard Skill” (i.e. using a process of deduction or by utilising out-of-character knowledge or devices) will be breaking the Spirit of the Rules and Cheating.',
        tier: 1,
        restrictedPurchase: true,
        prerequisites: ['oathswornScoutsGuild'],
    },
    identify: {
        description:
            'A character with this skill can identify the approximate powers or purpose of a magical lammed item (excluding weapons, armour, scrolls and alchemical items) - these may include structures, standing stones or other unusual items. The examination of the item requires a minimum of 1 minute appropriate role-play with a Referee or Marshal present and will not always produce a result.',
        tier: 2,
        prerequisites: [
            'spellcasting1||spellcasting2||incantation1||incantation2||healing1||healing2||corruption1||corruption2||senseMagic',
        ],
    },
    diagnosePowers: {
        description:
            'A character with this skill can identify the approximate powers or purpose of a magical lammed item - these may include structures, standing stones or other unusual items. The examination of the item requires a minimum 1 minute of appropriate role-play with a Referee or Marshal present and will not always produce a result. Loresheets for this skill are available for download and print from The Lorien Trust Website (see Loresheets). Once per day a character with the Diagnose Powers skill may examine a Special item that has fully exhausted its required Item Cards for the day or event. After 10 minutes of holding the item and roleplayed examination, the character may restore a single item card to the Special item – this is achieved by taking the item to Game Control, handing over the Diagnosed item, state that you are using your skill to restore a single item card for the item – after your details and the item details have been checked, a single item card will be re-issued for that day for the Diagnosed item',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['identify'],
        replaces: 'identify',
    },
    oathswornBank: {
        name: 'Oathsworn <Bank>',
        description:
            'The character has sworn a binding Oath to support the Faction or Guild. This Occupational Skill can be only be gained with permission from the relevant Faction or Guild and may be removed by the Oathbreaker Curse. This skill may only be purchased at a main Lorien Trust event and does not count towards your 4 skill purchases permitted per year.',
        tier: 1,
        restrictedSkills: ['oathswornScoutsGuild'],
        consumesHeadSpace: false,
    },
    bankAdvisorClerk: {
        name: 'Bank Advisor (Clerk)',
        description:
            'A Character with this skill may submit a lammied item to a Board Member of the Bank for assessment (re-power for a single year for in-character money). The assessed item that will either return with an in-character gold cost for re-powering (offer valid for 24hrs) or be returned with no assessment cost (may not be re-powered). The form to submit an item can be collected at the Bank and the submitted form and item Lammie must be submitted through the Bank during game-time. A Bank Advisor (Clerk) may submit 1x item per event. If the Skill "Oathsworn Bank" is removed, this ability may not be used again until the character gains the skill again. Note that not all items may be repowered (examples include Lorien Trust Charity Lammies).',
        tier: 2,
        restrictedPurchase: true,
        prerequisites: ['oathswornBank'],
        replaces: 'oathswornBank',
    },
    bankAdvisorAssociate: {
        name: 'Bank Advisor (Associate)',
        description:
            'A Character with this skill may submit a lammied item to a Board Member of the Bank for assessment (re-power for a single year for in-character money). The assessed item that will either return with an in-character gold cost for re-powering (offer valid for 24hrs) or be returned with no assessment cost (may not be re-powered). The form to submit an item can be collected at the Bank and the submitted form and item Lammie must be submitted through the Bank during game-time. A Bank Advisor (Associate) may submit 2x item per event. If the Skill "Oathsworn Bank" is removed, this ability may not be used again until the character gains the skill again. Note that not all items may be repowered (examples include Lorien Trust Charity Lammies).',
        tier: 3,
        restrictedPurchase: true,
        prerequisites: ['bankAdvisorClerk'],
        replaces: 'bankAdvisorClerk',
    },
    bankAdvisorBroker: {
        name: 'Bank Advisor (Broker)',
        description:
            'A Character with this skill may submit a lammied item to a Board Member of the Bank for assessment (re-power for a single year for in-character money). The assessed item that will either return with an in-character gold cost for re-powering (offer valid for 24hrs) or be returned with no assessment cost (may not be re-powered). The form to submit an item can be collected at the Bank and the submitted form and item Lammie must be submitted through the Bank during game-time. A Bank Advisor (Broker) may submit 3x item per event. If the Skill "Oathsworn Bank" is removed, this ability may not be used again until the character gains the skill again. Note that not all items may be repowered (examples include Lorien Trust Charity Lammies).',
        tier: 4,
        restrictedPurchase: true,
        prerequisites: ['bankAdvisorAssociate'],
        replaces: 'bankAdvisorAssociate',
    },
    generalKnowledgeX: {
        name: 'General Knowledge <X>',
        description:
            'A character with this skill may request a general knowledge information sheet from Game Control detailing IC news about the game world. This information may contain falsehoods. New information sheets will be available at the Great Erdrejan Fayre and the Gathering. Additional information may be available at Sanctioned Events at the organiser’s discretion and they will advertise this is the event literature. The General Knowledge skills available are: Guildsman, Merchant, Rumour Monger, Storyteller, Wanderer and War Scout.',
        tier: 1,
        consumesHeadSpace: false,
    },
    newsmonger: {
        description:
            ' A character with this skill may request all the general knowledge information sheets from Game Control. This information may contain falsehoods. New information will be available at the Great Erdrejan Fayre and the Gathering. Additional information may be available at Sanctioned Events at the organiser’s discretion and they will advertise this in the event literature.',
        tier: 2,
        prerequisites: ['generalKnowledgeX'],
        replaces: 'generalKnowledgeX',
    },
    improvedResearchAbility: {
        description:
            'Allows the submission of a research request during the summer research period subject to the relevant IC arrangements with an overall maximum limit of one research submission per character per research period. Allows the character to assist with another character’s research, as well as performing their own research within the same research period',
        tier: 4,
        prerequisites: ['newsmonger'],
    },
    plus4SpellPower: {
        name: '+4 Spell Power',
        description: 'r The character gains +4 spell Power per day, subject to the rule of double',
        tier: 1,
    },
    plus8SpellPower: {
        name: '+8 Spell Power',
        description: 'r The character gains +8 spell Power per day, subject to the rule of double',
        tier: 2,
        prerequisites: ['plus4SpellPower'],
        replaces: 'plus4SpellPower',
    },
    plus12SpellPower: {
        name: '+12 Spell Power',
        description: 'r The character gains +12 spell Power per day, subject to the rule of double',
        tier: 4,
        prerequisites: ['plus8SpellPower'],
        replaces: 'plus8SpellPower',
    },
    plus16SpellPower: {
        name: '+16 Spell Power',
        description: 'r The character gains +16 spell Power per day, subject to the rule of double',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['plus12SpellPower'],
        replaces: 'plus12SpellPower',
    },
    arcaneCrafterApprentice: {
        description:
            'At each Lorien Trust Main Event the character may produce up to 2x Level 1 Crafted Arcane Items. For many of the crafted items the Arcane Crafter must be able to cast the desired spell to Craft the Item (i.e. to produce an Amulet of Spell Reduction (1) for the Spell Blast – the Crafter must be able to cast the spell Blast). The in-game cost for the materials will vary from time to time and list can be obtained from the Arcane Guilds',
        tier: 1,
        prerequisites: [
            'spellcasting1||spellcasting2||incantation1||incantation2||healing1||healing2||corruption1||corruption2',
        ],
    },
    arcaneCrafterAdept: {
        description:
            'At each Lorien Trust Main Event the character may produce up to 2x Level 1 and 2x Level 2 Crafted Arcane Items. For many of the crafted items the Arcane Crafter must be able to cast the desired spell to Craft the Item (i.e. to produce an Amulet of Spell Reduction (1) for the Spell Blast – the Crafter must be able to cast the spell Blast). The in-game cost for the materials will vary from time to time and list can be obtained from the Arcane Guilds.',
        tier: 2,
        prerequisites: ['arcaneCrafterApprentice'],
        replaces: 'arcaneCrafterApprentice',
    },
    arcaneCrafterMaster: {
        description:
            'At each Lorien Trust Main Event the character may produce up to 2x Level 1 and 2x Level 2 and 2x Level 3 Crafted Arcane Items. For many of the crafted items the Arcane Crafter must be able to cast the desired spell to Craft the Item (i.e. to produce an Amulet of Spell Reduction (1) for the Spell Blast – the Crafter must be able to cast the spell Blast). The in-game cost for the materials will vary from time to time and list can be obtained from the Arcane Guilds.',
        tier: 4,
        prerequisites: ['arcaneCrafterAdept'],
        replaces: 'arcaneCrafterAdept',
    },
    darkIncantation: {
        description:
            'The character gains the ability to cast spells from the Dark Incantation list, instead of the normal Incantation list',
        tier: 1,
        restrictedPurchase: true,
        prerequisites: ['incantation1||incantation2'],
    },
    daemonology: {
        description:
            'The character may cast spells from the Daemonology list to the same level as they have the Spellcasting CS. If they also have the Ritual Magic Character Skill or the Contribute Character Skill they will gain a bonus when contributing to summoning or creating a Daemon in a Ritual',
        tier: 1,
        restrictedPurchase: true,
        prerequisites: ['spellcasting1||spellcasting2'],
    },
    elementalism: {
        description:
            'The character may cast spells from the Elementalism list to the highest level that they can cast in any of the pre-requisite spell lists. If they also have the Ritual Magic Character Skill or the Contribute Character Skill they will gain a bonus when contributing to summoning or creating an Elemental in a Ritual.',
        tier: 1,
        restrictedPurchase: true,
        prerequisites: ['healing1||healing2||lightIncantation||enchanting'],
    },
    enchanting: {
        description:
            'The character gains the ability to cast spells from the Enchanting lists, instead of the Spellcasting lists',
        tier: 1,
        restrictedPurchase: true,
        prerequisites: ['spellcasting1||spellcasting2'],
    },
    lightIncantation: {
        description:
            'The character gains the ability to cast spells from the Light Incantation list, instead of the normal Incantation list.',
        tier: 1,
        restrictedPurchase: true,
        prerequisites: ['incantation1||incantation2'],
    },
    necromancy: {
        description:
            'The character may cast spells from the Necromancy list to the highest level that they can cast in any of the pre-requisite spell lists. If they also have the Ritual Magic Character Skill or the Contribute Character Skill they will gain a bonus when contributing to summoning or creating an Unliving in a Ritual',
        tier: 1,
        restrictedPurchase: true,
        prerequisites: ['corruption1||corruption2||shadowMagic||darkIncantation'],
    },
    shadowMagic: {
        description:
            'The character gains the ability to cast spells from the Shadow Magic list, instead of the normal Spellcasting list',
        tier: 1,
        restrictedPurchase: true,
        prerequisites: ['spellcasting1||spellcasting2'],
    },
    theology: {
        description:
            'The character may cast spells from the Theology list to the same level as they have the CS Incantation. If they also have the Ritual Magic Character Skill or the Contribute Character Skill they will gain a bonus when contributing to summoning or creating an Ancestral in a Ritual.',
        tier: 1,
        restrictedPurchase: true,
        prerequisites: ['incantation1||incantation2'],
    },
    highMagicDaemonology: {
        name: 'High Magic (Daemonology)',
        description:
            '. The character may cast spells from the Daemonology list (including the third level spells which usually require the High Magic Occupational Skill). If they also have the Ritual Magic Character Skill or the Contribute Character Skill they will gain a bonus when contributing to summoning or creating a Daemon in a Ritual.',
        tier: 4,
        restrictedPurchase: true,
        prerequisites: ['spellcasting2', 'daemonology'],
        replaces: 'daemonology',
    },
    highMagicElementalism: {
        name: 'High Magic (Elementalism)',
        description:
            'The character may cast spells from the Elementalism list (including the third level spells which usually require the High Magic Occupational Skill). If they also have the Ritual Magic Character Skill or the Contribute Character Skill they will gain a bonus when contributing to summoning or creating an Elemental in a Ritual.',
        tier: 4,
        restrictedPurchase: true,
        prerequisites: ['healing2||spellcasting2||incantation2', 'elementalism'],
        replaces: 'elementalism',
    },
    highMagicNecromancy: {
        name: 'High Magic (Necromancy)',
        description:
            'The character may cast spells from the Necromancy list (including the third level spells which usually require the High Magic Occupational Skill). If they also have the Ritual Magic Character Skill or the Contribute Character Skill they will gain a bonus when contributing to summoning or creating an Unliving in a Ritual.',
        tier: 4,
        restrictedPurchase: true,
        prerequisites: ['corruption2||incantation2||spellcasting2', 'necromancy'],
        replaces: 'necromancy',
    },
    highMagicTheology: {
        name: 'High Magic (Theology)',
        description:
            'The character may cast spells from the Theology list (including the third level spells which usually require the High Magic Occupational Skill). If they also have the Ritual Magic Character Skill or the Contribute Character Skill they will gain a bonus when contributing to summoning or creating an Ancestral in a Ritual.',
        tier: 4,
        restrictedPurchase: true,
        prerequisites: ['incantation2', 'theology'],
        replaces: 'theology',
    },
    highMagicSpellcasting: {
        name: 'High Magic (Spellcasting)',
        description:
            'The character gains access to the level 3 of any list they can cast to level 2 (for example if the character has Level 2 Healing they will now be able to cast Level 3 Healing. If they have Level 2 Dark Incantation and Necromancy they would be able to cast the Level 3 spell of Dark Incantation and Necromancy). This ability will only grant level 3 spells to be cast – if the character has a level 2 and a level 1 casting ability it will only grant level 3 access for the level 2 skill. This does not grant them any additional Spell Power.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['spellcasting2'],
    },
    highMagicCorruption: {
        name: 'High Magic (Corruption)',
        description:
            'The character gains access to the level 3 of any list they can cast to level 2 (for example if the character has Level 2 Healing they will now be able to cast Level 3 Healing. If they have Level 2 Dark Incantation and Necromancy they would be able to cast the Level 3 spell of Dark Incantation and Necromancy). This ability will only grant level 3 spells to be cast – if the character has a level 2 and a level 1 casting ability it will only grant level 3 access for the level 2 skill. This does not grant them any additional Spell Power.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['corruption2'],
    },
    highMagicIncantation: {
        name: 'High Magic (Incantation)',
        description:
            'The character gains access to the level 3 of any list they can cast to level 2 (for example if the character has Level 2 Healing they will now be able to cast Level 3 Healing. If they have Level 2 Dark Incantation and Necromancy they would be able to cast the Level 3 spell of Dark Incantation and Necromancy). This ability will only grant level 3 spells to be cast – if the character has a level 2 and a level 1 casting ability it will only grant level 3 access for the level 2 skill. This does not grant them any additional Spell Power.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['incantation2'],
    },
    highMagicHealing: {
        name: 'High Magic (Healing)',
        description:
            'The character gains access to the level 3 of any list they can cast to level 2 (for example if the character has Level 2 Healing they will now be able to cast Level 3 Healing. If they have Level 2 Dark Incantation and Necromancy they would be able to cast the Level 3 spell of Dark Incantation and Necromancy). This ability will only grant level 3 spells to be cast – if the character has a level 2 and a level 1 casting ability it will only grant level 3 access for the level 2 skill. This does not grant them any additional Spell Power.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['healing2'],
    },
    quickArmourRepair: {
        description:
            'This skill allows the character to restore the AV of damaged armour in half the normal time. This skill cannot be used to repair NAV (Natural Armour) or MAV (Magical Armour).',
        tier: 1,
        prerequisites: ['lightArmourUse||mediumArmourUse||heavyArmourUse'],
    },
    armourMastery: {
        description:
            'This skill increases the AV of any armour worn by +1, subject to the rule of double.',
        tier: 2,
        prerequisites: ['lightArmourUse||mediumArmourUse||heavyArmourUse'],
    },
    armourMasteryAdvanced: {
        name: 'Armour Mastery (Advanced)',
        description:
            'This skill increases the AV of any armour worn by +2, subject to the rule of double.',
        tier: 4,
        prerequisites: ['armourMastery'],
        replaces: 'armourMastery',
    },
    armourMasteryExpert: {
        name: 'Armour Mastery (Expert)',
        description:
            'This increases the AV of any armour worn by +2, subject to the rule of double. The character and any armour worn are immune to the Crush effect, unless it has the Artefact damage type. This skill does not stop Crush from destroying a shield. This Occupational Skill will not alter any other damage effect that ignores armour.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['armourMasteryAdvanced'],
        replaces: 'armourMasteryAdvanced',
    },
    awakenedX: {
        name: 'Awakened <X>',
        description:
            'An Awakened creature is a type of Special Creature that is an evolution of a Base Race (Dwarf for example). These creatures still remain linked to their Base Race for the purposes of items and effects that can target them (Dwarf Bane etc.) and for detection/discern purposes. To become an Awakened, a Awakened Creature of the correct type must perform a Rite of Creation to align your pattern and unlock your potential. Once this rite is complete you will receive an appropriate Awakened Loresheet which details any Race Specific Abilities or Rules as well as Occupational skills that are not normally available or can be purchased at a discount. Becoming an Awakened Creature prevents the character becoming an Essence Creature, Summonable Creature or any other kind of Special Creature (Generally created in a Ritual). Loresheets for this skill are available for download and print from The Lorien Trust Website (see Loresheets). Awakening will count as one of your four skill buys for the year but will only replace the Race description on the front of your character card',
        tier: 1,
        restrictedPurchase: true,
    },
    tutor: {
        description:
            'This allows the character to teach another character any Occupational Skill that they currently possess on their character card (excludes Blessings, Special Creature Cards unless a Lammie or Loresheet explicitly allows it), and excludes Essence Creature, Restricted TNS Scripts or the Tutor Occupational Skills. They may teach a maximum one skill per Main Lorien Trust event, each skill may be up to a Tier 4 skill. The character learning the skill must still possess any pre-requisites needed to learn the new skill. This Occupational Skill may not be used while under a command effect.',
        tier: 4,
        restrictedPurchase: true,
    },
    magicalArmourMastery: {
        description:
            'The character may use the Armour Mastery, Armour Mastery (Advanced) or Armour Mastery (Expert) Occupational Skill (if they possess them) with Magical Armour effects.',
        tier: 2,
        prerequisites: ['lightArmourUse||mediumArmourUse||heavyArmourUse'],
    },
    escapeBonds: {
        description:
            'This skill allows the character to escape from any in-character bonds or restraints. This takes 1 minute of concentration and the character must not be Immobilised. This skill does not allow a character to escape from a locked room or other such prisons.',
        tier: 3,
    },
    shieldDismissLevel: {
        description:
            'If a Discern <X> of the correct type is used on the character then they may respond "<X>, discern shielded". If the discerning character spends a further 10 seconds discerning the character and a second Discern Vocal is used the attempt will be successful. A character that is discerned will immediately feel a tingle of magic and be aware that they have been the target of a discern attempt (the referee or marshal will identify the character or source of the discern). If the target of the discern attempt gets further than 30 feet away before the further 10 seconds of discerning is completed then the process is disrupted and must be started anew.',
        tier: 3,
        restrictedPurchase: true,
    },
    fearsomeAspect: {
        description:
            'The character may create an innate Mass Fear effect using 4 of their own Spell Power. This counts in all way as a level 3 mass spell and cannot be countered. The vocals are “innate mass fear”. Mass Fear may not be used on large groups or in mass combat without consulting a Referee or Marshal for safety reasons',
        tier: 4,
        restrictedPurchase: true,
    },
    plus1LHV: {
        name: '+1 LHV',
        description: 'The character gains +1LHV, subject to the rule of double.',
        tier: 5,
        restrictedPurchase: true,
        prerequisites: ['bodyDevelopment2'],
    },
};
