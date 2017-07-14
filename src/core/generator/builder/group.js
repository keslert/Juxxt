import blueprints from '../../../components/page/groups/_blueprints';
import { buildItemFromSkeleton } from './builder-utils';

import { mapValues, pickBy, uniqueId } from 'lodash';

export function buildGroupFromSkeleton(skeleton) {
  const group = {
    isGroup: true,
    id: skeleton.id || ('g_' + uniqueId()),
    uid: 'guid_' + uniqueId(),
    name: skeleton.name,
    variant: skeleton.variant,
  }
  group.contentId = group.id;
  group.colorId = group.id;

  const blueprint = blueprints[skeleton.name];
  buildItemFromSkeleton(group, blueprint, skeleton);
  return group;
};