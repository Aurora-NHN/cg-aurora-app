import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findProducts } from "~/api/productAPI";

const initialState = {
  values: [],
  value: null,
  loading: false,
  error: null,
  success: false,
};

export const getProducts = createAsyncThunk("products", async (keyword) => {
  const response = await findProducts(keyword);
  return response.data.content;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
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
      .addCase(getProducts.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.values = action.payload;
        state.error = false;
      });
  },
});

export const { setLoading, setError, setSuccess } = productSlice.actions;

export const selectLoading = (state) => state.product.loading;
export const selectError = (state) => state.product.error;
export const selectSuccess = (state) => state.product.success;
export const selectProductList = (state) => state.product.values;

export const setLoadingTrueIfCalled = (isCalled) => (dispatch, getState) => {
  const currentValue = selectLoading(getState());
  if (currentValue === isCalled) {
    dispatch(setLoading(true));
  }
};

export default productSlice.reducer;
