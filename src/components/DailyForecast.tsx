import rainImg from '../assets/images/icon-rain.webp';

const DailyForecast = () => {
  return (
    <div className=" flex flex-col items-center gap-2 py-5 px-2 min-w-[130px] rounded-xl text-neutral-0 bg-neutral-800 font-DM-sans font-medium border border-neutral-600">
      <h3 className=" font-medium">Tue</h3>
      <img src={rainImg} alt="Weather_icon" className="w-20" />
      <span className="flex gap-5">
        <p>20&deg;</p>
        <p>14&deg;</p>
      </span>
    </div>
  );
};
export default DailyForecast;
