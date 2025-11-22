import WeatherCard from '../components/WeatherCard';
import Header from '../sections/Header';
import Hero from '../sections/Hero';

const Home = () => {
  return (
    <div className="bg-neutral-900 w-full h-dvh gap-6 px-5 flex flex-col items-center ">
      <Header />
      <Hero />
      <WeatherCard />
    </div>
  );
};
export default Home;
