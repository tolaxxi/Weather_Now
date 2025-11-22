import { useState, type ReactNode } from 'react';
import { searchContext } from './SearchContext';

export interface SearchContextProviderProps {
  children: ReactNode;
}

const SearchContextProvider = ({ children }: SearchContextProviderProps) => {
  // states
  const [query, setQuery] = useState('');

  const value = {
    query,
    setQuery,
  };

  return <searchContext.Provider value={value}>{children}</searchContext.Provider>;
};
export default SearchContextProvider;
