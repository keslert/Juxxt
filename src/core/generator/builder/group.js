import blueprints from '../../../components/page/groups/_blueprints';
import { buildElementFromSkeleton } from './element';

import { mapValues, pickBy } from 'lodash';
import shortid from 'shortid';
import { getValidVariation } from '../../utils';



export function buildGroupFromSkeleton(skeleton) {
  const group = {
    isGroup: true,
    id: skeleton.id || shortid.generate(),
    name: skeleton.name,
    variant: skeleton.variant,
  }

  const blueprint = getGroupBlueprint(skeleton.name);

  group.elements = mapValues(blueprint.elements, (elementReqs, key) => {
    const element = buildElementFromSkeleton(skeleton.elements[key]);
    element.group = group;
    element.groupKey = key;
    return element;
  })

  return group;
}

const _genericGroups = pickBy(blueprints, group => !group.special);
export function getGroupOptions(props) {
  return Object.keys(_genericGroups);
}

export function getGroupBlueprint(name) {
  return blueprints[name];
}