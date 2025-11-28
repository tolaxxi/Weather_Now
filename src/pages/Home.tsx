import DailyForecast from '../components/DailyForecast';
import WeatherCard from '../components/WeatherCard';
import useWeather from '../hooks/useWeather';
import AtmosphereSection from '../sections/AtmosphereSection';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Error from './Error';

const Home = () => {
  useWeather();
  return (
    <div className="bg-neutral-900  w-full h-dvh gap-6 px-5 flex flex-col items-center overflow-auto">
      <Header />
      <Hero />
      <WeatherCard />
      <AtmosphereSection />
      <DailyForecast />
      {/* <Error /> */}
    </div>
  );
};
export default Home;
