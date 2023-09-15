import React, { FC } from 'react';
import { Collapse, Typography } from 'antd';

import { StringHelpers } from '../../helpers/string-helpers';
import { SkillButton } from './skill-button';
import { TextBox } from '../layout/text-box';
import { useCharacterContext, useDataContext } from '../../context/hooks';

const { Paragraph, Title } = Typography;

export const CharacterSkills: FC = () => {
    const { characterState } = useCharacterContext();
    const { dataState } = useDataContext();

    const skillRecordKeys = Object.keys(dataState.csList);

    return (
        <>
            <TextBox sticky>
                <Title level={3}>Character Skills</Title>
                <Paragraph>
                    Skill Point Spend: {16 - characterState.unspentCharacterSkillPoints} / 16
                </Paragraph>
            </TextBox>

            <Collapse defaultActiveKey={skillRecordKeys}>
                {skillRecordKeys.map((skillRecordId) => (
                    <Collapse.Panel
                        header={StringHelpers.camelToReadable(skillRecordId)}
                        key={skillRecordId}
                    >
                        {Object.keys(dataState.csList[skillRecordId]).map((skillId) => (
                            <SkillButton key={skillId} skillId={skillId} />
                        ))}
                    </Collapse.Panel>
                ))}
            </Collapse>
        </>
    );
};
