import { getWeatherIcon } from '../utils/WeatherIcon';

interface DailyForeCastPropTypes {
  temp: string;
  date: string;
  weatherCode: string;
  minTemp: string;
}
const DailyForecast = ({ temp, date, minTemp, weatherCode }: DailyForeCastPropTypes) => {
  const day = new Date(date);
  const roundedMaxTemp = Math.floor(Number(temp));
  const roundedMinTemp = Math.floor(Number(minTemp));

  const formattedDate = day.toLocaleDateString('en-US', {
    weekday: 'short',
  });

  return (
    <div className=" flex flex-col items-center gap-1 p-2 w-[95px] xs:w-[105px]  sm:w-20 md:w-[95px]  rounded-xl text-neutral-0 bg-neutral-800 font-DM-sans font-medium border border-neutral-600">
      <h3 className=" font-medium">{date && formattedDate}</h3>
      <img src={getWeatherIcon(weatherCode)} alt="Weather_icon" className="w-10" />
      <span className="flex gap-5">
        <p>{roundedMaxTemp}&deg;</p>
        <p className="text-neutral-400">{roundedMinTemp}&deg;</p>
      </span>
    </div>
  );
};
export default DailyForecast;
