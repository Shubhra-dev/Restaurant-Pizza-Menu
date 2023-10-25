import { Link } from 'react-router-dom';
import Username from '../Features/user/Username';
import SearchOrder from '../Features/order/SearchOrder';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 sm:px-6">
      <Link to="/" className="uppercase tracking-widest">
        Fast React Pizza
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
