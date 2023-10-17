import Home from "../pages/Home";
import GuestLayout from "~/layout/GuestLayout";
import Shop from "~/pages/Shop";
import ShopLayout from "~/layout/ShopLayout";
import Blog from "~/pages/Blog";
import Cart from "~/components/commons/CartLineDetail";
import ChangePassword from "~/pages/ChangePassword";
import ZodiacSection from "~/components/main/homepage/ZodiacSection";
import ForgotPassword from "~/pages/ForgotPassword";
import AccountDetail from "~/pages/AccountDetail";
import Checkout from "~/pages/Checkout";
import Numerology from "~/pages/Numerology";
import NumerologyResult from "~/components/main/numerolory/NumerologyResult";
import Product from "~/pages/Product";
import Libra from "~/components/main/zodiac/Libra";
import Leo from "~/components/main/zodiac/Leo";
import Aquarius from "~/components/main/zodiac/Aquarius";
import Sagittarius from "~/components/main/zodiac/Sagittarius";
import Pisces from "~/components/main/zodiac/Pisces";
import Taurus from "~/components/main/zodiac/Taurus";
import Virgo from "~/components/main/zodiac/Virgo";
import Capricorn from "~/components/main/zodiac/Capricorn";
import Cancer from "~/components/main/zodiac/Cancer";
import Aries from "~/components/main/zodiac/Aries";
import Gemini from "~/components/main/zodiac/Gemini";
import Scorpio from "~/components/main/zodiac/Scorpio";
import Pricing from "~/components/main/homepage/Pricing";

export const ROUT_DATA = [
  { path: "/", element: Home, layout: GuestLayout },
  { path: "/shop", element: Shop, layout: ShopLayout },
  { path: "/blogs", element: Blog, layout: GuestLayout },
  { path: "/forgot-password", element: ForgotPassword, layout: GuestLayout },
  { path: "/change-password", element: ChangePassword, layout: GuestLayout },
  { path: "/account-detail", element: AccountDetail, layout: GuestLayout },
  { path: "/blogs", element: Blog, layout: GuestLayout },
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
  { path: "/pricing", element: Pricing, layout: GuestLayout },
  // { path: "/checkout-form", element: CheckoutForm, layout: ShopLayout },
  {path: "/numerology", element: Numerology, layout: GuestLayout},
  {path: "/numerology-result", element: NumerologyResult, layout: GuestLayout}
];