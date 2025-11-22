import Search from '../components/Search';
import SearchButton from '../components/SearchButton';

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 ">
      <h2 className="font-Bricolage-Grotesque text-neutral-0 text-5xl font-bold text-center w-[95%] ">
        How's the sky looking today?
      </h2>
      <div className="w-full flex flex-col gap-2">
        <Search />
        <SearchButton />
      </div>
    </div>
  );
};
export default Hero;
