import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { apiKey } from '../Assets/apiKey';
import './Searchbar.css';

export function Searchbar({ setSearchResults }) {
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

  // console.log('returnedSearchResults', returnedSearchResults);
  useEffect(
    () => setSearchResults(returnedSearchResults),
    [returnedSearchResults, setSearchResults]
  );

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />;
}
