import Home from "../pages/Home";
import GuestLayout from "~/layout/GuestLayout";
import Shop from "~/pages/Shop";
import BlogPage from "~/pages/BlogPage";
import ChangePassword from "~/pages/ChangePassword";
import ForgotPassword from "~/pages/ForgotPassword";
import AccountDetail from "~/pages/AccountDetail";
import Checkout from "~/pages/Checkout";
import Product from "~/pages/Product";
import ZodiacSection from "~/pages/ZodiacSection";
import Libra from "~/components/main/zodiac/Libra";
import Aquarius from "~/components/main/zodiac/Aquarius";
import Leo from "~/components/main/zodiac/Leo";
import Pisces from "~/components/main/zodiac/Pisces";
import Sagittarius from "~/components/main/zodiac/Sagittarius";
import Taurus from "~/components/main/zodiac/Taurus";
import Virgo from "~/components/main/zodiac/Virgo";
import Capricorn from "~/components/main/zodiac/Capricorn";
import Cancer from "~/components/main/zodiac/Cancer";
import Aries from "~/components/main/zodiac/Aries";
import Gemini from "~/components/main/zodiac/Gemini";
import Scorpio from "~/components/main/zodiac/Scorpio";
import Pricing from "~/pages/Pricing";
import Tarot from "~/components/main/homepage/Tarot";
import OrderReturn from "~/components/commons/OrderReturn";
import Cart from "~/pages/Cart";

import Numerology from "~/pages/Numerology";
import NumerologyResult from "~/components/main/numerolory/NumerologyResult";
export const ROUT_DATA = [
  { path: "/", element: Home, layout: GuestLayout },
  { path: "/shop", element: Shop, layout: GuestLayout },
  {path: "/blogs", element: BlogPage, layout: GuestLayout},
  { path: "/forgot-password", element: ForgotPassword, layout: GuestLayout },
  { path: "/change-password", element: ChangePassword, layout: GuestLayout },
  { path: "/account-detail", element: AccountDetail, layout: GuestLayout },
  { path: "/cart", element: Cart, layout: GuestLayout },
  { path: "/checkout-form", element: Checkout, layout: GuestLayout },
  { path: "/product-detail/:id", element: Product, layout: GuestLayout },
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
  { path: "/pricing", element: Pricing, layout: GuestLayout },
  { path: "/tarot", element: Tarot, layout: GuestLayout },
  {path: "/numerology", element: Numerology, layout: GuestLayout},
  {path: "/numerology-result", element: NumerologyResult, layout: GuestLayout}
];

