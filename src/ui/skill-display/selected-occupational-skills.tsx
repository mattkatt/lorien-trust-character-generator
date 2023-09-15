import React, { FC } from 'react';
import { Alert, List, Popover, Typography } from 'antd';
import { SkillDescription } from './skill-description';
import { useCharacterContext } from '../../context/hooks';
import { Skill } from '../../data/models/skill';

const { Paragraph, Title } = Typography;

export const SelectedOccupationalSkills: FC = () => {
    const { characterState } = useCharacterContext();

    const occupationalSkills: Array<Skill> = characterState.skills
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
        const isOverwritten = occupationalSkills.some((osSkill) => osSkill.replaces === skill.id);

        return isOverwritten ? null : (
            <li key={skill.id} style={{lineHeight: 1.15, marginBottom: 6}}>
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
        <div style={{ position: 'sticky', top: 0, padding: 15 }}>
            <Title level={3}>Selected Occupational Skills</Title>

            {skillsToDisplay.length <= 0 ? (
                <Alert message='No skills selected' />
            ) : (
                <Paragraph>
                    Total OSPs: <b>{characterState.characterOSPs}</b>
                </Paragraph>
            )}

            {characterState.unspentCharacterSkillPoints ? (
                <Alert message='You have unspent character skill points' type='warning' style={{marginBottom: '15px'}} />
            ) : null}

            <List>{skillsToDisplay}</List>
        </div>
    );
};
