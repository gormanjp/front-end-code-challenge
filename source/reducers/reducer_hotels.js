import { FETCH_HOTELS } from '../actions/index';

export default function( state=null, action) {
  switch (action.type) {
    case FETCH_HOTELS:
      return [ action.payload ];
    }
  return state;
}
