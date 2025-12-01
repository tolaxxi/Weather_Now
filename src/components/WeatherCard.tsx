import useGeolocation from '../hooks/useGeolocation';
import useSearch from '../contexts/search/useSearch';
import useWeather from '../hooks/useWeather';
import { getWeatherIcon } from '../utils/WeatherIcon';

const WeatherCard = () => {
  const { query } = useSearch();
  const { city, country, longitude, latitude } = useGeolocation(query);
  const { time, currentTemp, currentWeatherCode, loading } = useWeather();

  const date = new Date(time);

  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <section
      className={`min-h-60 overflow-hidden w-full md:w-[710px] bg-center bg-cover  font-DM-sans text-neutral-0 rounded-xl ${
        longitude && latitude
          ? loading
            ? 'bg-neutral-800'
            : "bg-[url('/bg/bg-today-small.svg')] xs:bg-[url('/bg/bg-today-large.svg')] "
          : 'bg-neutral-800'
      }
     bg-no-repeat  flex items-center`}
    >
      {longitude && latitude ? (
        loading ? (
          <div className="w-full flex flex-col gap-2 justify-center items-center">
            <div className="loader"></div>
            <p>loading...</p>
          </div>
        ) : (
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
        )
      ) : (
        <div className="w-full flex justify-center items-center text-3xl">--</div>
      )}
    </section>
  );
};
export default WeatherCard;
