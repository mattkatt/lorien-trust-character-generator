import React, { FC, useContext, useEffect, useMemo, useState } from 'react';
import { ICharacterSkill, IOccupationalSkill, ISkill } from '../../data/skills';
import { Button, Popover } from 'antd';
import { SkillDescription } from './skill-description';
import { CharacterContext } from '../../context/character-context';
import { AppContext } from '../../context/app-context';

interface ISkillButtonProps {
    skill: ISkill;
}

export const SkillButton: FC<ISkillButtonProps> = ({ skill }) => {
    const { appState } = useContext(AppContext);
    const {
        characterState,
        addCharacterSkill,
        addOccupationalSkill,
        removeCharacterSkill,
        removeOccupationalSkill,
    } = useContext(CharacterContext);
    const skillType = 'tier' in skill ? 'occupational' : 'character';
    const [isSkillDisabled, setIsSkillDisabled] = useState({
        state: false,
        msg: '',
    });

    const isRestricted = (skill as IOccupationalSkill)?.restrictedPurchase ?? false;

    const tierFiveCount = useMemo<number>(
        () =>
            characterState.occupationalSkills.reduce(
                (total, skill) => (skill.tier >= 5 ? total + 1 : total),
                0,
            ),
        [characterState.occupationalSkills],
    );

    const isSelected = characterState.allSkills.some((s) => s.id === skill.id);

    useEffect(() => {
        let isDisabled = false;
        let disabledMsg = '';

        if ('tier' in skill && (skill as IOccupationalSkill).tier >= 5 && tierFiveCount >= 4) {
            isDisabled = true;
            disabledMsg += 'Too many tier 5 skills.\n';
        }

        const checkIfRestricted = (s: ISkill) => {
            if (s.restrictedSkills?.includes(skill.id)) {
                isDisabled = true;
                disabledMsg += `Is restricted by ${s.name}.\n`;
                return true;
            }

            return false;
        };

        characterState.allSkills.some(checkIfRestricted);

        const enoughCharacterSkillPoints =
            'tier' in skill ? true : skill.cost <= characterState.unspentCharacterSkillPoints;

        if (!enoughCharacterSkillPoints) {
            isDisabled = true;
            disabledMsg += 'Not enough character skill points.\n';
        }

        const checkMeetsPrerequisites = (prerequisite: string) => {
            if (prerequisite.includes('||')) {
                return prerequisite.split('||').some((orPrerequisite) => {
                    return characterState.allSkills.some(
                        (usedSkill) => usedSkill.id === orPrerequisite,
                    );
                });
            }

            return characterState.allSkills.some((s) => s.id === prerequisite);
        };

        const meetsPrerequisites = skill?.prerequisites
            ? skill.prerequisites.every(checkMeetsPrerequisites)
            : true;

        if (!meetsPrerequisites) {
            isDisabled = true;
            disabledMsg += 'Does not meet prerequisites.\n';
        }

        setIsSkillDisabled({
            state: isDisabled,
            msg: disabledMsg,
        });
    }, [skill, characterState, isRestricted, setIsSkillDisabled, tierFiveCount]);

    const onSkillClick = () => {
        if (isSelected) {
            skillType === 'character'
                ? removeCharacterSkill(skill as ICharacterSkill)
                : removeOccupationalSkill(skill as IOccupationalSkill);
        } else {
            skillType === 'character'
                ? addCharacterSkill(skill as ICharacterSkill)
                : addOccupationalSkill(skill as IOccupationalSkill);
        }
    };

    return appState.hideDisabledSkills && isSkillDisabled.state && !isSelected ? null : (
        <Popover
            content={<SkillDescription skill={skill} disabledReason={isSkillDisabled.msg} />}
            title={skill.name}
            placement={'rightBottom'}
        >
            <Button
                block
                type={isSelected ? 'primary' : 'dashed'}
                disabled={isSkillDisabled.state && !isSelected}
                onClick={onSkillClick}
            >
                {`${skill.name} - {${skill.cost}}`} {isRestricted ? ' @' : null}
            </Button>
        </Popover>
    );
};
