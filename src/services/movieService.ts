import axios from 'axios';
import type { Movie } from '../types/movie';

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;

interface MovieHTTPResponse {
  hits: Movie[];
}

export const fetchMovies = async (query: string) => {
  const response = await axios.get<MovieHTTPResponse>(
    'https://api.themoviedb.org/3/movie/11',
    {
      params: {
        // твої параметри
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );
  return response.data;
};
