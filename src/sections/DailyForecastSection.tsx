import DailyForecast from '../components/DailyForecast';
import DailyForecastLoadingState from '../components/DailyForecastLoadingState';
import useWeather from '../hooks/useWeather';

const DailyForecastSection = () => {
  const { dailyForecast, loading } = useWeather();
  const placeholderLength = 7;
  if (dailyForecast.length === 0) {
    return (
      <section className="grid grid-cols-3 gap-2  sm:flex">
        {Array.from({ length: placeholderLength }).map((_, index) => {
          return <DailyForecastLoadingState key={index} />;
        })}
      </section>
    );
  }
  return (
    <section className="grid  grid-cols-3 flex-3 gap-2 sm:flex">
      {loading
        ? Array.from({ length: placeholderLength }).map((_, index) => {
            return <DailyForecastLoadingState key={index} />;
          })
        : dailyForecast.map(({ date, MaxTemperature, minTemperature, weatherCode }) => {
            return (
              <DailyForecast
                temp={MaxTemperature}
                date={date}
                minTemp={minTemperature}
                weatherCode={weatherCode}
                key={date}
              />
            );
          })}
    </section>
  );
};
export default DailyForecastSection;
