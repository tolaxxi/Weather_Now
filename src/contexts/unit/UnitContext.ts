import { createContext, type Dispatch, type SetStateAction } from 'react';

interface UnitContextType {
  isImperial: boolean;
  isCelsius: boolean;
  isFahrenheit: boolean;
  isKmh: boolean;
  isMph: boolean;
  isMm: boolean;
  isInch: boolean;

  setIsImperial: Dispatch<SetStateAction<boolean>>;
  setIsCelsius: Dispatch<SetStateAction<boolean>>;
  setIsFahrenheit: Dispatch<SetStateAction<boolean>>;
  setIsKmh: Dispatch<SetStateAction<boolean>>;
  setIsMph: Dispatch<SetStateAction<boolean>>;
  setIsMm: Dispatch<SetStateAction<boolean>>;
  setIsInch: Dispatch<SetStateAction<boolean>>;

  unit: 'celsius' | 'fahrenheit';
  wind_speed_unit: 'mph' | 'kmh';
  precipitation_unit: 'mm' | 'inch';
  humidity_unit: string;

  setUnit: Dispatch<SetStateAction<'celsius' | 'fahrenheit'>>;
  setWind_speed_unit: Dispatch<SetStateAction<'mph' | 'kmh'>>;
  setPrecipitation_unit: Dispatch<SetStateAction<'mm' | 'inch'>>;
  setHumidity_unit: Dispatch<SetStateAction<string>>;
}
export const UnitContext = createContext<UnitContextType>({
  isImperial: false,
  isCelsius: false,
  isFahrenheit: false,
  isKmh: false,
  isMph: false,
  isMm: false,
  isInch: false,

  setIsCelsius: () => {},
  setIsImperial: () => {},
  setIsFahrenheit: () => {},
  setIsKmh: () => {},
  setIsMph: () => {},
  setIsMm: () => {},
  setIsInch: () => {},

  unit: 'celsius',
  wind_speed_unit: 'kmh',
  precipitation_unit: 'mm',
  humidity_unit: '',

  setUnit: () => {},
  setWind_speed_unit: () => {},
  setPrecipitation_unit: () => {},
  setHumidity_unit: () => {},
});
