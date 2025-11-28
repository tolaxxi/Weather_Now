import { useContext } from 'react';
import { UnitContext } from './UnitContext';

const useUnitContextProvider = () => {
  const context = useContext(UnitContext);

  if (context === undefined) throw new Error('useSearch must be used within a searchContextProvider');

  return context;
};
export default useUnitContextProvider;
