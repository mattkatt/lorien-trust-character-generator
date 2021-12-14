import React, { FC } from 'react';
import { Layout } from "antd"

import { CharacterProvider, defaultCharacterState } from "./context/character-context"
import { SidePanel } from "./ui/side-panel/side-panel"
import { AppFooter, AppHeader } from "./ui/app"

import './App.css';
import { SkillDisplay } from "./ui/skill-display/skill-display"
import { CharacterSkills } from "./ui/character-skill-form/character-skills"

const App: FC = () => {
  const { Content } = Layout

  return (
      <CharacterProvider character={defaultCharacterState}>
        <Layout style={{ minHeight: "100vh" }}>
          <SidePanel>
            <CharacterSkills />
          </SidePanel>

          <Layout>
            <Content>
              <AppHeader />
              <SkillDisplay />
            </Content>
            <AppFooter>
              <span>
                Creative Content &copy; <a href="https://lorientrust.com/">Lorien Trust</a> | App by{" "}
                <a href="https://github.com/mattkatt">Matt Evans</a>
              </span>
            </AppFooter>
          </Layout>
        </Layout>
      </CharacterProvider>
  );
}

export default App;
