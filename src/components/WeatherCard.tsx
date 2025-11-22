import weatherImage from '../assets/images/icon-sunny.webp';
const WeatherCard = () => {
  //
  const location = 'Berlin, germany';
  const date = 'Tuesday, aug 5,2025';
  const temperature = 21;

  return (
    <div className="w-full min-h-58 rounded-2xl font-DM-sans bg-no-repeat text-center flex flex-col text-2xl items-center justify-center small-weather-card-bg md:large-weather-card-bg bg-no-repeat bg-center bg-cover">
      <div className="font-medium text-2xl capitalize text-neutral-0">
        <h2>{location}</h2>
        <p className="text-sm font-light capitalize">{date}</p>
      </div>
      <span className="flex  items-center font-bold  text-neutral-0 text-7xl italic">
        <img src={weatherImage} alt="" className="w-30" />
        <h2>{temperature}&deg;</h2>
      </span>
    </div>
  );
};

export default WeatherCard;
