import axios from 'axios';
import type { Movie } from '../types/movie';

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;

interface MovieHTTPResponse {
  results: Movie[];
}

export const fetchMovies = async (
  query: string
): Promise<MovieHTTPResponse> => {
  const response = await axios.get<MovieHTTPResponse>(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query: query,
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  return response.data;
};
