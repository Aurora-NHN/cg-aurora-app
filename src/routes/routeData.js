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
import Zodiac from "~/pages/Zodiac";
import Pricing from "~/pages/Pricing";
import Tarot from "~/components/main/homepage/Tarot";
import Cart from "~/pages/Cart";
import Numerology from "~/pages/Numerology";
import NumerologyResult from "~/components/main/numerolory/NumerologyResult";
import NumerologyReportHistory from "~/pages/NumerologyReportHistory";
import NumerologyReportDetail from "~/components/main/numerolory/history/NumerologyReportDetail";
import MyAccount from "~/pages/MyAccount";

export const ROUT_DATA = [
  { path: "/", element: Home, layout: GuestLayout },
  { path: "/shop", element: Shop, layout: GuestLayout },
  {path: "/blogs", element: BlogPage, layout: GuestLayout},
  {path: "/blogs/:id", element: BlogPage, layout: GuestLayout},
  { path: "/forgot-password", element: ForgotPassword, layout: GuestLayout },
  { path: "/change-password", element: ChangePassword, layout: GuestLayout },
  { path: "/account-detail", element: AccountDetail, layout: GuestLayout },
  { path: "/account", element: MyAccount, layout: GuestLayout },
  { path: "/cart", element: Cart, layout: GuestLayout },
  { path: "/checkout-form", element: Checkout, layout: GuestLayout },
  { path: "/product-detail/:id", element: Product, layout: GuestLayout },
  { path: "/zodiac", element: ZodiacSection, layout: GuestLayout },
  { path: "/zodiac/:name", element: Zodiac, layout: GuestLayout },
  { path: "/pricing", element: Pricing, layout: GuestLayout },
  { path: "/tarot", element: Tarot, layout: GuestLayout },
  {path: "/numerology", element: Numerology, layout: GuestLayout},
  {path: "/numerology-result", element: NumerologyResult, layout: GuestLayout},
  {path: "/numerology-report-history", element: NumerologyReportHistory, layout: GuestLayout},
  { path: "/numerology-detail", element:NumerologyReportDetail , layout: GuestLayout },
];

