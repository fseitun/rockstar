import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetails.css';
import { apiKey } from '../Assets/apiKey';
import fallback from '../Assets/not-found.png';

export function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  // console.log('movieId', movieId);

  useEffect(() => getMovie(setMovie, movieId), [movieId]);
  // console.log('movie', movie);

  return (
    <div className="movie-details">
      <div className="movie-details__poster">
        {movie ? (
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt={movie?.Title}
            onError={fallbackImage}
          />
        ) : null}
      </div>
      <div className="movie-details__info">
        <h1>{movie?.title}</h1>
        {movie?.tagline ? <h4>"{movie?.tagline}"</h4> : null}
        <h4>Released: {movie?.release_date}</h4>
        <p>{movie?.overview}</p>
      </div>
    </div>
  );

  async function getMovie(setMovie, movieId) {
    try {
      const queriedMovie = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
      );
      // console.log('queriedMovie', queriedMovie);
      setMovie(queriedMovie.data);
      return queriedMovie.data;
    } catch (error) {
      console.error("Ooops, somthing didn't go as expected: ", error);
    }
  }

  function fallbackImage(event) {
    event.target.src = fallback;
  }
}
