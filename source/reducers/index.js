import { combineReducers } from 'redux';
import HotelReducer from './reducer_hotels';

const rootReducer = combineReducers({
  hotels: HotelReducer
});

export default rootReducer;
