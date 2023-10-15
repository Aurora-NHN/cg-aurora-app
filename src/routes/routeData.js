import Home from "../pages/Home";
import GuestLayout from "~/layout/GuestLayout";
import Shop from "~/pages/Shop";
import ShopLayout from "~/layout/ShopLayout";
import BlogPage from "~/pages/BlogPage";

import Cart from "~/components/commons/CartLineDetail";
import ChangePassword from "~/pages/ChangePassword";
import Libra from "~/pages/zodiac/Libra";
import ZodiacSection from "~/components/main/homepage/ZodiacSection";
import Aquarius from "~/pages/zodiac/Aquarius";
import Leo from "~/pages/zodiac/Leo";
import Pisces from "~/pages/zodiac/Pisces";
import Sagittarius from "~/pages/zodiac/Sagittarius";
import Taurus from "~/pages/zodiac/Taurus";
import Virgo from "~/pages/zodiac/Virgo";
import Capricorn from "~/pages/zodiac/Capricorn";
import Cancer from "~/pages/zodiac/Cancer";
import Aries from "~/pages/zodiac/Aries";
import Gemini from "~/pages/zodiac/Gemini";
import Scorpio from "~/pages/zodiac/Scorpio";
import ForgotPassword from "~/pages/ForgotPassword";
import AccountDetail from "~/pages/AccountDetail";
import Checkout from "~/pages/Checkout";
// import Pricing from "~/pages/Pricing";
import Product from "~/pages/Product";
export const ROUT_DATA = [
    {path: "/", element: Home, layout: GuestLayout},
    {path: "/shop", element: Shop, layout: ShopLayout},
    {path: "/blogs", element: BlogPage, layout: GuestLayout},
  { path: "/forgot-password", element: ForgotPassword, layout: GuestLayout },
  { path: "/change-password", element: ChangePassword, layout: GuestLayout },
  { path: "/account-detail", element: AccountDetail, layout: GuestLayout },
  { path: "/cart", element: Cart, layout: ShopLayout },
  { path: "/checkout-form", element: Checkout, layout: ShopLayout },
  { path: "/product-detail/:id", element: Product, layout: ShopLayout },
  { path: "/zodiac", element: ZodiacSection, layout: GuestLayout },
  { path: "/zodiac-libra", element: Libra, layout: GuestLayout },
  { path: "/zodiac-aquarius", element: Aquarius, layout: GuestLayout },
  { path: "/zodiac-leo", element: Leo, layout: GuestLayout },
  { path: "/zodiac-pisces", element: Pisces, layout: GuestLayout },
  { path: "/zodiac-sagittarius", element: Sagittarius, layout: GuestLayout },
  { path: "/zodiac-taurus", element: Taurus, layout: GuestLayout },
  { path: "/zodiac-virgo", element: Virgo, layout: GuestLayout },
  { path: "/zodiac-capricorn", element: Capricorn, layout: GuestLayout },
  { path: "/zodiac-cancer", element: Cancer, layout: GuestLayout },
  { path: "/zodiac-aries", element: Aries, layout: GuestLayout },
  { path: "/zodiac-gemini", element: Gemini, layout: GuestLayout },
  { path: "/zodiac-scorpio", element: Scorpio, layout: GuestLayout },
  // { path: "/pricing", element: Pricing, layout: ShopLayout }
];
