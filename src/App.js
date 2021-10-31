import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import { Browse } from './Components/Browse/Browse';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Browse />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
