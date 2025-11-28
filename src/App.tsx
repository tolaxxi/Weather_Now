import SearchContextProvider from './contexts/search/SearchContextProvider';
import UnitContextProvider from './contexts/unit/UnitContextProvider';
import Home from './pages/Home';

const App = () => {
  return (
    <SearchContextProvider>
      <UnitContextProvider>
        <Home />
      </UnitContextProvider>
    </SearchContextProvider>
  );
};
export default App;
