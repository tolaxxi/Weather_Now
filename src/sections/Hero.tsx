import Search from '../components/Search';

const Hero = () => {
  return (
    <div className="w-full flex flex-col px-2 items-center gap-10  ">
      <h2 className="font-Bricolage-Grotesque text-neutral-0 text-5xl sm:text-6xl font-bold text-center w-[95%] xs:max-w-[70%]">
        How's the sky looking today?
      </h2>
      <Search />
    </div>
  );
};
export default Hero;
