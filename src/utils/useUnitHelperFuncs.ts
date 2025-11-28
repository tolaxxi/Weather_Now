import useUnitContextProvider from '../contexts/unit/useUnitContextProvider';

export default function useUnitHelper() {
  const {
    isCelsius,
    isFahrenheit,
    isKmh,
    isMph,
    isMm,
    isInch,

    setIsImperial,
    setIsCelsius,
    setIsFahrenheit,
    setIsKmh,
    setIsMph,
    setIsMm,
    setIsInch,

    unit,

    setUnit,
    setWind_speed_unit,
    setPrecipitation_unit,
  } = useUnitContextProvider();

  function toggleImperial() {
    if (isCelsius) setIsCelsius(false);
    if (isKmh) setIsKmh(false);
    if (isMm) setIsMm(false);

    setIsImperial((prev) => !prev);
    setIsFahrenheit(true);
    setUnit('fahrenheit');
    setIsMph(true);
    setWind_speed_unit('mph');
    setIsInch(true);
    setPrecipitation_unit('inch');
  }

  // temperature
  function toggleIsCelsius() {
    if (isFahrenheit) {
      setIsFahrenheit(false);
    }
    setIsCelsius((prev) => !prev);
    setUnit('celsius');
    setIsImperial(false);
  }
  function toggleIsFarenheit() {
    if (isCelsius) {
      setIsCelsius(false);
    }
    setIsFahrenheit((prev) => !prev);
    setUnit('fahrenheit');
  }
  // wind speed toggle
  function toggleIsKmh() {
    if (isMph) {
      setIsMph(false);
    }
    setIsKmh((prev) => !prev);
    setWind_speed_unit('kmh');
  }
  function toggleIsMph() {
    if (isKmh) {
      setIsKmh(false);
    }
    setIsMph((prev) => !prev);
    setWind_speed_unit('mph');
  }

  // precipitation
  function toggleIsMm() {
    if (isInch) {
      setIsInch(false);
    }
    setIsMm((prev) => !prev);
    setPrecipitation_unit('mm');
  }

  function toggleIsInch() {
    if (isMm) {
      setIsMm(false);
    }
    setIsInch((prev) => !prev);
    setPrecipitation_unit('inch');
  }
  return {
    toggleImperial,
    toggleIsCelsius,
    toggleIsFarenheit,
    unit,
    toggleIsKmh,
    toggleIsInch,
    toggleIsMph,
    toggleIsMm,
  };
}
