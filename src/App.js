import { Routes, Route } from 'react-router';
import { SearchResults } from './Components/SearchResults.js';
import { Search } from './Components/Search.js';
import { Searchbar } from './Components/Searchbar.js';
import { MovieDetails } from './Components/MovieDetails.js';
import './App.css';

const apiKey = '92744beada41e5a4bd0cc80048ae44df';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Searchbar />}>
        <Route path="/discover" element={<SearchResults apiKey={apiKey} />} />
        <Route path="search" element={<Search apiKey={apiKey} />} />
        <Route path="movie-details" element={<MovieDetails apiKey={apiKey} />}>
          <Route path=":movieId" element={1} />
        </Route>
      </Route>
    </Routes>
  );
}
