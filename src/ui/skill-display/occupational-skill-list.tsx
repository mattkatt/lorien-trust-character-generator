import React, { FC, useState } from 'react';
import { Card } from 'antd';

import { Helpers } from '../../helpers/helpers';
import { occupationalSkillList } from '../../data/occupational-skill-list';
import { SkillButton } from './skill-button';
import { CollapseIcon } from '../icons';

interface IOccupationalSkillListProps {
    skillListKey: string;
}

export const OccupationalSkillList: FC<IOccupationalSkillListProps> = ({ skillListKey }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Card
            title={Helpers.camelToReadable(skillListKey)}
            extra={<CollapseIcon collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />}
            className={collapsed ? 'collapsed' : ''}
        >
            {occupationalSkillList[skillListKey].map((skill) => (
                <SkillButton key={skill.id} skill={skill} />
            ))}
        </Card>
    );
};
