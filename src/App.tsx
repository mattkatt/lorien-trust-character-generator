import React, { FC } from 'react';
import { Layout } from 'antd';

import { ContextWrapper } from './context/context-wrapper';
import { AppFooter } from './ui/app/app-footer';
import { AppSettings } from './ui/app/app-settings';
import { SidePanel } from './ui/side-panel/side-panel';
import { OccupationalSkill } from './ui/skill-display/occupational-skill';
import { CharacterSkills } from './ui/skill-display/character-skills';

import './App.css';

const { Content } = Layout;

const App: FC = () => {
    const sidePanelWidth = 260;

    return (
        <ContextWrapper>
            <Layout>
                <SidePanel width={sidePanelWidth}>
                    <CharacterSkills />
                    <AppSettings />
                </SidePanel>

                <Layout style={{ marginLeft: sidePanelWidth }}>
                    <Content>
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
        </ContextWrapper>
    );
};

export default App;
