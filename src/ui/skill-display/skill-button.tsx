import React, { CSSProperties, FC, useCallback, useMemo } from 'react';
import { Button, Popover } from 'antd';

import { SkillDescription } from './skill-description';
import { Skill } from '../../data/models/skill';
import { useAppContext, useCharacterContext, useDataContext } from '../../context/hooks';

interface ISkillButtonProps {
    skillId: Skill['id'];
}

export const SkillButton: FC<ISkillButtonProps> = ({ skillId }) => {
    const { appState } = useAppContext();
    const { characterState, addSkill, removeSkill, headSpace, tierFiveTotal } =
        useCharacterContext();
    const { dataState } = useDataContext();

    const skill = dataState.skillRecord[skillId];

    const isSelected = characterState.skills.some((s) => s.id === skill.id);

    const isDisabled: false | string = useMemo(() => {
        let disabledMsg = '';

        if (skill.tier > 0 && skill.consumesHeadSpace && !skill.replaces && headSpace() <= 0) {
            disabledMsg += 'Not enough head space.\n';
        }

        if (skill.tier >= 5 && tierFiveTotal() >= 4) {
            disabledMsg += 'Too many tier 5 skills.\n';
        }

        if (skill.isRestrictedBySkills(characterState.skills)) {
            const restrictedSkills = skill.restrictedSkills.map((id) => dataState.skillRecord[id]);

            disabledMsg += `Is restricted by ${restrictedSkills.join(', ')}.\n`;
        }

        const enoughCharacterSkillPoints =
            skill.tier > 0 ? true : skill.cost <= characterState.unspentCharacterSkillPoints;

        if (!enoughCharacterSkillPoints) {
            disabledMsg += 'Not enough character skill points.\n';
        }

        const checkMeetsPrerequisites = (prerequisite: string) => {
            if (prerequisite.includes('||')) {
                return prerequisite.split('||').some((orPrerequisite) => {
                    return characterState.skills.some((s) => s.id === orPrerequisite);
                });
            }

            return characterState.skills.some((s) => s.id === prerequisite);
        };

        const meetsPrerequisites = skill?.prerequisites
            ? skill.prerequisites.every(checkMeetsPrerequisites)
            : true;

        if (!meetsPrerequisites) {
            disabledMsg += 'Does not meet prerequisites.\n';
        }

        return disabledMsg !== '' ? disabledMsg : false;
    }, [
        characterState.skills,
        characterState.unspentCharacterSkillPoints,
        dataState.skillRecord,
        skill,
        headSpace,
        tierFiveTotal,
    ]);

    const onSkillClick = useCallback(() => {
        !isSelected ? addSkill(skill) : removeSkill(skill);
    }, [skill, isSelected, addSkill, removeSkill]);

    const buttonStyle: CSSProperties = useMemo(() => {
        return {
            whiteSpace: 'normal',
            height: 'auto',
        };
    }, []);

    return appState.hideDisabledSkills && isDisabled && !isSelected ? null : (
        <Popover
            content={
                <SkillDescription skill={skill} disabled={!isSelected ? isDisabled : undefined} />
            }
            placement={'rightBottom'}
            mouseEnterDelay={0.66}
        >
            <Button
                block
                type={isSelected ? 'primary' : 'dashed'}
                disabled={!!isDisabled && !isSelected}
                onClick={onSkillClick}
                style={buttonStyle}
            >
                {`${skill.name} - {${skill.cost}}`} {skill.restrictedPurchase ? ' @' : null}
            </Button>
        </Popover>
    );
};
