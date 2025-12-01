import { useEffect, useRef, useState } from 'react';
import dropDown from '../../assets/images/icon-dropdown.svg';
import DayOfTheWeekMenu from './DayOfTheWeekMenu';

interface Props {
  selectedDay: string | null;
  setSelectedDay: (day: string) => void;
}
const DayOfTheWeekDropdownBtn = ({ selectedDay, setSelectedDay }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div ref={menuRef}>
      <div
        className="capitalize relative flex gap-2 justify-center text-sm items-center px-5 py-1  bg-neutral-700 rounded-sm"
        onClick={handleToggle}
      >
        <p>{selectedDay || 'Select Day'}</p>
        <img src={dropDown} alt="dropdown icon" />
      </div>
      {isOpen && (
        <DayOfTheWeekMenu
          selectedDay={selectedDay}
          setSelectedDay={(day: string) => {
            setSelectedDay(day); // update parent state
            setIsOpen(false); // close the dropdown
          }}
        />
      )}
    </div>
  );
};
export default DayOfTheWeekDropdownBtn;
