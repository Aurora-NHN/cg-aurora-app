import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import productReducer from "../features/productSlice";
import loginReducer from "~/features/loginSlice";
import categoryReducer from "~/features/CategorySlice";
import cartReducer from "~/features/CartSlice"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = configureStore(
  {
    reducer: {
      user: userReducer,
      product: productReducer,
      login: loginReducer,
      category: categoryReducer,
      cart:cartReducer,
    },
  },
  composeEnhancers(applyMiddleware())
);
