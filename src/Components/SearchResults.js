import { MovieGrid } from './MovieGrid';
import './PopularMovies.css';

export function SearchResults({ searchResults }) {
  return (
    <div>
      <h3>🔍Your Searched Movies</h3>
      <MovieGrid movies={searchResults} />
    </div>
  );
}
