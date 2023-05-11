import Weather from "./components/Weather";
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Weather/>
    </div>
    </QueryClientProvider>
  );
}

export default App;
