import { useEffect, useState } from 'react';
import { fetchWeatherData } from '../api/openWeatherApi';
import useGeolocation from './useGeolocation';
import useSearch from '../contexts/search/useSearch';
import useUnitContextProvider from '../contexts/unit/useUnitContextProvider';

const useWeather = () => {
  const { query } = useSearch();
  const { longitude, latitude } = useGeolocation(query);

  const [time, setTime] = useState('');
  const [currentTemp, setCurrentTemp] = useState('');
  const [currentHumidity, setCurrentHumidity] = useState('');
  const [currentPrecipitation, setCurrentPrecipitation] = useState('');
  const [currentWindSpeed, setCurrentWindSpeed] = useState('');
  const [currentWeatherCode, setCurrentWeatherCode] = useState(null);

  const [loading, setLoading] = useState(false);
  const { unit, precipitation_unit, wind_speed_unit, humidity_unit, setHumidity_unit } = useUnitContextProvider();

  useEffect(() => {
    async function getWeatherData() {
      if (longitude && latitude) {
        setLoading(true);
        try {
          const weather = await fetchWeatherData({ longitude, latitude, unit, precipitation_unit, wind_speed_unit });
          setTime(weather.current.time);
          setCurrentTemp(weather.current.temperature_2m);
          setCurrentWeatherCode(weather.current.weather_code);
          setHumidity_unit(weather.current_units.relative_humidity_2m);
          setCurrentHumidity(weather.current.relative_humidity_2m);
          setCurrentWindSpeed(weather.current.wind_speed_10m);
          setCurrentPrecipitation(weather.current.precipitation);
          console.log(weather);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    }

    getWeatherData();
  }, [longitude, latitude, unit, precipitation_unit, wind_speed_unit, setHumidity_unit]);

  return {
    time,
    currentTemp,
    currentWeatherCode,
    loading,
    currentHumidity,
    humidity_unit,
    currentWindSpeed,
    currentPrecipitation,
  };
};
export default useWeather;
