import React, { FC, useEffect, useState } from 'react';
import { Alert, Col, Row, Typography } from 'antd';

import { SelectedOccupationalSkills } from './selected-occupational-skills';
import { OccupationalSkillList } from './occupational-skill-list';
import { useCharacterContext, useDataContext } from '../../context/hooks';

type breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const { Title } = Typography;

export const OccupationalSkill: FC = () => {
    const { characterState } = useCharacterContext();
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
        <>
            <Row style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <Col span={24}>
                    <SelectedOccupationalSkills />

                    {characterState.unspentCharacterSkillPoints ? (
                        <Alert message='You have unspent character skill points' type='warning' />
                    ) : null}
                </Col>
            </Row>

            <Row style={{ margin: '15px' }} gutter={16}>
                <Col span={24}>
                    <Title level={3}>Available Skills:</Title>
                </Col>
            </Row>

            <Row style={{ margin: '15px' }} gutter={16}>
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
        </>
    );
};
