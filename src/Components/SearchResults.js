import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SearchResults.css';

export function SearchResults({ apiKey }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => getMovies(setMovieList, apiKey), [apiKey]);
  // console.log('movieList', movieList);

  return (
    <div>
      <h3>🔥Popular Movies</h3>
      <div className="container">
        {movieList?.slice(0, 9).map(movie => (
          <Link to={`../movie-details/${movie.id}`} className="best-movies-list" key={movie.id}>
            <img alt={movie.title} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          </Link>
        ))}
      </div>
    </div>
  );
}

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
