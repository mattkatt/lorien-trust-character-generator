import React, { useContext } from 'react';
import { Checkbox } from 'antd';
import { AppContext } from '../../context/app-context';

export const AppSettings = () => {
  const { appState, setHideDisabledSkills } = useContext(AppContext);

  return (
    <>
      <h2>Settings</h2>

      <Checkbox
        value={appState.hideDisabledSkills}
        onClick={() => setHideDisabledSkills(!appState.hideDisabledSkills)}
      >
        Hide Disabled Skills
      </Checkbox>
    </>
  );
};
