import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartPrice, getCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const cartQuantity = useSelector(getCartQuantity);
  const cartPrice = useSelector(getCartPrice);
  if (!cartPrice) return;
  return (
    <div className="flex items-center justify-between bg-stone-700 px-4 py-4 text-stone-200 sm:px-6">
      <p className="text-semibold space-x-4 text-sm uppercase text-stone-300 sm:space-x-6 md:text-base">
        <span>{cartQuantity} pizzas</span>
        <span>{formatCurrency(cartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
