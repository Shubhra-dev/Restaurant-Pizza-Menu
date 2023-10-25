import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../Features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid-rows-[auto 1fr auto] grid h-screen">
      {isLoading && <Loader />}
      <Header />
      <main className="overflow-scroll bg-stone-100">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
