import { useEffect } from 'react';

interface useWeatherPropTypes {
  longitude: string;
  latitude: string;
}
const useWeather = ({ longitude, latitude }: useWeatherPropTypes) => {
  useEffect(() => {}, [longitude, latitude]);

  return <div>useWeather</div>;
};
export default useWeather;
