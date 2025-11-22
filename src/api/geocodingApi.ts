interface GeocodeSearchParams {
  name: string;
}

const BASE_URL = 'https://geocoding-api.open-meteo.com/v1/search ';

export async function GeocodeSearch({ name }: GeocodeSearchParams) {
  try {
    const response = await fetch(`${BASE_URL}?name=${name}&count=1&language=en&format=json`);
    if (!response.ok) throw new Error('unable to fetch geolocation something went wrong');
    const data = await response.json();
    return data;
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error('unknown error');
  }
}
