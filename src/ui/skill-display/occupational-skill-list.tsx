import React, { FC, useState } from 'react';
import { Card } from 'antd';

import { StringHelpers } from '../../helpers/string-helpers';
import { SkillButton } from './skill-button';
import { CollapseIcon } from '../icons';
import { useDataContext } from '../../context/hooks';

interface IOccupationalSkillListProps {
    skillListKey: string;
}

export const OccupationalSkillList: FC<IOccupationalSkillListProps> = ({ skillListKey }) => {
    const { dataState } = useDataContext();
    const [collapsed, setCollapsed] = useState(false);
    const list = dataState.osList[skillListKey];

    return (
        <Card
            title={StringHelpers.camelToReadable(skillListKey)}
            extra={<CollapseIcon collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />}
            className={collapsed ? 'collapsed' : ''}
        >
            {Object.keys(list).map((skillId) => (
                <SkillButton key={skillId} skillId={skillId} />
            ))}
        </Card>
    );
};
