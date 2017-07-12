import blueprints from '../../../components/page/groups/_blueprints';
import { buildElementFromSkeleton } from './element';

import { mapValues, pickBy, uniqueId } from 'lodash';

export function buildGroupFromSkeleton(skeleton) {
  const group = {
    isGroup: true,
    id: skeleton.id || ('g_' + uniqueId()),
    uid: 'guid_' + uniqueId(),
    name: skeleton.name,
    variant: skeleton.variant,
  }

  const blueprint = blueprints[skeleton.name];

  group.elements = mapValues(blueprint.elements || {}, (_, key) =>
    buildElementFromSkeleton(skeleton.elements[key])
  );

  group.groups = mapValues(blueprint.groups || {}, (_, key) => 
    buildGroupFromSkeleton(skeleton.groups[key])
  )

  return group;
};