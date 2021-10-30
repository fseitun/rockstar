import { MovieGrid } from '../MovieGrid/MovieGrid';

export function SearchResults({ searchResults, baseFiveRating, searchTerm }) {
  console.log('searchResults', searchResults);
  console.log('baseFiveRating', baseFiveRating);
  return (
    <div>
      <h3>🔍Your Searched Movies</h3>
      <MovieGrid
        movies={
          baseFiveRating.disabled ? searchResults : filterByRating(searchResults, baseFiveRating)
        }
        searchTerm={searchTerm}
      />
    </div>
  );

  function filterByRating(movies, baseFiveRating) {
    return movies.filter(movie => {
      console.log(`(${2 * baseFiveRating.value} === 2 && ${movie.vote_average} === 0) ||
      (${movie.vote_average} <= ${2 * baseFiveRating.value} &&
        ${2 * baseFiveRating.value - 2} < ${movie.vote_average})`);
      return (
        (2 * baseFiveRating.value === 2 && movie.vote_average === 0) ||
        (movie.vote_average <= 2 * baseFiveRating.value &&
          2 * baseFiveRating.value - 2 < movie.vote_average)
      );
    });
  }
}
