import { createContext, FC, useEffect, useState } from 'react';
import { notification } from 'antd';
import { Skill } from '../data/models/skill';
import { useDataContext } from './hooks';

interface ICharacterState {
    skills: Array<Skill>;
    unspentCharacterSkillPoints: number;
    characterOSPs: number;
}

interface ICharacterContext {
    characterState: ICharacterState;
    addSkill: (skill: Skill) => void;
    removeSkill: (skill: Skill) => void;
    tierFiveTotal: () => number;
    headSpace: () => number;
    reset: () => void;
}

const CHARACTER_STATE = 'characterState';

export const defaultCharacterState: ICharacterState = {
    skills: [],
    unspentCharacterSkillPoints: 16,
    characterOSPs: 0,
};

const defaultCharacterContext: ICharacterContext = {
    characterState: defaultCharacterState,
    addSkill: () => {},
    removeSkill: () => {},
    tierFiveTotal: () => 0,
    headSpace: () => 12,
    reset: () => {},
};

export const CharacterContext = createContext<ICharacterContext>(defaultCharacterContext);
CharacterContext.displayName = 'CharacterContext';

export const CharacterProvider: FC = ({ children }) => {
    const { dataState } = useDataContext();
    const [state, setState] = useState(defaultCharacterState);

    useEffect(() => {
        const storedCharacter = localStorage.getItem(CHARACTER_STATE);

        if (storedCharacter) {
            const savedState = JSON.parse(storedCharacter);

            savedState.skills = savedState.skills.map(
                (skillId: Skill['id']) => dataState.skillRecord[skillId],
            );

            setState(savedState);
        }
    }, [setState, dataState.skillRecord]);

    const setCharacterState = (newState: ICharacterState) => {
        setState(newState);
        localStorage.setItem(CHARACTER_STATE, JSON.stringify(newState));
    };

    const addSkill = (skill: Skill) => {
        const stateCopy = { ...state };

        stateCopy.skills.push(skill);

        if (skill.isOS) {
            stateCopy.characterOSPs += skill.cost;
        } else {
            stateCopy.unspentCharacterSkillPoints -= skill.cost;
        }

        setCharacterState(stateCopy);
    };

    const removeSkill = (skill: Skill) => {
        if (!skill.isOS) {
            const csIsRequired = state.skills.find((s) => {
                // @todo - do complete check to include double-bar prerequisites
                return s.prerequisites.includes(skill.id);
            });

            if (csIsRequired) {
                notification.error({
                    message: 'Error',
                    description: `Cannot remove CS - is required by ${csIsRequired.name}`,
                });
            }
        }

        if (skill.isReplaced(state.skills)) {
            const replacementSkill = state.skills.find((s) => {
                if (!s.replaces) {
                    return false;
                }

                return Array.isArray(s.replaces)
                    ? s.replaces.includes(skill.id)
                    : s.replaces === skill.id;
            });

            notification.error({
                message: 'Error',
                description: `Cannot remove skill - is replaced by ${replacementSkill?.name}`,
            });

            return;
        }

        const stateCopy = {
            ...state,
            skills: state.skills.filter((s) => skill.id !== s.id),
        };

        if (skill.isOS) {
            stateCopy.characterOSPs -= skill.cost;
        } else {
            stateCopy.unspentCharacterSkillPoints += skill.cost;
        }

        setCharacterState(stateCopy);
    };

    const tierFiveTotal = () =>
        state.skills.reduce((accumulator, skill) => {
            return skill.tier === 5 ? accumulator + 1 : accumulator;
        }, 0);

    const headSpace = () => {
        const headSpaceReducedBy = state.skills.reduce((accumulator, currentSkill) => {
            if (currentSkill.isOS && currentSkill.consumesHeadSpace) {
                return currentSkill.isReplaced(state.skills) ? accumulator : accumulator + 1;
            }

            return accumulator;
        }, 0);

        return 12 - headSpaceReducedBy;
    };

    const reset = () => {
        setCharacterState(defaultCharacterState);
    };

    return (
        <CharacterContext.Provider
            value={{
                characterState: state,
                addSkill,
                removeSkill,
                tierFiveTotal,
                headSpace,
                reset,
            }}
        >
            {children}
        </CharacterContext.Provider>
    );
};
