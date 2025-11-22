const UnitDropdownMenu = () => {
  return (
    <aside className="bg-neutral-800 absolute top-20 right-5 p-1.5 flex flex-col items-start text-xs font-DM-sans font-medium text-neutral-300 rounded-xl w-50">
      <button className="dropdown-menu-btn">Switch to Imperial</button>
      {/* Temperature */}
      <div className="dropdown-menu-section">
        <p>Temperature</p>
        <div className="dropdown-menu-btn-section">
          <button className="dropdown-menu-btn">Celsius</button>
          <button className="dropdown-menu-btn">Fahrenheit</button>
        </div>
      </div>
      {/* Wind Speed */}
      <div className="dropdown-menu-section">
        <p>Wind Speed</p>
        <div className="dropdown-menu-btn-section">
          <button className="dropdown-menu-btn">km/h</button>
          <button className="dropdown-menu-btn">mph</button>
        </div>
      </div>
      {/* Precipitation */}
      <div className="dropdown-menu-last-section">
        <p>Precipitation</p>
        <div className="dropdown-menu-btn-section">
          <button className="dropdown-menu-btn">Millimeters(mm)</button>
          <button className="dropdown-menu-btn">Inches(in)</button>
        </div>
      </div>
    </aside>
  );
};
export default UnitDropdownMenu;
