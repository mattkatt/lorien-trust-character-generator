import React, { useContext, useEffect, useState } from 'react';
import { Checkbox } from 'antd';
import { AppContext } from '../../context/app-context';

export const AppSettings = () => {
  const { appState, setHideDisabledSkills } = useContext(AppContext);
  const [hideDisabled, setHideDisabled] = useState(appState.hideDisabledSkills);

  useEffect(() => {
    setHideDisabled(appState.hideDisabledSkills);
  }, [appState, setHideDisabled]);

  return (
    <>
      <h2>Settings</h2>

      <Checkbox
        checked={hideDisabled}
        onClick={() => setHideDisabledSkills(!appState.hideDisabledSkills)}
      >
        Hide Disabled Skills
      </Checkbox>
    </>
  );
};
