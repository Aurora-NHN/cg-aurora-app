import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addCartLineToCart,
  showCart,
  deleteCartLine,
  addNewQuantiytToCart,
  saveAndGetCartOrder
} from "~/api/cartAPI";

export const addToCart = createAsyncThunk(
  "cart/add",
  async ({ productId, quantity, token }) => {
    const response = await addCartLineToCart(productId, quantity, token);
    return response.data;
  }
);
export const addNewQuantity = createAsyncThunk(
  "cart/add-quantity",
  async ({ productId, quantity, token }) => {
    const response = await addNewQuantiytToCart(productId, quantity, token);
    return response.data.data;
  }
);

export const getCart = createAsyncThunk("cart/show", async (token) => {
  const response = await showCart(token);
  return response.data.data;
});

export const getCartOrder = createAsyncThunk("cart/order", async (token) => {
  const response = await saveAndGetCartOrder(token);
  return response.data.data;
});

export const removeCartLine = createAsyncThunk(
  "cart-line/delete",
  async ({ productId, token }) => {
    const response = await deleteCartLine(productId, token);
    return response.data.data;
  }
);


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {},
    loading: false,
    error: null,
    success: false,
    quantity: null,
    cartLine: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setNewQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    setCurrentCartLine: (state, action) => {
      state.cartLine = action.payload;
    },
    setChangeCartLineTotalPrice: (state, action) => {
      state.changeCartLineTotalPrice = action.payload;
    },
    setRemovedCartLineTotalPrice: (state, action) => {
      state.removedCartLineTotalPrice = action.payload;
    },
    setCartLine: (state, action) => {
      state.cartLine = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })
      .addCase(getCartOrder.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getCartOrder.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getCartOrder.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })
      .addCase(removeCartLine.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(removeCartLine.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(removeCartLine.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })
      .addCase(getCart.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })
      .addCase(addNewQuantity.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(addNewQuantity.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(addNewQuantity.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      });
  },
});

export const {
  setLoading,
  setError,
  setSuccess,
  setNewQuantity,
  setCartLine,
  setChangeCartLineTotalPrice,
  setRemovedCartLineTotalPrice,
  setCurrentCartLine,
} = cartSlice.actions;
export const selectLoading = (state) => state.cart.loading;
export const selectError = (state) => state.cart.error;
export const selectSuccess = (state) => state.cart.success;
export const selectCart = (state) => state.cart.value;
export const selectAddToCartSuccess = (state) => state.cart.addTocartSuccess;
export const selectAddToCartResponse = (state) => state.cart.value;
export const selectQuantity = (state) => state.cart.quantity;
export const selectCartLine = (state) => state.cart.cartLine;
export const selectRemovedCartLineTotalPrice = (state) =>
  state.cart.removedCartLineTotalPrice;
export default cartSlice.reducer;
