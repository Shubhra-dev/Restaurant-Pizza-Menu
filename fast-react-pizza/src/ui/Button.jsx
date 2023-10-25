import { Link } from 'react-router-dom';

const className =
  'inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 sm:px-6 sm:py-4 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-40 disabled:cursor-not-allowed focus:ring-offset-2';
function Button({ children, to, disabled }) {
  console.log(to);
  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
