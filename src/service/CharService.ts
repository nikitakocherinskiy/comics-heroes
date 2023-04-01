import axios from 'axios';
import { IResponse } from './serviceTypes';
import { API_KEY, LIMIT } from './serviceVariables';

async function fetchChars(limit: number, offset: number, page: number) {
  return (
    await axios.get<IResponse>(
      `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&offset=${
        (page - 1) * LIMIT
      }&apikey=${API_KEY}`
    )
  ).data;
}

export default fetchChars;
