import Home from "../pages/Home";
import GuestLayout from "~/layout/GuestLayout";
import Shop from "~/pages/Shop";
import ShopLayout from "~/layout/ShopLayout";
import BlogPage from "~/pages/BlogPage";

export const ROUT_DATA = [
    {path: "/", element: Home, layout: GuestLayout},
    {path: "/shop", element: Shop, layout: ShopLayout},
    {path: "/blogs", element: BlogPage, layout: GuestLayout}
]