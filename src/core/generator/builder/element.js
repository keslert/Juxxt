import * as blueprints from '../../../components/page/elements/_blueprints';
import { uniqueId } from 'lodash';

export function buildElementFromSkeleton(skeleton) {
  const element = {
    isElement: true,
    id: skeleton.id || ('e_' + uniqueId()),
    name: skeleton.name,
    uid: 'euid_' + uniqueId(),
  }

  const blueprint = blueprints[element.name];
  element.is = blueprint.is;

  return element;
}