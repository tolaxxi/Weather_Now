import { useEffect } from 'react';
import WeatherCard from '../components/WeatherCard';
import useSearch from '../contexts/search/useSearch';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import useGeolocation from '../hooks/useGeolocation';

const Home = () => {
  const { query } = useSearch();
  const { longitude, latitude } = useGeolocation(query);
  return (
    <div className="bg-neutral-900  w-full h-dvh gap-6 px-5 flex flex-col items-center overflow-auto">
      <Header />
      {longitude}
      <Hero />
      <WeatherCard />
    </div>
  );
};
export default Home;
