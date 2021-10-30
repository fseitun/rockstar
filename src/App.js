import { Routes, Route, Navigate } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { MovieDetails } from './Components/MovieDetails/MovieDetails';
import './App.css';
import { Browse } from './Components/Browse/Browse';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Navigate to="/browse" />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/movie-details" element={<MovieDetails />}>
          <Route path=":movieId" element={1} />
        </Route>
        <Route path="*" element={<Navigate to="/browse" />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
