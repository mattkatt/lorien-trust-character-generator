import React, { FC } from 'react';

import { AppProvider } from './app-context';
import { DataProvider } from './data-context';
import { CharacterProvider } from './character-context';

export const ContextWrapper: FC = ({ children }) => (
    <AppProvider>
        <DataProvider>
            <CharacterProvider>{children}</CharacterProvider>
        </DataProvider>
    </AppProvider>
);
