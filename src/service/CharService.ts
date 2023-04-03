import axios from 'axios';
import { IResponse } from './serviceTypes';
import { API_KEY, LIMIT, OFFSET } from './serviceVariables';

export async function fetchChars(limit: number, offset: number, page: number) {
  return (
    await axios.get<IResponse>(
      `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&offset=${
        (page - 1) * LIMIT
      }&apikey=${API_KEY}`
    )
  ).data;
}

export async function fetchCharsWithQuery(query: string, limit: number, page: number) {
  if (!query || query === '') {
    return await fetchChars(limit, OFFSET, page);
  }
  return (
    await axios.get<IResponse>(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&limit=${limit}&offset=${
        (page - 1) * LIMIT
      }&apikey=${API_KEY}`
    )
  ).data;
}

export async function fetchCharById(id: number) {
  return (
    await axios.get<IResponse>(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${API_KEY}`
    )
  ).data;
}
