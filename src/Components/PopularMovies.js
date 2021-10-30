import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiKey } from '../App';
import './PopularMovies.css';
import { MovieGrid } from './MovieGrid';

export function PopularMovies({ SearchResults }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => getMovies(setMovieList), []);
  // console.log('movieList', movieList);

  return (
    <div>
      <h3>🔥Popular Movies</h3>
      <MovieGrid movies={movieList} />
    </div>
  );
}

async function getMovies(setMovieList) {
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
