import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import productReducer from "../features/productSlice";
import categoryReducer from "~/features/CategorySlice";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = configureStore(
  {
    reducer: {
      user: userReducer,
      product: productReducer,
      category: categoryReducer,
    },
  },
  composeEnhancers(applyMiddleware())
);

