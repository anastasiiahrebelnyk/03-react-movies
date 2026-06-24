import { useState } from 'react';
import MovieGrid from './components/MovieGrid/MovieGrid';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchMovies } from './services/movieService';
import type { Movie } from './types/movie';
import toast, { Toaster } from 'react-hot-toast';

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
      if (results.length === 0) {
        toast.error('No movies found for your request.');
      }
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
      <div>
        <Toaster />
      </div>
      <SearchBar onSubmit={handleSearch} />
      {/* <MovieGrid movies={movies} /> */}
      {movies.length > 0 && <MovieGrid movies={movies} />}
    </>
  );
}
export default App;
