import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/locations/';

export const FETCH_HOTELS = 'FETCH_HOTELS'

export function fetchHotels(locationId){
  var config = {
    headers: {'Accept': 'application/json'}
  };
  const url = `${ROOT_URL}${locationId}/hotels`;
  const hotels = axios.get(url, config);

  return {
    type: FETCH_HOTELS,
    payload: hotels
  }
}
