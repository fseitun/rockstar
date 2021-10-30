import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Rate from 'rc-rate';
import { apiKey } from '../Assets/apiKey';
import './Searchbar.css';
import '../../../node_modules/rc-rate/assets/index.css';

export function Searchbar({
  setSearchResults,
  setBaseFiveRating,
  baseFiveRating,
  setIsFetchingData,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  // console.log('searchTerm', searchTerm);

  const { data: { data: { results: returnedSearchResults } = {} } = {}, isLoading } = useQuery(
    ['search by name', searchTerm],
    async () =>
      await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&include_adult=false`
      ),
    { enabled: !!searchTerm }
  );
  // console.log('returnedSearchResults', returnedSearchResults);

  useEffect(
    () => setSearchResults(returnedSearchResults),
    [returnedSearchResults, setSearchResults]
  );

  useEffect(() => setIsFetchingData(isLoading), [isLoading, setIsFetchingData]);

  return (
    <nav>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <Rate
        className="stars"
        value={baseFiveRating.disabled ? 0 : baseFiveRating.value}
        onChange={value =>
          setBaseFiveRating(prev => {
            if (prev.value === value) {
              return { value: value, disabled: true };
            } else {
              return { value: value, disabled: false };
            }
          })
        }
        disabled={baseFiveRating.disabled}
        allowClear={false}
      />
      {baseFiveRating.disabled ? (
        <button
          onClick={() => {
            setBaseFiveRating(prev => ({ ...prev, disabled: false }));
          }}
        >
          Enable Rating
        </button>
      ) : null}
    </nav>
  );
}
