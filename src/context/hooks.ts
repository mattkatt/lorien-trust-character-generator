import { useContext } from 'react';
import { AppContext } from './app-context';
import { DataContext } from './data-context';
import { CharacterContext } from './character-context';

export const useAppContext = () => useContext(AppContext);
export const useCharacterContext = () => useContext(CharacterContext);
export const useDataContext = () => useContext(DataContext);
