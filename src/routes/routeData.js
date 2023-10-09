import Home from "../pages/Home";
import GuestLayout from "~/layout/GuestLayout";
import Shop from "~/pages/Shop";
import ShopLayout from "~/layout/ShopLayout";
import Blog from "~/pages/Blog";
import ForgotPassword from "~/components/commons/ForgotPassword";
import AccountDetail from "~/pages/AccountDetail";
import TopLineHeader from "~/components/commons/header/TopLineHeader";

export const ROUT_DATA = [
  { path: "/", element: Home, layout: GuestLayout },
  { path: "/shop", element: Shop, layout: ShopLayout },
  { path: "/blogs", element: Blog, layout: ShopLayout },
  { path: "/logout", element: Home, layout: GuestLayout },
  { path: "/forgot-password", element: ForgotPassword, layout: GuestLayout },
  { path: "/account-detail", element: AccountDetail, layout: GuestLayout },
];