import { useState } from 'react';
import { Searchbar } from '../SearchBar/Searchbar';
import { PopularMovies } from '../PopularMovies/PopularMovies';
import { SearchResults } from '../SearchResults/SearchResults';
import { Loader } from '../Loader/Loader';
import './Browse.css';

export function Browse() {
  const [searchResults, setSearchResults] = useState([]);
  // console.log('searchResults', searchResults);
  const [baseFiveRating, setBaseFiveRating] = useState({ value: 5, disabled: true });
  // console.log('baseFiveRating', baseFiveRating);
  const [isFetchingData, setIsFetchingData] = useState(false);

  return (
    <>
      <Searchbar
        setSearchResults={setSearchResults}
        setBaseFiveRating={setBaseFiveRating}
        baseFiveRating={baseFiveRating}
        setIsFetchingData={setIsFetchingData}
      />
      {isFetchingData ? (
        <Loader />
      ) : searchResults ? (
        <SearchResults searchResults={searchResults} baseFiveRating={baseFiveRating} />
      ) : (
        <PopularMovies />
      )}
    </>
  );
}
