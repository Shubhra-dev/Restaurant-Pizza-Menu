import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { addItem } from '../cart/cartSlice';
import { useState } from 'react';

function MenuItem({ pizza }) {
  const [toCart, setToCart] = useState(false);
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
    console.log(id);
    setToCart(true);
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`${soldOut ? 'opacity-50 grayscale' : ''} h-24`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!toCart && (
            <Button onclick={handleAddToCart} disabled={soldOut} type="small">
              Add to cart
            </Button>
          )}
          {toCart && (
            <div className="flex items-center justify-between">
              <Button type="small">-</Button>
              <span className="px-1 font-medium">1</span>
              <Button type="small">+</Button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
