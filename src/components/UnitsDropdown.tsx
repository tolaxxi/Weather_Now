import dropDown from '../assets/images/icon-dropdown.svg';
import unitsIcon from '../assets/images/icon-units.svg';

const UnitsDropdown = () => {
  return (
    <span className=" text-white font-Bricolage-Grotesque flex items-center  gap-2 px-3 py-1.5 rounded-md bg-neutral-700">
      <img src={unitsIcon} alt="unit menu icon" />
      <p>Units</p>
      <img src={dropDown} alt="dropdown icon" />
    </span>
  );
};
export default UnitsDropdown;
