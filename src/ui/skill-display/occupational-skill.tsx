import React, { FC, useEffect, useState } from 'react';
import { Col, Layout, Row, Typography } from 'antd';

import { SelectedOccupationalSkills } from './selected-occupational-skills';
import { OccupationalSkillList } from './occupational-skill-list';
import { useDataContext } from '../../context/hooks';

type breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const { Content } = Layout;
const { Title } = Typography;

export const OccupationalSkill: FC = () => {
    const { dataState } = useDataContext();
    const [size, setSize] = useState<breakpoint>('xs');

    useEffect(() => {
        const onResize = () => {
            let width = window.innerWidth;
            let newSize: breakpoint;

            if (width >= 1200) {
                newSize = 'xl';
            } else if (width >= 992) {
                newSize = 'lg';
            } else if (width >= 768) {
                newSize = 'md';
            } else if (width >= 576) {
                newSize = 'sm';
            } else {
                newSize = 'xs';
            }

            if (newSize !== size) {
                setSize(newSize);
            }
        };

        onResize();
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, [size]);

    const getColSpan = (breakpoint: breakpoint): number => {
        switch (breakpoint) {
            case 'xs':
            case 'sm':
                return 24;
            case 'md':
                return 12;
            case 'lg':
                return 8;
            case 'xl':
                return 6;
        }
    };

    return (
        <Row>
            <Col span={20} style={{ padding: '15px' }}>
                <Title level={3}>Available Skills</Title>
                <Content>
                    <Row gutter={16}>
                        {Object.keys(dataState.osList).map((skillListKey) => (
                            <Col
                                span={getColSpan(size)}
                                key={skillListKey}
                                style={{ marginBottom: '16px' }}
                            >
                                <OccupationalSkillList skillListKey={skillListKey} />
                            </Col>
                        ))}
                    </Row>
                </Content>
            </Col>
            <Col span={4} style={{backgroundColor: 'white' }}>
                <SelectedOccupationalSkills/>
            </Col>
        </Row>
    );
};
