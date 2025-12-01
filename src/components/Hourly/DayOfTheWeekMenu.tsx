interface Props {
  setSelectedDay: (day: string) => void;
  selectedDay: string | null;
}

const DayOfTheWeekMenu = ({ setSelectedDay, selectedDay }: Props) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="bg-neutral-800 absolute right-[0.5px] top-18 flex flex-col items-start p-2 w-40 rounded-lg border border-neutral-600 font-DM-sans text-neutral-0 font-medium">
      {days.map((day) => (
        <button
          key={day}
          className={`dayOfTheWeek-menu-btn ${selectedDay === day ? 'dropdown-menu-active' : ''}`}
          onClick={() => setSelectedDay(day)}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default DayOfTheWeekMenu;
