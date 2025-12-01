import { useState } from 'react';
import useWeather from '../../hooks/useWeather';
import DayOfTheWeekDropdownBtn from './DayOfTheWeekDropdownBtn';
import HourlyCard from './HourlyCard';
import HourlyCardLoadingState from './HourlyCardLoadingState';

const HourlyContainer = () => {
  const { hourlyForecast, loading } = useWeather();
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const placeHolderAmount = 24;

  // Convert timestamp to day string
  const getDayName = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { weekday: 'long' }); // "Monday", "Tuesday", etc.
  };

  const filteredHours = hourlyForecast.filter(({ time }) => (selectedDay ? getDayName(time) === selectedDay : true));

  return (
    <div className="bg-neutral-800 rounded-lg w-full text-neutral-0 font-DM-sans px-4.5 pb-5 flex relative  flex-col  overflow-auto max-h-[545px] gap-3">
      <div className="flex items-center gap-10 sticky top-0 bg-inherit right-0 left-0 pt-5 pb-3 justify-between w-full ">
        <h2>Hourly Forecast</h2>
        <DayOfTheWeekDropdownBtn selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      </div>
      {loading || hourlyForecast.length === 0 ? (
        // checks if it is loading or the forecast is empty and renders a loading ui
        Array.from({ length: placeHolderAmount }).map((_, index) => {
          return <HourlyCardLoadingState key={index} />;
        })
      ) : (
        <div className="flex flex-col gap-2.5 ">
          {filteredHours.map(({ weatherCode, time, temperature }) => {
            return <HourlyCard key={time} weatherCode={weatherCode} time={time} temp={temperature} />;
          })}
        </div>
      )}
    </div>
  );
};
export default HourlyContainer;
