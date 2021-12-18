import { createContext, FC, useEffect, useState } from 'react';
import { ICharacterState } from '../interfaces/character-state';
import { ICharacterContext } from '../interfaces/character-context';
import { ICharacterSkill, IOccupationalSkill } from '../interfaces/skills';

export const defaultCharacterState: ICharacterState = {
  characterSkillPoints: 16,
  characterOSPs: 0,
  characterSkills: [],
  occupationalSkills: [],
  activeSkills: 0,
  get spentCharacterSkillPoints() {
    return this.characterSkills.reduce((prev, next) => {
      return prev + next.cost;
    }, 0);
  },
  get unspentCharacterSkillPoints() {
    return this.characterSkillPoints - this.spentCharacterSkillPoints;
  },
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
    const storedCharacter = localStorage.getItem('characterState');

    if (storedCharacter) {
      const savedState = JSON.parse(storedCharacter) as ICharacterState;
      setState({
        ...defaultCharacterState,
        characterOSPs: savedState.characterOSPs,
        characterSkills: savedState.characterSkills,
        occupationalSkills: savedState.occupationalSkills,
        activeSkills: savedState.activeSkills
      });
    }
  }, [setState]);


  const setCharacterState = (newState: ICharacterState) => {
    setState(newState);
    localStorage.setItem('characterState', JSON.stringify(newState));
  };

  const addCharacterSkill = (skill: ICharacterSkill) => {
    const skills = [...state.characterSkills];
    skills.push(skill);
    setCharacterState({ ...state, characterSkills: skills });
  };

  const removeCharacterSkill = (skill: ICharacterSkill) => {
    const skills = state.characterSkills.filter((characterSkill) => characterSkill.id !== skill.id);
    setCharacterState({ ...state, characterSkills: skills });
  };

  const addOccupationalSkill = (skill: IOccupationalSkill) => {
    const skills = [...state.occupationalSkills];
    skills.push(skill);
    setCharacterState({ ...state, occupationalSkills: skills });
  };

  const removeOccupationalSkill = (skill: IOccupationalSkill) => {
    const skills = state.occupationalSkills.filter((occupationalSkill) => {
      return occupationalSkill.id !== skill.id;
    });
    setCharacterState({ ...state, occupationalSkills: skills });
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
