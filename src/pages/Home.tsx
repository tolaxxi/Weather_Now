import { useEffect, useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import useSearch from '../contexts/search/useSearch';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import { GeocodeSearch } from '../api/geocodingApi';

const Home = () => {
  const { query } = useSearch();
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  useEffect(() => {
    if (query) {
      async function fetchGeoLocation() {
        try {
          const geoLocation = await GeocodeSearch({ query });
          if (!geoLocation) throw new Error('unable to find geolocation');
          const lat = geoLocation.results[0].latitude;
          const long = geoLocation.results[0].longitude;

          setLatitude(lat);
          setLongitude(long);
        } catch (err) {
          if (err instanceof Error) throw new Error(err.message);
          throw new Error('an unknown Error occurred ');
        }
      }
      fetchGeoLocation();
    }

    return;
  }, [query]);
  console.log(latitude, longitude);
  return (
    <div className="bg-neutral-900  w-full h-dvh gap-6 px-5 flex flex-col items-center overflow-auto">
      <Header />
      <Hero />
      <WeatherCard />
    </div>
  );
};
export default Home;
