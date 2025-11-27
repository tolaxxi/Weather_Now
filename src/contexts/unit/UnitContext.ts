import { createContext, type Dispatch, type SetStateAction } from 'react';

interface UnitContextType {
  unit: string;
  setUnit: Dispatch<SetStateAction<string>>;
  precipitation_unit: string;
  setPrecipitation_unit: Dispatch<SetStateAction<string>>;
  wind_speed_unit: string;
  setWind_speed_unit: Dispatch<SetStateAction<string>>;
}
export const UnitContext = createContext<UnitContextType>({
  unit: '',
  setUnit: () => {},
  precipitation_unit: '',
  setPrecipitation_unit: () => {},
  wind_speed_unit: '',
  setWind_speed_unit: () => {},
});
