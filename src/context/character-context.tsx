import { createContext, FC, useState } from 'react';
import { ICharacterState } from '../interfaces/character-state';
import { ICharacterContext, ICharacterProvider } from '../interfaces/character-context';
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
  setCharacterState: () => {},
  setCharacterOSPs: () => {},
  setCharacterSkills: () => {},
  addCharacterSkill: () => {},
  removeCharacterSkill: () => {},
  setOccupationalSkills: () => {},
  addOccupationalSkill: () => {},
  removeOccupationalSkill: () => {},
  setActiveSkills: () => {},
};

export const CharacterContext = createContext<ICharacterContext>(defaultCharacterContext);

export const CharacterProvider: FC<ICharacterProvider> = ({ character, children }) => {
  const [state, setState] = useState(character || defaultCharacterState);

  const characterState = state;

  const setCharacterState = (newState: ICharacterState) => {
    setState(newState);
  };

  const setCharacterOSPs = (OSPs: number) => {
    setState({ ...state, characterOSPs: OSPs });
  };

  const setCharacterSkills = (skills: Array<ICharacterSkill>) => {
    setState({ ...state, characterSkills: skills });
  };

  const addCharacterSkill = (skill: ICharacterSkill) => {
    const skills = [...state.characterSkills];
    skills.push(skill);
    setState({ ...state, characterSkills: skills });
  };

  const removeCharacterSkill = (skill: ICharacterSkill) => {
    const skills = state.characterSkills.filter((characterSkill) => characterSkill.id !== skill.id);
    setState({ ...state, characterSkills: skills });
  };

  const setOccupationalSkills = (skills: Array<IOccupationalSkill>) => {
    setState({ ...state, occupationalSkills: skills });
  };

  const addOccupationalSkill = (skill: IOccupationalSkill) => {
    const skills = [...state.occupationalSkills];
    skills.push(skill);
    setState({ ...state, occupationalSkills: skills });
  };

  const removeOccupationalSkill = (skill: IOccupationalSkill) => {
    const skills = state.occupationalSkills.filter(
      (occupationalSkill) => occupationalSkill.id !== skill.id,
    );
    setState({ ...state, occupationalSkills: skills });
  };

  const setActiveSkills = (skills: number) => {
    setState({ ...state, activeSkills: skills });
  };

  return (
    <CharacterContext.Provider
      value={{
        characterState,
        setCharacterState,
        setCharacterOSPs,
        setCharacterSkills,
        addCharacterSkill,
        removeCharacterSkill,
        setOccupationalSkills,
        addOccupationalSkill,
        removeOccupationalSkill,
        setActiveSkills,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const CharacterConsumer = CharacterContext.Consumer;
