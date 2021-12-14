import React, { FC } from "react"
import { ISkill } from "../../interfaces/skills"

interface ISkillPopoverDescription {
    skill: ISkill
}

export const SkillPopover: FC<ISkillPopoverDescription> = ({skill}) => {
    return (
        <div style={{ maxWidth: '60vw'}}>
            {skill.description}
        </div>
    )
}
