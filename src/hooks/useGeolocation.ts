import { useEffect, useState } from 'react';
import { GeocodeSearch } from '../api/geocodingApi';

const useGeolocation = (query: string) => {
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [searchFound, setSearchFound] = useState<boolean | null>(null);

  useEffect(() => {
    async function fetchGeolocation() {
      if (query) {
        try {
          const geoLocation = await GeocodeSearch({ query });

          if (geoLocation.results && geoLocation.results.length > 0) {
            const results = geoLocation.results[0];
            setLongitude(results.longitude);
            setLatitude(results.latitude);
            setCountry(results.country);
            setCity(results.name);
            setSearchFound(true);
          } else {
            setSearchFound(false);
            setLongitude('');
            setLatitude('');
            setCountry('');
            setCity('');
          }
        } catch {
          //
        }
      }
    }
    fetchGeolocation();
  }, [query]);

  return { longitude, latitude, city, country, searchFound };
};
export default useGeolocation;
