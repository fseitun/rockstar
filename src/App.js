import { Routes, Route, Navigate } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { MovieDetails } from './Components/MovieDetails.js';
import './App.css';
import { Browse } from './Components/Browse.js';

const queryClient = new QueryClient();

export const apiKey = '92744beada41e5a4bd0cc80048ae44df'; //the sensible thing to do is to hide away the api key in a .env file, but since I want other people to be able to use this app, I'll leave it here (else i should have to provide a .env file to anyone who wants to use this app).

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Navigate to="/browse" />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/movie-details" element={<MovieDetails />}>
          <Route path=":movieId" element={1} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
