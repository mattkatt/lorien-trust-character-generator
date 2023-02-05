import { createContext, FC, useEffect, useState } from 'react';
import { useDataContext } from './hooks';
import { Skill } from '../data/models/skill';

interface ICharacterState {
    skills: Array<Skill['id']>;
    unspentCharacterSkillPoints: number;
    characterOSPs: number;
}

interface ICharacterContext {
    characterState: ICharacterState;
    addSkill: (skill: Skill) => void;
    removeSkill: (skill: Skill) => void;
    tierFiveTotal: () => number;
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
};

export const CharacterContext = createContext<ICharacterContext>(defaultCharacterContext);
CharacterContext.displayName = 'CharacterContext';

export const CharacterProvider: FC = ({ children }) => {
    const { dataState } = useDataContext();
    const [state, setState] = useState(defaultCharacterState);

    useEffect(() => {
        const storedCharacter = localStorage.getItem(CHARACTER_STATE);

        if (storedCharacter) {
            const savedState = JSON.parse(storedCharacter) as ICharacterState;
            setState(savedState);
        }
    }, [setState]);

    const setCharacterState = (newState: ICharacterState) => {
        setState(newState);
        localStorage.setItem(CHARACTER_STATE, JSON.stringify(newState));
    };

    const addSkill = (skill: Skill) => {
        const stateCopy = { ...state };

        if (skill.isOS) {
            stateCopy.skills.push(skill.id);
            stateCopy.characterOSPs += skill.cost;
        } else {
            if (stateCopy.unspentCharacterSkillPoints >= skill.cost) {
                stateCopy.skills.push(skill.id);
                stateCopy.unspentCharacterSkillPoints -= skill.cost;
            } else {
                throw new Error('Cannot add CS Skill - not enough points');
            }
        }

        setCharacterState(stateCopy);
    };

    const removeSkill = (skill: Skill) => {
        const stateCopy = {
            ...state,
            skills: state.skills.filter((skillId) => skill.id !== skillId),
        };

        if (skill.isOS) {
            stateCopy.characterOSPs -= skill.cost;
        } else {
            stateCopy.unspentCharacterSkillPoints += skill.cost;
        }

        setCharacterState(stateCopy);
    };

    const tierFiveTotal = () =>
        state.skills.reduce((previousValue, currentValue) => {
            return dataState.skillRecord[currentValue].tier === 5
                ? previousValue + 1
                : previousValue;
        }, 0);

    return (
        <CharacterContext.Provider
            value={{
                characterState: state,
                addSkill,
                removeSkill,
                tierFiveTotal,
            }}
        >
            {children}
        </CharacterContext.Provider>
    );
};
