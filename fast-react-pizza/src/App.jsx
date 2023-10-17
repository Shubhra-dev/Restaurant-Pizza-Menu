import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Cart from "./Features/cart/Cart";
import CreateOrder from "./Features/order/CreateOrder";
import Order from "./Features/order/Order";
import Menu, { menuLoader } from "./Features/menu/Menu";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "/order?:orderId", element: <Order /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
