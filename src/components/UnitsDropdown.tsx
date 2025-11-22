import dropDown from '../assets/images/icon-dropdown.svg';
import unitsIcon from '../assets/images/icon-units.svg';

const UnitsDropdown = () => {
  return (
    <span className=" text-white font-Bricolage-Grotesque flex items-center justify-center  gap-2  text-sm px-2 py-2 rounded-md bg-neutral-800 cursor-pointer">
      <img src={unitsIcon} alt="unit menu icon" />
      <p>Units</p>
      <img src={dropDown} alt="dropdown icon" />
    </span>
  );
};
export default UnitsDropdown;
