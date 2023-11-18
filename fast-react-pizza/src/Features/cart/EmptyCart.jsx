import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="m-7 h-screen w-full">
      <Link to="/menu">&larr; Back to menu</Link>

      <p className="mt-6 animate-bounce text-yellow-600">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
