import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/loginSlice";
import productReducer from "../features/productSlice";
import loginReducer from "~/features/loginSlice";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = configureStore(
  {
    reducer: {
      user: userReducer,
      product: productReducer,
      login: loginReducer,
    },
  },
  composeEnhancers(applyMiddleware())
);
