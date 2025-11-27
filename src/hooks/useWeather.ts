import { useEffect, useState } from 'react';
import { fetchWeatherData } from '../api/openWeatherApi';
import useGeolocation from './useGeolocation';
import useSearch from '../contexts/search/useSearch';

const useWeather = () => {
  const { query } = useSearch();
  const { longitude, latitude } = useGeolocation(query);

  const [time, setTime] = useState('');
  const [currentTemp, setCurrentTemp] = useState('');
  const [currentWeatherCode, setCurrentWeatherCode] = useState(null);

  const [loading, setLoading] = useState(false);

  const unit = 'celsius';
  const precipitation_unit = 'inch';
  const wind_speed_unit = 'kmh';

  useEffect(() => {
    async function getWeatherData() {
      if (longitude && latitude) {
        setLoading(true);
        try {
          const weather = await fetchWeatherData({ longitude, latitude, unit, precipitation_unit, wind_speed_unit });
          setTime(weather.current.time);
          setCurrentTemp(weather.current.temperature_2m);
          setCurrentWeatherCode(weather.current.weather_code);
          console.log(weather);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    }

    getWeatherData();
  }, [longitude, latitude]);

  return { time, currentTemp, currentWeatherCode, loading };
};
export default useWeather;
