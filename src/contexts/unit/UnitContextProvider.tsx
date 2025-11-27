import { useState, type ReactNode } from 'react';
import { UnitContext } from './UnitContext';

interface UnitContextProviderPropTypes {
  children: ReactNode;
}

const UnitContextProvider = ({ children }: UnitContextProviderPropTypes) => {
  // space here
  const [unit, setUnit] = useState('');
  const [precipitation_unit, setPrecipitation_unit] = useState('');
  const [wind_speed_unit, setWind_speed_unit] = useState('');

  const value = {
    unit,
    setUnit,
    setPrecipitation_unit,
    precipitation_unit,
    setWind_speed_unit,
    wind_speed_unit,
  };
  return <UnitContext.Provider value={value}>{children}</UnitContext.Provider>;
};
export default UnitContextProvider;
