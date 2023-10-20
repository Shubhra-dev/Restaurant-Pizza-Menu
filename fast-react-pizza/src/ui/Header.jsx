import { Link } from 'react-router-dom';
import Username from '../Features/user/Username';

function Header() {
  return (
    <header className="border-b border-stone-200 bg-yellow-500 px-4 py-3 sm:px-6">
      <Link to="/" className="uppercase tracking-widest">
        Fast React Pizza
      </Link>
      <Username />
    </header>
  );
}

export default Header;
