import weatherImage from '../../assets/images/icon-drizzle.webp';

const HourlyCard = () => {
  return (
    <div className="bg-neutral-700 w-full flex items-center border border-neutral-600 text-neutral-0 py-1 bor px-2 font-DM-sans justify-between rounded-lg">
      <span className="flex items-center gap-2 justify-center ">
        <img src={weatherImage} alt="weather image" className="w-10" />
        <h2> 3PM</h2>
      </span>
      <p>20</p>
    </div>
  );
};
export default HourlyCard;
