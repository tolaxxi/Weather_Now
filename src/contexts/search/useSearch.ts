import { useContext } from 'react';
import { searchContext } from './SearchContext';

const useSearch = () => {
  const context = useContext(searchContext);

  if (context === undefined) throw new Error('useSearch must be used within a searchContextProvider');

  return context;
};
export default useSearch;
