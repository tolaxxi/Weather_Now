import useGeolocation from '../hooks/useGeolocation';
import useSearch from '../contexts/search/useSearch';
import useWeather from '../hooks/useWeather';
import { getWeatherIcon } from '../utils/WeatherIcon';

const WeatherCard = () => {
  const { query } = useSearch();
  const { city, country } = useGeolocation(query);
  const { time, currentTemp, currentWeatherCode } = useWeather();

  const date = new Date(time);

  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <section
      className="min-h-60 overflow-hidden w-full max-w-70 bg-center bg-cover xxs:max-w-[650px] font-DM-sans text-neutral-0 rounded-xl bg-[url('/bg/bg-today-small.svg')]
    xs:bg-[url('/bg/bg-today-large.svg')] bg-no-repeat  flex items-centers"
    >
      <div className=" flex flex-col sm:flex-row items-center justify-center gap-5 w-full font-DM-sans sm:px-10 text-center">
        <div className="">
          {city && (
            <h2 className="capitalize font-medium text-2xl">
              {city}, {country}
            </h2>
          )}
          <p className="capitalize font-light text-sm">{time && formattedDate}</p>
        </div>
        <div className="text-7xl lg:text-8xl font-DM-sans  italic flex font-medium  items-center">
          {currentWeatherCode !== null && <img src={getWeatherIcon(currentWeatherCode)} className="w-25 sm:w-35" />}
          {currentTemp && <p>{Math.floor(Number(currentTemp))}&deg;</p>}
        </div>
      </div>
    </section>
  );
};
export default WeatherCard;
