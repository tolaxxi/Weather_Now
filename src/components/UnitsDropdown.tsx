import { useEffect, useRef, useState } from 'react';
import dropDown from '../assets/images/icon-dropdown.svg';
import unitsIcon from '../assets/images/icon-units.svg';
import UnitDropdownMenu from './UnitDropdownMenu';

const UnitsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <span
        className=" text-white font-Bricolage-Grotesque flex items-center justify-center  gap-2  text-sm px-2 py-2 rounded-md bg-neutral-800 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={unitsIcon} alt="unit menu icon" />
        <p>Units</p>
        <img src={dropDown} alt="dropdown icon" />
      </span>

      {isOpen && (
        <div className="absolute top-15 right-0">
          <UnitDropdownMenu />
        </div>
      )}
    </div>
  );
};
export default UnitsDropdown;
