import * as types from './action-types';
import { filter, includes } from 'lodash';

const PageState = () => ({
  registry: {},
});

export function pageReducer(state = PageState(), {type, payload}) {
  switch (type) {
    case types.CLEAR_REGISTRY:
      return Object.assign({}, state, {
        registry: {}
      });

    case types.REGISTER_ITEM:
      const registry = Object.assign({}, state.registry,
        {[payload.uuid]: payload.props}
      )
      return Object.assign({}, state, {registry});
    
    default: 
      return state;
  }
}