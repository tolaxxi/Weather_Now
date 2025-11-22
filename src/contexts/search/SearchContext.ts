import { createContext } from 'react';

export interface searchContextType {
  query: string;
  setQuery: (newData: string) => void;
}
export const searchContext = createContext<searchContextType>({
  query: '',
  setQuery: () => {},
});
