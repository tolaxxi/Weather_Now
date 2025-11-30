import Atmosphere from '../components/Atmosphere';
import useUnitContextProvider from '../contexts/unit/useUnitContextProvider';
import useWeather from '../hooks/useWeather';

const AtmosphereSection = () => {
  const { wind_speed_unit, precipitation_unit } = useUnitContextProvider();
  const { currentTemp, currentHumidity, humidity_unit, currentWindSpeed, currentPrecipitation } = useWeather();
  const roundedTemp = Math.floor(Number(currentTemp));
  const roundedWind = Math.floor(Number(currentWindSpeed));

  const hasWeather =
    currentTemp !== null && currentTemp !== undefined && currentTemp !== '' && !isNaN(Number(currentTemp));

  const AtmosphereCardDetails = [
    {
      id: 1,
      title: 'Feels like',
      value: hasWeather ? roundedTemp.toString() : '__',
      unit: hasWeather ? '°' : '',
      space: false,
    },
    {
      id: 2,
      title: 'Humidity',
      value: hasWeather ? currentHumidity : '__',
      unit: hasWeather ? humidity_unit : '',
      space: false,
    },
    {
      id: 3,
      title: 'Wind',
      value: hasWeather ? roundedWind.toString() : '__',
      unit: hasWeather ? wind_speed_unit : '',
      space: true,
    },
    {
      id: 4,
      title: 'Precipitation',
      value: hasWeather ? currentPrecipitation : '__',
      unit: hasWeather ? precipitation_unit : '',
      space: true,
    },
  ];

  return (
    <section className="grid grid-cols-2 sm:flex gap-2 ">
      {AtmosphereCardDetails.map(({ title, id, value, unit, space }) => {
        return <Atmosphere key={id} title={title} value={value} unit={unit} space={space} />;
      })}
    </section>
  );
};
export default AtmosphereSection;
