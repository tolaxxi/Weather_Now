import { useEffect, useState } from 'react';
import { GeocodeSearch } from '../api/geocodingApi';

const useGeolocation = (query: string) => {
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    async function fetchGeolocation() {
      if (query) {
        const geoLocation = await GeocodeSearch({ query });
        setLongitude(geoLocation.results[0].longitude);
        setLatitude(geoLocation.results[0].latitude);
        setCountry(geoLocation.results[0].country);
        setCity(geoLocation.results[0].name);
      }
    }
    fetchGeolocation();
  }, [query]);

  return { longitude, latitude, city, country };
};
export default useGeolocation;
