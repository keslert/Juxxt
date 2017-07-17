import * as blueprints from '../../../components/page/groups/_blueprints';
import { generateElementSkeleton } from './element';
import { generateItemSkeleton } from './utils';
import { mapValues } from 'lodash';
import { randomItem } from '../../utils';

export function generateGroupSkeleton(name, variant, overrides={}) {
  const blueprint = {...blueprints[name], overrides};
  return generateItemSkeleton(name, blueprint, variant, overrides);
}