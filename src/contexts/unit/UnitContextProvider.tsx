import { useState, type ReactNode } from 'react';
import { UnitContext } from './UnitContext';

interface UnitContextProviderPropTypes {
  children: ReactNode;
}

const UnitContextProvider = ({ children }: UnitContextProviderPropTypes) => {
  // space here

  const [isImperial, setIsImperial] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const [isKmh, setIsKmh] = useState(true);
  const [isMph, setIsMph] = useState(false);
  const [isMm, setIsMm] = useState(true);
  const [isInch, setIsInch] = useState(false);

  const [unit, setUnit] = useState<'celsius' | 'fahrenheit'>('celsius');
  const [wind_speed_unit, setWind_speed_unit] = useState<'mph' | 'kmh'>('kmh');
  const [precipitation_unit, setPrecipitation_unit] = useState<'mm' | 'inch'>('mm');
  const [humidity_unit, setHumidity_unit] = useState('');

  const value = {
    isImperial,
    isCelsius,
    isFahrenheit,
    isKmh,
    isMph,
    isMm,
    isInch,

    setIsImperial,
    setIsCelsius,
    setIsFahrenheit,
    setIsKmh,
    setIsMph,
    setIsMm,
    setIsInch,

    unit,
    wind_speed_unit,
    precipitation_unit,
    humidity_unit,

    setUnit,
    setWind_speed_unit,
    setPrecipitation_unit,
    setHumidity_unit,
  };
  return <UnitContext.Provider value={value}>{children}</UnitContext.Provider>;
};
export default UnitContextProvider;
