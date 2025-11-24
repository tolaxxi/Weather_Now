import { useState } from 'react';
import searchIcon from '../assets/images/icon-search.svg';
import useSearch from '../contexts/search/useSearch';
import SearchButton from './SearchButton';

const Search = () => {
  const [input, setInput] = useState('');

  const { setQuery } = useSearch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(input.toLowerCase().trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex font-DM-sans flex-col gap-2.5 sm:flex-row sm:max-w-[80%] lg:max-w-[50%] w-full">
      <div className="text-neutral-0 bg-neutral-800 py-3 px-4 w-full flex gap-3 items-center rounded-xl">
        <img src={searchIcon} alt="Search icon" className='w-4.5' />
        <input
          type="text"
          placeholder="Search for a place..."
          value={input}
          className="flex-1 outline-0 font-DM-sans text-lg"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <SearchButton />
    </form>
  );
};
export default Search;
