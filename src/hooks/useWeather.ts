import { useEffect, useState } from 'react';
import { fetchWeatherData } from '../api/openWeatherApi';
import useGeolocation from './useGeolocation';
import useSearch from '../contexts/search/useSearch';
import useUnitContextProvider from '../contexts/unit/useUnitContextProvider';

type HourlyData = {
  time: string;
  temperature: string;
  weatherCode: string;
};

const useWeather = () => {
  const { query } = useSearch();
  const { longitude, latitude, searchFound, geoLoading } = useGeolocation(query);

  const [time, setTime] = useState('');
  const [currentTemp, setCurrentTemp] = useState('');
  const [currentHumidity, setCurrentHumidity] = useState('');
  const [currentPrecipitation, setCurrentPrecipitation] = useState('');
  const [currentWindSpeed, setCurrentWindSpeed] = useState('');
  const [dailyForecast, setDailyForecast] = useState([]);
  const [hourlyForecast, setHourlyForeCast] = useState<HourlyData[]>([]);
  const [currentWeatherCode, setCurrentWeatherCode] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { unit, precipitation_unit, wind_speed_unit, humidity_unit, setHumidity_unit } = useUnitContextProvider();

  useEffect(() => {
    async function getWeatherData() {
      if (longitude && latitude) {
        setLoading(true);
        setError(null);
        try {
          const weather = await fetchWeatherData({ longitude, latitude, unit, precipitation_unit, wind_speed_unit });

          // current day weather data
          setTime(weather.current.time);
          setCurrentTemp(weather.current.temperature_2m);
          setCurrentWeatherCode(weather.current.weather_code);
          setHumidity_unit(weather.current_units.relative_humidity_2m);
          setCurrentHumidity(weather.current.relative_humidity_2m);
          setCurrentWindSpeed(weather.current.wind_speed_10m);
          setCurrentPrecipitation(weather.current.precipitation);

          // daily weather forecast
          const daily = weather.daily;
          const mappedDailyForecast = daily.time.map((date: string, index: number) => ({
            date,
            MaxTemperature: daily.temperature_2m_max[index],
            minTemperature: daily.temperature_2m_min[index],
            weatherCode: daily.weather_code[index],
          }));

          setDailyForecast(mappedDailyForecast);

          console.log(weather.daily);
          console.log(weather);

          // hourly forecast data

          const hourly = weather.hourly;

          const mappedHourlyData = hourly.time.map((time: string, index: number) => ({
            time,
            weatherCode: hourly.weather_code[index],
            temperature: hourly.temperature_2m[index],
          }));
          setHourlyForeCast(mappedHourlyData);
        } catch (err) {
          if (err instanceof Error) setError(err.message || 'Something went wrong');
        } finally {
          setLoading(false);
        }
      }
    }

    getWeatherData();
  }, [longitude, latitude, unit, precipitation_unit, wind_speed_unit]);

  return {
    time,
    currentTemp,
    currentWeatherCode,
    loading,
    currentHumidity,
    humidity_unit,
    currentWindSpeed,
    currentPrecipitation,
    dailyForecast,
    hourlyForecast,
    error,
    searchFound,
    geoLoading,
  };
};
export default useWeather;
