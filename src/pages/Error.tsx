import errorImage from '../assets/images/icon-error.svg';
import retryImage from '../assets/images/icon-retry.svg';

const Error = () => {
  return (
    <section className="text-neutral-0 text-center gap-5 font-DM-sans flex flex-col items-center">
      <img src={errorImage} alt="error image" className="w-10" />
      <h1 className="text-5xl font-bold">Something went wrong</h1>

      <p className="max-w-[70%] font-medium text-neutral-300">
        We couldn't connect to the server (API error). Please try again in a few moments
      </p>

      <button className="flex gap-2 px-5 py-2 bg-neutral-700 rounded-lg">
        <img src={retryImage} alt="retry image" />
        Retry
      </button>
    </section>
  );
};
export default Error;
