import { Link } from 'react-router-dom';

const base =
  'inline-block text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300  focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-40 disabled:cursor-not-allowed focus:ring-offset-2';

const styles = {
  primary: base + ' px-4 py-3 md:px-6 md:py-4',
  small: base + ' px-3 py-2 md:px-5 md:py-2.5 text-xs',
  secondary:
    'px-4 text-sm py-2.5 md:px-6 md:py-3.5 inline-block rounded-full font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-200 hover:bg-stone-200 border-2 border-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800  focus:outline-none focus:ring focus:ring-stone-300 focus:ring-opacity-40 disabled:cursor-not-allowed focus:ring-offset-2',
};
function Button({ children, to, disabled, type, onclick }) {
  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }
  if (onclick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onclick}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
