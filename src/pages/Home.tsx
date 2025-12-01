import HourlyContainer from '../components/Hourly/HourlyContainer';
import WeatherCard from '../components/WeatherCard';
import useWeather from '../hooks/useWeather';
import AtmosphereSection from '../sections/AtmosphereSection';
import DailyForecastSection from '../sections/DailyForecastSection';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
// import Error from './Error';

const Home = () => {
  useWeather();
  return (
    <div className="bg-neutral-900  w-full h-dvh gap-6 flex flex-col pb-20  items-center overflow-auto">
      <Header />
      <Hero />
      <div className="flex gap-6 lg:flex-row flex-col px-2">
        <span className="flex flex-col gap-5 items-center w-full">
          <WeatherCard />
          <AtmosphereSection />
          <DailyForecastSection />
        </span>
        <HourlyContainer />
      </div>
      {/* <Error /> */}
    </div>
  );
};
export default Home;
