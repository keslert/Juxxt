import * as blueprints from '../../../components/page/elements/_blueprints';
import shortid from 'shortid';

export function buildElementFromSkeleton(skeleton) {
  const element = {
    isElement: true,
    id: skeleton.id || shortid.generate(),
    name: skeleton.name,
  }
  const blueprint = blueprints[element.name];
  element.is = blueprint.is;

  return element;
}