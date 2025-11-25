import { useState } from 'react';
import sunnyImage from '../assets/images/icon-sunny.webp';

const WeatherCard = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState('');

  return (
    <section
      className="min-h-60 overflow-hidden w-full max-w-70 bg-center bg-cover xxs:max-w-[650px] font-DM-sans text-neutral-0 rounded-xl bg-[url('/bg/bg-today-small.svg')]
    xs:bg-[url('/bg/bg-today-large.svg')] bg-no-repeat  flex items-centers"
    >
      <div className=" flex flex-col sm:flex-row items-center justify-center gap-5 w-full font-DM-sans sm:px-10 text-center">
        <div className="">
          <h2 className="capitalize font-medium text-2xl">Berlin,Germany</h2>
          <p className="capitalize font-light text-sm">Tuesday, Aug 5,2025</p>
        </div>
        <div className="text-7xl lg:text-8xl font-DM-sans  italic flex font-medium  items-center">
          <img src={`${sunnyImage}`} className="w-25 sm:w-35" />
          <p>20&deg;</p>
        </div>
      </div>
    </section>
  );
};
export default WeatherCard;
