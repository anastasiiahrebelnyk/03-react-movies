import { useState } from 'react';
import MovieGrid from './components/MovieGrid/MovieGrid';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchMovies } from './services/movieService';
import type { Movie } from './types/movie';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSearch = async (query: string) => {
    try {
      setMovies([]);
      setIsError(false);
      setIsLoading(true);
      const { results } = await fetchMovies(query);
      if (fetchMovies.length === 0) {
        //
        console.log('no movies');
      }
      console.log(results);
      setMovies(results);
    } catch (error) {
      console.log(error);

      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <MovieGrid movies={movies} />
      {/* {movies.length > 0 ? (
        <MovieGrid movies={movies} />
      ) : (
        'No movies found for your request.'
      )} */}
    </>
  );
}
export default App;
