import { useState } from 'react';
import { Searchbar } from './Searchbar';
import { PopularMovies } from './PopularMovies';
import { SearchResults } from './SearchResults';

export function Browse() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <>
      <Searchbar setSearchResults={setSearchResults} />
      {searchResults ? <SearchResults searchResults={searchResults} /> : <PopularMovies />}
    </>
  );
}
