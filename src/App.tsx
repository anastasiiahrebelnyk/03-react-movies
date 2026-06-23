import MovieGrid from './components/MovieGrid/MovieGrid';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchMovies } from './services/movieService';
import type { Movie } from './types/movie';

function App() {
   const [movies, setMovies] = useState<Photo[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  return (
  <>
      <SearchBar onSubmit={fetchMovies} />
      {(movies.length > 0) ? <MovieGrid onSelect={()=> {}} movies={ } /> : 'No movies found for your request.'}
  </>
}

export default App;
