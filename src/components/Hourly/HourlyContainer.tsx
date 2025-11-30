import DayOfTheWeekDropdownBtn from './DayOfTheWeekDropdownBtn';
import HourlyCard from './HourlyCard';

const HourlyContainer = () => {
  return (
    <div className="bg-neutral-800 rounded-lg w-full text-neutral-0 font-DM-sans px-5 pb-5 flex relative flex-col overflow-auto max-h-[500px] gap-3">
      <div className="flex items-center gap-10 sticky top-0 bg-inherit right-0 left-0 pt-5 pb-3 justify-between">
        <h2>Hourly Forecast</h2>
        <DayOfTheWeekDropdownBtn />
      </div>
      <div className="flex flex-col gap-2.5 ">
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
      </div>
    </div>
  );
};
export default HourlyContainer;
