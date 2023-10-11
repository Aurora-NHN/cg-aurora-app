import Home from "../pages/Home";
import GuestLayout from "~/layout/GuestLayout";
import Shop from "~/pages/Shop";
import ShopLayout from "~/layout/ShopLayout";
import Blog from "~/pages/Blog";
import Cart from "~/pages/Cart";
import Checkout from "~/pages/Checkout";
import ShopDetail from "~/pages/ShopDetail";
import ProductDetail from "~/pages/ProductDetail";


export const ROUT_DATA = [
  { path: "/", element: Home, layout: GuestLayout },
  { path: "/shop", element: Shop, layout: ShopLayout },
  { path: "/blogs", element: Blog, layout: GuestLayout },
  { path: "/cart", element: Cart, layout: ShopLayout },
  { path: "/checkout-form", element: Checkout, layout: ShopLayout },
  { path: "/product-detail/:id", element: ProductDetail, layout: ShopLayout },
];
