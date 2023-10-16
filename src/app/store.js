import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import productReducer from "../features/productSlice";
import loginReducer from "~/features/loginSlice";
import categoryReducer from "~/features/CategorySlice";
import paymentReducer from "~/features/paymentSlice";
import numerologyReducer from "../features/numerologySlice";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = configureStore(
  {
    reducer: {
      user: userReducer,
      product: productReducer,
      login: loginReducer,
      category: categoryReducer,
      payment: paymentReducer,
        numerology: numerologyReducer
    },
  },
  composeEnhancers(applyMiddleware())
);

