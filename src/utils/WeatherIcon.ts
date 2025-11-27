import sunnyIcon from '../assets/images/icon-sunny.webp';
import partlyCloudyIcon from '../assets/images/icon-partly-cloudy.webp';
import overcastIcon from '../assets/images/icon-overcast.webp';

import fogIcon from '../assets/images/icon-fog.webp';

import drizzleIcon from '../assets/images/icon-drizzle.webp';

import rainIcon from '../assets/images/icon-rain.webp';

import snowIcon from '../assets/images/icon-snow.webp';

import stormIcon from '../assets/images/icon-storm.webp';

export const weatherIcon: Record<number, string> = {
  // Clear / Sunny
  0: sunnyIcon,
  1: partlyCloudyIcon,
  2: partlyCloudyIcon,
  3: overcastIcon,

  // Fog
  45: fogIcon,
  48: fogIcon,

  // Drizzle
  51: drizzleIcon,
  53: drizzleIcon,
  55: drizzleIcon,

  // Freezing Drizzle
  56: drizzleIcon,
  57: drizzleIcon,

  // Rain
  61: rainIcon,
  63: rainIcon,
  65: rainIcon,

  // Freezing Rain
  66: rainIcon,
  67: rainIcon,

  // Snow
  71: snowIcon,
  73: snowIcon,
  75: snowIcon,

  // Snow Grains
  77: snowIcon,

  // Rain + Snow
  80: rainIcon,
  81: rainIcon,
  82: rainIcon,

  // Snow Showers
  85: snowIcon,
  86: snowIcon,

  // Thunderstorms
  95: stormIcon,
  96: stormIcon,
  99: stormIcon,
};

export function getWeatherIcon(weatherCode: string): string {
  return weatherIcon[Number(weatherCode)];
}
