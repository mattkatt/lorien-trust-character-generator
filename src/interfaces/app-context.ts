import { IAppState } from './app-state';

export interface IAppContext {
  appState: IAppState;
  setHideDisabledSkills: (bool: boolean) => void;
}
