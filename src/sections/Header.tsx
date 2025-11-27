import logo from '../assets/images/logo.svg';
import UnitsDropdown from '../components/UnitsDropdown';
const Header = () => {
  return (
    <header className="flex place-items-center justify-between w-full py-5 md:px-10 sticky top-0 bg-inherit">
      <span className="">
        <img src={logo} alt="Weather Now logo" className="w-35" />
      </span>
      <UnitsDropdown />
    </header>
  );
};
export default Header;
