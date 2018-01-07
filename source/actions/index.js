import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/locations/';

export const FETCH_CHEAPEST = 'FETCH_CHEAPEST';
export const FETCH_POPULAR = 'FETCH_POPULAR';
export const FETCH_STARS = 'FETCH_STARS';

export function fetchCheapest(locationId){
  var config = {
    headers: {'Accept': 'application/json'}
  };
  const url = `${ROOT_URL}${locationId}/hotels?sort=rate-asc`;
  const cheapestHotels = axios.get(url, config);

  return {
    type: FETCH_CHEAPEST,
    payload: cheapestHotels
  }
}

export function fetchPopular(locationId){
  var config = {
    headers: {'Accept': 'application/json'}
  };
  const url = `${ROOT_URL}${locationId}/hotels?sort=popularity-asc`;
  const popularHotels = axios.get(url, config);

  return {
    type: FETCH_POPULAR,
    payload: popularHotels
  }
}

export function fetchStars(locationId){
  var config = {
    headers: {'Accept': 'application/json'}
  };
  const url = `${ROOT_URL}${locationId}/hotels?sort=stars-desc`;
  const starsHotels = axios.get(url, config);

  return {
    type: FETCH_STARS,
    payload: starsHotels
  }
}
