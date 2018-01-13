import {
  API_HOST,
  API_KEY,
  GET_TRENDING_PATH,
  SEARCH_PATH,
} from './constants';

const constructApiRoute = (path, queryParams) => {
  const endpoint = `${API_HOST}/${path}?`;
  const parameters = { ...queryParams, api_key: API_KEY };
  return Object.keys(parameters)
    .reduce((queryString, paramKey) => {
      const param = parameters[paramKey];
      if (typeof param !== 'undefined' && param !== null) {
        return `${queryString}&${paramKey}=${encodeURIComponent(`${param}`)}`;
      }

      return queryString;
    }, endpoint);
};

export const getTrendingGifs = (offset, limit) => {
  const queryParams = { offset, limit };
  const route = constructApiRoute(GET_TRENDING_PATH, queryParams);
  return fetch(route)
    .then((res) => res.json());
};

export const searchGifs = (queryString, offset, limit) => {
  const queryParams = { q: queryString, offset, limit };
  const route = constructApiRoute(SEARCH_PATH, queryParams);
  return fetch(route)
    .then((res) => res.json());
};
