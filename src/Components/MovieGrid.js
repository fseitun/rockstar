import { Link } from 'react-router-dom';

export function MovieGrid({ movies }) {
  return (
    <div className="container">
      {movies?.slice(0, 9).map(movie => (
        <Link to={`../movie-details/${movie.id}`} className="best-movies-list" key={movie.id}>
          <img alt={movie.title} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        </Link>
      ))}
    </div>
  );
}
