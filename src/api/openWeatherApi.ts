const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

interface weatherParameters {
  longitude: number;
  latitude: number;
  unit: 'celsius' | 'fahrenheit';
}
export async function fetchWeatherData({ longitude, latitude, unit }: weatherParameters) {
  try {
    const res = await fetch(
      `${BASE_URL}?longitude=${longitude}&latitude=${latitude}&timezone=auto&temperature_unit=${unit}&hourly=temperature_2m,wind_speed_10m`
    );
    if (!res.ok) throw new Error('unable to fetch weather data. something went wrong');
    const data = await res.json();
    return data;
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error('unknown error');
  }
}
