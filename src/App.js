import { Routes, Route } from 'react-router';
import { BestMovies } from './Components/BestMovies.js';
import './App.css';

const apiKey = '92744beada41e5a4bd0cc80048ae44df';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BestMovies apiKey={apiKey} />} />
      <Route path="tasks" element={<BestMovies />} />
      <Route path="about" element={<BestMovies />} />
    </Routes>
  );
}
