import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../Features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
import SearchOrder from "../Features/order/SearchOrder";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <SearchOrder />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
