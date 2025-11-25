import { useEffect, useState } from 'react';
import { GeocodeSearch } from '../api/geocodingApi';

const useGeolocation = (query: string) => {
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  useEffect(() => {
    async function fetchGeolocation() {
      if (query) {
        const geoLocation = await GeocodeSearch({ query });
        setLongitude(geoLocation.results[0].longitude);
        setLatitude(geoLocation.results[0].latitude);
      }
    }
    fetchGeolocation();
  }, [query]);

  return { longitude, latitude };
};
export default useGeolocation;
