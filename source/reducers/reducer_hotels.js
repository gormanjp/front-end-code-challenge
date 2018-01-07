import { FETCH_CHEAPEST, FETCH_STARS, FETCH_POPULAR } from '../actions/index';

export default function( state=null, action) {
  switch (action.type) {
    case FETCH_CHEAPEST:
      return {
        ...state,
        cheapestHotels: action.payload.data.data
      }
    case FETCH_STARS:
      return {
        ...state,
        starsHotels: action.payload.data.data
      }
    case FETCH_POPULAR:
      return {
        ...state,
        popularHotels: action.payload.data.data
      }
    }
  return state;
}
