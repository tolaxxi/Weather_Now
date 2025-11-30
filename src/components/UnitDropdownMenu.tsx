import activeImage from '../assets/images/icon-checkmark.svg';

import useUnitContextProvider from '../contexts/unit/useUnitContextProvider';
import useUnitHelper from '../utils/useUnitHelperFuncs';

const UnitDropdownMenu = () => {
  const { isImperial, isCelsius, isFahrenheit, isKmh, isMph, isInch, isMm } = useUnitContextProvider();
  const { toggleImperial, toggleIsCelsius, toggleIsFarenheit, toggleIsKmh, toggleIsMph, toggleIsInch, toggleIsMm } =
    useUnitHelper();

  return (
    <aside className="bg-neutral-800 18 p-1.5   border-neutral-600 border flex flex-col items-start text-xs font-DM-sans font-medium text-neutral-300 rounded-xl w-50 ">
      <button className={`dropdown-menu-btn ${isImperial && 'dropdown-menu-active'}`} onClick={toggleImperial}>
        Switch to Imperial {isImperial && <img src={activeImage} alt="check mark image" />}
      </button>
      {/* Temperature */}
      <div className="dropdown-menu-section">
        <p>Temperature</p>
        <div className="dropdown-menu-btn-section">
          <button className={`dropdown-menu-btn ${isCelsius && 'dropdown-menu-active'}`} onClick={toggleIsCelsius}>
            Celsius {isCelsius && <img src={activeImage} alt="check mark image" />}
          </button>
          <button className={`dropdown-menu-btn ${isFahrenheit && 'dropdown-menu-active'}`} onClick={toggleIsFarenheit}>
            Fahrenheit {isFahrenheit && <img src={activeImage} alt="check mark image" />}
          </button>
        </div>
      </div>
      {/* Wind Speed */}
      <div className="dropdown-menu-section">
        <p>Wind Speed</p>
        <div className="dropdown-menu-btn-section">
          <button className={`dropdown-menu-btn ${isKmh && 'dropdown-menu-active'}`} onClick={toggleIsKmh}>
            km/h {isKmh && <img src={activeImage} alt="check mark image" />}
          </button>
          <button className={`dropdown-menu-btn ${isMph && 'dropdown-menu-active'}`} onClick={toggleIsMph}>
            mph {isMph && <img src={activeImage} alt="check mark image" />}
          </button>
        </div>
      </div>
      {/* Precipitation */}
      <div className="dropdown-menu-last-section">
        <p>Precipitation</p>
        <div className="dropdown-menu-btn-section">
          <button className={`dropdown-menu-btn ${isMm && 'dropdown-menu-active'}`} onClick={toggleIsMm}>
            Millimeters(mm) {isMm && <img src={activeImage} alt="check mark image" />}
          </button>
          <button className={`dropdown-menu-btn ${isInch && 'dropdown-menu-active'}`} onClick={toggleIsInch}>
            Inches(in) {isInch && <img src={activeImage} alt="check mark image" />}
          </button>
        </div>
      </div>
    </aside>
  );
};
export default UnitDropdownMenu;
