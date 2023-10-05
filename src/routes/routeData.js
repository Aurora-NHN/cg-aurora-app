import Home from "../pages/Home";
import GuestLayout from "~/layout/GuestLayout";
import Shop from "~/pages/Shop";
import ShopLayout from "~/layout/ShopLayout";
import Blog from "~/pages/Blog";

export const ROUT_DATA = [
    {path: "/", element: Home, layout: GuestLayout},
    {path: "/shop", element: Shop, layout: ShopLayout},
    {path: "/blogs", element: Blog, layout: GuestLayout}
]