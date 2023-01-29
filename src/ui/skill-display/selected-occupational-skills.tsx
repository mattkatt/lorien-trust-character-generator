import React, { FC } from 'react';
import { Alert, List, Popover, Typography } from 'antd';
import { SkillDescription } from './skill-description';
import { useCharacterContext, useDataContext } from '../../context/hooks';
import { Skill } from '../../data/models/skill';

const { Paragraph } = Typography;

export const SelectedOccupationalSkills: FC = () => {
    const { characterState } = useCharacterContext();
    const { dataState } = useDataContext();

    const occupationalSkills: Array<Skill> = characterState.skills
        .map((skillId) => {
            return dataState.skillRecord[skillId];
        })
        .filter((skill) => skill.isOS)
        .sort((skillA, skillB) => {
            if (skillA.tier > skillB.tier) {
                return 1;
            }
            if (skillA.tier < skillB.tier) {
                return -1;
            }

            return 0;
        });

    const skillsToDisplay = occupationalSkills.map((skill) => {
        const isOverwritten = false;
        // const isOverwritten = dataState.osList.some((s) => {
        //     if (Array.isArray(s.replaces)) {
        //         return s.replaces.some((replaces) => replaces === skill.id);
        //     }
        //     return s.replaces === skill.id;
        // });

        return isOverwritten ? null : (
            <li key={skill.id}>
                <Popover
                    content={<SkillDescription skill={skill} />}
                    title={skill.name}
                    placement={'right'}
                >
                    {skill.name}
                </Popover>
            </li>
        );
    });

    return (
        <div style={{ backgroundColor: 'white', padding: '28px' }}>
            <h2>Selected Occupational Skills:</h2>
            {skillsToDisplay.length <= 0 ? (
                <Alert message='No skills selected' />
            ) : (
                <Paragraph>
                    Total OSPs: <b>{characterState.characterOSPs}</b>
                </Paragraph>
            )}
            <List>{skillsToDisplay}</List>
        </div>
    );
};
