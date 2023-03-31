import axios from 'axios';
import { IResponse } from './serviceTypes';

async function fetchChars(limit: number) {
  return (
    await axios.get<IResponse>(
      `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&apikey=910a76a074aeea58306892ac355119f0`
    )
  ).data;
}

export default fetchChars;
