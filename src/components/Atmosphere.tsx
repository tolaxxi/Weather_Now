interface AtmospherePropsTypes {
  title: string;
  value: string;
  unit: string;
  space: boolean;
}
const Atmosphere = ({ title, value, unit, space }: AtmospherePropsTypes) => {
  return (
    <div className="bg-neutral-800 text-neutral-0 py-5 px-2 rounded-2xl font-DM-sans flex flex-col gap-5 w-33 sm:w-45">
      <p className="text-lg text-neutral-300 ">{title}</p>
      <h2 className="text-3xl">
        {value}
        {space && ' '}
        {unit}
      </h2>
    </div>
  );
};
export default Atmosphere;
