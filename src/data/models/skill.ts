import _ from 'lodash';
import { ISkill } from '../interfaces/skills';
import { StringHelpers } from '../../helpers/string-helpers';

export class Skill implements ISkill {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly tier: 0 | 1 | 2 | 3 | 4 | 5;
    readonly cost: number;
    readonly prerequisites: Array<ISkill['id']>;
    readonly restrictedSkills: Array<ISkill['id']>;
    readonly restrictedPurchase: boolean;
    readonly replaces?: ISkill['id'] | Array<ISkill['id']>;

    constructor(props: Partial<ISkill>) {
        this.id = props.id ?? _.uniqueId('skill');
        this.name = props.name ?? StringHelpers.camelToReadable(this.id);
        this.description = props.description ?? '';
        this.tier = props.tier ?? 0;
        this.cost = props.cost ?? this.tier * 10;
        this.prerequisites = props.prerequisites ?? [];
        this.restrictedSkills = props.restrictedSkills ?? [];
        this.restrictedPurchase = props.restrictedPurchase ?? false;
        this.replaces = props.replaces;
    }

    get isOS() {
        return this.tier > 0;
    }

    toString() {
        return this.name;
    }
}
