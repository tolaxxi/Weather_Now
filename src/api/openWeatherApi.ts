const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

interface weatherParameters {
  longitude: string;
  latitude: string;
  unit: 'celsius' | 'fahrenheit';
  precipitation_unit: 'mm' | 'inch';
  wind_speed_unit: 'mph' | 'kmh';
}
export async function fetchWeatherData({
  longitude,
  latitude,
  unit = 'celsius',
  precipitation_unit = 'mm',
  wind_speed_unit = 'kmh',
}: weatherParameters) {
  try {
    const res = await fetch(
      `${BASE_URL}?latitude=${Number(latitude)}&longitude=${Number(
        longitude
      )}&daily=weather_code,temperature_2m_min,temperature_2m_max&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,weather_code&wind_speed_unit=${wind_speed_unit}&temperature_unit=${unit}&precipitation_unit=${precipitation_unit}`
    );
    if (!res.ok) throw new Error('unable to fetch weather data. something went wrong');
    const data = await res.json();
    return data;
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error('unknown error');
  }
}


