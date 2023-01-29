import { createContext, FC, useMemo } from 'react';
import { SkillList, SkillRecord } from '../data/types/skills';
import { SkillFactory } from '../data/factories/skill-factory';

interface IDataState {
    skillRecord: SkillRecord;
    csList: SkillList;
    osList: SkillList;
}

interface IDataContext {
    dataState: IDataState;
}

export const defaultDataState: IDataState = {
    skillRecord: {},
    csList: {},
    osList: {},
};

const defaultDataContext: IDataContext = {
    dataState: defaultDataState,
};

export const DataContext = createContext<IDataContext>(defaultDataContext);
DataContext.displayName = 'DataContext';

export const DataProvider: FC = ({ children }) => {
    const skillRecord = useMemo(() => SkillFactory.generateSkillRecord(), []);
    const state = useMemo<IDataState>(() => {
        return {
            skillRecord,
            csList: SkillFactory.generateCSList(skillRecord),
            osList: SkillFactory.generateOSList(skillRecord),
        };
    }, [skillRecord]);

    return (
        <DataContext.Provider
            value={{
                dataState: state,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
