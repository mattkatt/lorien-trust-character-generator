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
    const { characterState, addSkill, removeSkill, tierFiveTotal } = useCharacterContext();
    const { dataState } = useDataContext();

    const skill = dataState.skillRecord[skillId];

    const isSelected = characterState.skills.some((s) => s === skill.id);

    const isDisabled: false | string = useMemo(() => {
        let disabledMsg = '';

        if (skill.tier >= 5 && tierFiveTotal() >= 4) {
            disabledMsg += 'Too many tier 5 skills.\n';
        }

        skill.restrictedSkills.some((restrictedSkillId) => {
            if (characterState.skills.includes(restrictedSkillId)) {
                const restrictedSkill = dataState.skillRecord[restrictedSkillId];
                disabledMsg += `Is restricted by ${restrictedSkill.name}.\n`;
                return true;
            }
            return false;
        });

        const enoughCharacterSkillPoints =
            skill.tier > 0 ? true : skill.cost <= characterState.unspentCharacterSkillPoints;

        if (!enoughCharacterSkillPoints) {
            disabledMsg += 'Not enough character skill points.\n';
        }

        const checkMeetsPrerequisites = (prerequisite: string) => {
            if (prerequisite.includes('||')) {
                return prerequisite.split('||').some((orPrerequisite) => {
                    return characterState.skills.some((s) => s === orPrerequisite);
                });
            }

            return characterState.skills.some((s) => s === prerequisite);
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
            content={<SkillDescription skill={skill} disabled={isDisabled} />}
            title={skill.name}
            placement={'rightBottom'}
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
