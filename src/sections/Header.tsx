import logo from '../assets/images/logo.svg';
import UnitsDropdown from '../components/UnitsDropdown';
const Header = () => {
  return (
    <header className="flex place-items-center justify-between px-5 py-5 md:px-10">
      <span>
        <img src={logo} alt="Weather Now logo" className="" />
      </span>
      <UnitsDropdown />
    </header>
  );
};
export default Header;
