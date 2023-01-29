import React, { FC } from 'react';
import { Layout } from 'antd';

import { AppProvider } from './context/app-context';
import { CharacterProvider } from './context/character-context';
import { AppFooter } from './ui/app/app-footer';
import { AppHeader } from './ui/app/app-header';
import { AppSettings } from './ui/app/app-settings';
import { SidePanel } from './ui/side-panel/side-panel';
import { OccupationalSkill } from './ui/skill-display/occupational-skill';
import { CharacterSkills } from './ui/skill-display/character-skills';

import './App.css';
import { DataProvider } from './context/data-context';

const App: FC = () => {
    const { Content } = Layout;

    return (
        <AppProvider>
            <DataProvider>
                <CharacterProvider>
                    <Layout style={{ minHeight: '100vh' }}>
                        <SidePanel>
                            <CharacterSkills />
                            <AppSettings />
                        </SidePanel>

                        <Layout style={{ marginLeft: 260 }}>
                            <Content>
                                <AppHeader />
                                <OccupationalSkill />
                            </Content>
                            <AppFooter>
                                <span>
                                    Creative Content &copy;{' '}
                                    <a href='https://lorientrust.com/'>Lorien Trust</a> | App by{' '}
                                    <a href='https://github.com/mattkatt'>Matt Evans</a>
                                </span>
                            </AppFooter>
                        </Layout>
                    </Layout>
                </CharacterProvider>
            </DataProvider>
        </AppProvider>
    );
};

export default App;
