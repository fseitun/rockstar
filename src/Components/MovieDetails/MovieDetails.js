import './MovieDetails.css';
import fallback from '../Assets/not-found.png';

export function MovieDetails({ chosenMovie }) {
  // console.log('chosenMovie', chosenMovie);

  return (
    <div className="movie-details">
      <div className="movie-details__poster">
        {chosenMovie ? (
          <img
            src={`https://image.tmdb.org/t/p/original${chosenMovie?.backdrop_path}`}
            alt={chosenMovie?.Title}
            onError={fallbackImage}
          />
        ) : null}
      </div>
      <div className="movie-details__info">
        <h1>{chosenMovie?.title}</h1>
        {chosenMovie?.tagline ? <h4>"{chosenMovie?.tagline}"</h4> : null}
        <h4>Released: {chosenMovie?.release_date}</h4>
        <p>{chosenMovie?.overview}</p>
      </div>
    </div>
  );

  function fallbackImage(event) {
    event.target.src = fallback;
  }
}
