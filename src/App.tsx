import SearchContextProvider from './contexts/search/SearchContextProvider';
import Home from './pages/Home';

const App = () => {
  return (
    <SearchContextProvider>
      <Home />
    </SearchContextProvider>
  );
};
export default App;
