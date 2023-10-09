import Home from "../pages/Home";
import GuestLayout from "~/layout/GuestLayout";
import Shop from "~/pages/Shop";
import ShopLayout from "~/layout/ShopLayout";
import Blog from "~/pages/Blog";
import ForgotPassword from "~/pages/ForgotPassword";
import AccountDetail from "~/pages/AccountDetail";
import Cart from "~/components/commons/CartLineDetail";

export const ROUT_DATA = [
  { path: "/", element: Home, layout: GuestLayout },
  { path: "/shop", element: Shop, layout: ShopLayout },
  { path: "/blogs", element: Blog, layout: GuestLayout },
  { path: "/forgot-password", element: ForgotPassword, layout: GuestLayout },
  { path: "/account-detail", element: AccountDetail, layout: GuestLayout },
  { path: "/blogs", element: Blog, layout: GuestLayout },
  { path: "/cart", element: Cart, layout: ShopLayout },
  // { path: "/checkout-form", element: CheckoutForm, layout: ShopLayout },
];
