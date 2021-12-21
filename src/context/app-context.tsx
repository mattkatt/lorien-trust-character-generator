import { createContext, FC, useEffect, useState } from 'react';
import { IAppState } from '../interfaces/app-state';
import { IAppContext } from '../interfaces/app-context';

const APP_STATE = 'appState';

export const defaultAppState: IAppState = {
  hideDisabledSkills: false,
};

const defaultAppContext: IAppContext = {
  appState: defaultAppState,
  setHideDisabledSkills: () => {},
};

export const AppContext = createContext<IAppContext>(defaultAppContext);

export const AppProvider: FC = ({ children }) => {
  const [state, setState] = useState(defaultAppState);

  useEffect(() => {
    const storedApp = localStorage.getItem(APP_STATE);

    if (storedApp) {
      const savedState = JSON.parse(storedApp) as IAppState;
      setState(savedState);
    }
  }, [setState]);

  const setAppState = (newState: IAppState) => {
    setState(newState);
    localStorage.setItem(APP_STATE, JSON.stringify(newState));
  };

  const setHideDisabledSkills = (bool: boolean) => {
    const stateCopy = { ...state };
    stateCopy.hideDisabledSkills = bool;
    setAppState(stateCopy);
  };

  return (
    <AppContext.Provider
      value={{
        appState: state,
        setHideDisabledSkills,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
