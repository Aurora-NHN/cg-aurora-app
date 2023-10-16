import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCartLineToCart, showCart ,deleteCartLine} from "~/api/cartAPI";

export const addToCart = createAsyncThunk(
  "cart/add",
  async ({ productId, quantity, token }) => {
    const response = await addCartLineToCart(productId, quantity, token);
    console.log(response)
    return response.data ?? undefined;
  }
);

export const getCart = createAsyncThunk(
  "cart/show", async (token) => {
    const response = await showCart(token);
    console.log(response);
    return response.data.data;
  });

export const removeCartLine = createAsyncThunk(
  "cart-line/delete", async ({ cartLineId, token }) => {
    const response = await deleteCartLine(cartLineId, token);
    console.log(response);
    return response.data.data;
  })


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    values: [],
    value: null,
    loading: false,
    error: null,
    success: false,
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
        state.values = action.payload;
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
        state.values = action.payload;
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
        state.values = action.payload;
        state.error = false;
      });
  },
});

export const { setLoading, setError, setSuccess } = cartSlice.actions;
export const selectLoading = (state) => state.cart.loading;
export const selectError = (state) => state.cart.error;
export const selectSuccess = (state) => state.cart.success;
export const selectCart = (state) => state.cart.values;
export const selectStatus = (state) => state.cart.status;
export default cartSlice.reducer;
