import { useEffect, useState } from 'react';

interface useWeatherPropTypes {
  longitude: string;
  latitude: string;
}
const useWeather = ({ longitude, latitude }: useWeatherPropTypes) => {
  const [time, setTime] = useState('');

  useEffect(() => {}, [longitude, latitude]);

  return { time };
};
export default useWeather;
