import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import productReducer from "../features/productSlice";
import loginReducer from "~/features/loginSlice";
import categoryReducer from "~/features/categorySlice";
import paymentReducer from "~/features/paymentSlice";
import cartSlice from "~/features/cartSlice";
import blogSlice from "~/features/blogSlice";
import numerologyReducer from "~/features/numerologySlice";
import orderSlice from "~/features/orderSlice";
import provinceSlice from "~/features/provinceSlice";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = configureStore(
  {
    reducer: {
      user: userReducer,
      product: productReducer,
      login: loginReducer,
      category: categoryReducer,
      payment: paymentReducer,
      numerology: numerologyReducer,
      cart: cartSlice,
      blogs: blogSlice,
      order: orderSlice,
      province: provinceSlice,
    },
  },
  composeEnhancers(applyMiddleware())
);
