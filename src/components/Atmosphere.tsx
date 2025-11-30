interface AtmospherePropsTypes {
  title: string;
  value: string;
  unit: string;
  space: boolean;
}
const Atmosphere = ({ title, value, unit, space }: AtmospherePropsTypes) => {
  return (
    <div className="bg-neutral-800 text-neutral-0 py-5 px-3 sm:w-36 md:w-39 rounded-2xl font-DM-sans border-neutral-600 border flex flex-col gap-5">
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
