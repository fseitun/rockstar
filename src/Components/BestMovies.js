import { useState, useEffect } from 'react';
import axios from 'axios';
import './BestMovies.css';

async function getMovies(setMovieList, apiKey) {
  try {
    const queriedMovies = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
    setMovieList(queriedMovies.data.results);
    return queriedMovies.data.results;
  } catch (error) {
    console.error("Ooops, somthing didn't go as expected: ", error);
  }
}

export function BestMovies({ apiKey }) {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => getMovies(setMovieList, apiKey), []);
  console.log('movieList', movieList);

  return (
    <>
      <h3>🔥Popular Movies</h3>
      <div className="container">
        {movieList?.slice(0, 9).map(movie => (
          <img
            key={movie.id}
            className="best-movies-list"
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </div>
    </>
  );
}
