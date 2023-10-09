import Home from "../pages/Home";
import GuestLayout from "~/layout/GuestLayout";
import Shop from "~/pages/Shop";
import ShopLayout from "~/layout/ShopLayout";
import Blog from "~/pages/Blog";
import Cart from "~/components/commons/CartLineDetail";
import CheckoutForm from "~/components/commons/CheckoutForm";

export const ROUT_DATA = [
  { path: "/", element: Home, layout: GuestLayout },
  { path: "/shop", element: Shop, layout: ShopLayout },
  { path: "/blogs", element: Blog, layout: GuestLayout },
  { path: "/cart", element: Cart, layout: ShopLayout },
  { path: "/checkout-form", element: CheckoutForm, layout: ShopLayout },
];
