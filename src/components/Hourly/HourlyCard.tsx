import { getWeatherIcon } from '../../utils/WeatherIcon';

interface HourlyCardPropsTypes {
  weatherCode: string;
  time: string;
  temp: string;
}
const HourlyCard = ({ weatherCode, time, temp }: HourlyCardPropsTypes) => {
  const hour = new Date(time).getHours();

  // check if time is 0 and turns it to 12
  const hour24 = hour % 12 || 12;
  // check if the hour is greater or less than 12 then assign AM / Pm accordingly
  const period = hour < 12 ? 'AM' : 'PM';

  const roundedTemp = Math.floor(Number(temp));
  return (
    <div className="bg-neutral-700 w-full flex items-center border border-neutral-600 text-neutral-0 py-1 bor px-2 font-DM-sans justify-between rounded-lg">
      <span className="flex items-center gap-2 justify-center ">
        <img src={getWeatherIcon(weatherCode)} alt="weather image" className="w-10" />
        <h2>
          {hour24} {period}
        </h2>
      </span>
      <p>{roundedTemp}&deg;</p>
    </div>
  );
};
export default HourlyCard;
