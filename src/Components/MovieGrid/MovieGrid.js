import { Link } from 'react-router-dom';
import fallback from '../Assets/not-found.png';

export function MovieGrid({ movies, searchTerm }) {
  console.log('movies', movies);
  return (
    <div className="container">
      {movies?.slice(0, 9).map(movie => (
        <Link
          to={`../movie-details/${movie.id}`}
          state={{ searchTerm }}
          className="best-movies-list"
          key={movie.id}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            onError={fallbackImage}
          />
        </Link>
      ))}
    </div>
  );

  function fallbackImage(event) {
    event.target.src = fallback;
  }
}
