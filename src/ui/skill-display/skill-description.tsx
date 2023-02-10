import React, { FC } from 'react';
import { Alert } from 'antd';
import { useDataContext } from '../../context/hooks';
import { Skill } from '../../data/models/skill';

import styles from './skill-description.module.css';

interface ISkillPopoverDescription {
    skill: Skill;
    disabled?: false | string;
}

export const SkillDescription: FC<ISkillPopoverDescription> = ({ skill, disabled }) => {
    const { dataState } = useDataContext();
    const { skillRecord } = dataState;

    const getInfo = () => {
        const prerequisites =
            skill.prerequisites.length > 0 ? (
                skill.prerequisites
                    .map((skill) => {
                        if (skill.includes('||')) {
                            return skill
                                .split('||')
                                .map((s) => skillRecord[s].name)
                                .join(' OR ');
                        }

                        return skillRecord[skill].name;
                    })
                    .join(', ')
            ) : (
                <i>None</i>
            );

        if (skill.tier > 0) {
            const replaces = () => {
                if (!skill.replaces) {
                    return <i>None</i>;
                }

                if (Array.isArray(skill.replaces)) {
                    return skill.replaces.map((s) => skillRecord[s].name).join(', ');
                }

                return skillRecord[skill.replaces].name;
            };

            return (
                <>
                    <b>Cost:</b> {skill.cost}
                    <br />
                    <b>Tier:</b> {skill.tier}
                    <br />
                    <b>Prerequisites:</b> {prerequisites}
                    <br />
                    <b>Replaces:</b> {replaces()}
                    <br />
                </>
            );
        } else {
            return (
                <>
                    <b>Cost:</b> {skill.cost}
                    <br />
                    <b>Prerequisites:</b> {prerequisites ?? <i>None</i>}
                    <br />
                </>
            );
        }
    };

    return (
        <div className={styles.skillDescription}>
            {getInfo()}
            {skill.description}
            {disabled ? (
                <Alert message={disabled} type='error' style={{ marginTop: '8px' }} />
            ) : null}
        </div>
    );
};
