import { createContext, FC, useEffect, useState } from 'react';
import { ICharacterSkill, IOccupationalSkill } from '../data/skills';

interface ICharacterState {
    spentCharacterSkillPoints: number;
    unspentCharacterSkillPoints: number;
    characterOSPs: number;
    characterSkills: Array<ICharacterSkill>;
    occupationalSkills: Array<IOccupationalSkill>;
    activeSkills: number;
}

interface ICharacterContext {
    characterState: ICharacterState;
    addCharacterSkill: (skill: ICharacterSkill) => void;
    removeCharacterSkill: (skill: ICharacterSkill) => void;
    addOccupationalSkill: (skill: IOccupationalSkill) => void;
    removeOccupationalSkill: (skill: IOccupationalSkill) => void;
}

const CHARACTER_STATE = 'characterState';

export const defaultCharacterState: ICharacterState = {
    characterOSPs: 0,
    characterSkills: [],
    occupationalSkills: [],
    activeSkills: 0,
    spentCharacterSkillPoints: 0,
    unspentCharacterSkillPoints: 16,
};

const defaultCharacterContext: ICharacterContext = {
    characterState: defaultCharacterState,
    addCharacterSkill: () => {},
    removeCharacterSkill: () => {},
    addOccupationalSkill: () => {},
    removeOccupationalSkill: () => {},
};

export const CharacterContext = createContext<ICharacterContext>(defaultCharacterContext);

export const CharacterProvider: FC = ({ children }) => {
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

    const addCharacterSkill = (skill: ICharacterSkill) => {
        const stateCopy = { ...state };
        stateCopy.characterSkills.push(skill);
        stateCopy.spentCharacterSkillPoints += skill.cost;
        stateCopy.unspentCharacterSkillPoints -= skill.cost;
        setCharacterState(stateCopy);
    };

    const removeCharacterSkill = (skill: ICharacterSkill) => {
        const stateCopy = { ...state };
        stateCopy.characterSkills = state.characterSkills.filter((characterSkill) => {
            return characterSkill.id !== skill.id;
        });
        stateCopy.spentCharacterSkillPoints -= skill.cost;
        stateCopy.unspentCharacterSkillPoints += skill.cost;
        setCharacterState(stateCopy);
    };

    const addOccupationalSkill = (skill: IOccupationalSkill) => {
        const stateCopy = { ...state };
        stateCopy.occupationalSkills.push(skill);
        stateCopy.characterOSPs += skill.cost;
        setCharacterState(stateCopy);
    };

    const removeOccupationalSkill = (skill: IOccupationalSkill) => {
        const stateCopy = { ...state };
        stateCopy.occupationalSkills = state.occupationalSkills.filter((occupationalSkill) => {
            return occupationalSkill.id !== skill.id;
        });
        stateCopy.characterOSPs -= skill.cost;
        setCharacterState(stateCopy);
    };

    return (
        <CharacterContext.Provider
            value={{
                characterState: state,
                addCharacterSkill,
                removeCharacterSkill,
                addOccupationalSkill,
                removeOccupationalSkill,
            }}
        >
            {children}
        </CharacterContext.Provider>
    );
};
