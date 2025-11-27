import loadingImg from '../assets/images/icon-loading.svg';

const SearchLoadingState = () => {
  return (
    <div className="w-full flex gap-2.5 rounded-xl text-neutral-0 bg-neutral-700 font-DM-sans px-4 py-3 font-light">
      <img src={loadingImg} alt="loading icon" />
      <p>Search in Progress</p>
    </div>
  );
};
export default SearchLoadingState;
