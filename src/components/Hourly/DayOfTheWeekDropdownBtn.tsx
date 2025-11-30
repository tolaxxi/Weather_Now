import dropDown from '../../assets/images/icon-dropdown.svg';

const DayOfTheWeekDropdownBtn = () => {
  return (
    <div className="capitalize flex gap-2 w-fit items-center px-2 py-1 bg-neutral-700 rounded-sm">
      <p>Tuesday</p>
      <img src={dropDown} alt="dropdown icon" />
    </div>
  );
};
export default DayOfTheWeekDropdownBtn;
