import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/location/';

export const FETCH_HOTELS = 'FETCH_HOTELS'

export function fetchHotels(locationId){
  const url = `${ROOT_URL}${locationId}/hotels`;
  const hotels = axios.get(url);

  return {
    type: FETCH_HOTELS,
    payload: hotels 
  }
}
