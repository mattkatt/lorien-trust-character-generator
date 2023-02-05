import React, { useEffect, useMemo, useState } from 'react';
import { Button, Checkbox, Space, Typography } from 'antd';
import { TextBox } from '../layout/text-box';
import { useAppContext, useCharacterContext } from '../../context/hooks';

const { Title } = Typography;

export const AppSettings = () => {
    const { appState, setHideDisabledSkills } = useAppContext();
    const { reset } = useCharacterContext();
    const [hideDisabled, setHideDisabled] = useState(appState.hideDisabledSkills);
    const spaceStyle = useMemo(() => {
        return {
            width: '100%',
            marginBottom: '16px',
        };
    }, []);

    useEffect(() => {
        setHideDisabled(appState.hideDisabledSkills);
    }, [appState, setHideDisabled]);

    return (
        <TextBox>
            <Title level={3}>Settings</Title>

            <Space direction='vertical' style={spaceStyle}>
                <Checkbox
                    checked={hideDisabled}
                    onClick={() => setHideDisabledSkills(!appState.hideDisabledSkills)}
                >
                    Hide Disabled Skills
                </Checkbox>

                <Button block danger type='primary' onClick={reset}>
                    RESET
                </Button>
            </Space>
        </TextBox>
    );
};
