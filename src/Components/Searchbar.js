import axios from 'axios';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';
import { apiKey } from '../App';
import './Searchbar.css';

export function Searchbar() {
  return (
    <>
      <Search />
      <Outlet />
    </>
  );
}

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  // console.log('searchTerm', searchTerm);

  const { data: { data: { results: returnedSearchResults } = {} } = {} } = useQuery(
    ['search by name', searchTerm],
    async () =>
      await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}`
      ),
    { enabled: !!searchTerm }
  );

  console.log('returnedSearchResults', returnedSearchResults);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
      <ul>
        {returnedSearchResults?.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
}
