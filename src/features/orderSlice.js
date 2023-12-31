import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createOrderDetailAPI,
  createOrderAPI,
} from "~/api/orderApi";

export const createOrderDetail = createAsyncThunk(
  "order/create-order-detail",
  async ({ address, token }) => {
    const response = await createOrderDetailAPI(address, token);
    return response.data;
  }
);

export const createOrder = createAsyncThunk(
  "order/create-order",
  async (token) => {
    const response = await createOrderAPI(token);
    return response.data.data;
  }
);


const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: {},
    value: {},
    loading: false,
    createOrderError: null,
    createOrderDetailSuccess: false,
    orderAddress: {},
    getAddressSuccess: false,
    success: false,
    error: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCreateOrderError: (state, action) => {
      state.createOrderError = action.payload;
    },
    setCreateOrderSuccess: (state, action) => {
      state.createOrderDetailSuccess = action.payload;
    },
    setOrderAddress: (state, action) => {
      state.orderAddress = action.payload;
    },
    setAddressSuccess: (state, action) => {
      state.getAddressSuccess = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderDetail.pending, (state) => {
        state.createOrderDetailSuccess = false;
        state.loading = true;
        state.createOrderError = false;
      })
      .addCase(createOrderDetail.rejected, (state, action) => {
        state.createOrderDetailSuccess = false;
        state.loading = false;
        state.createOrderError = action.error;
      })
      .addCase(createOrderDetail.fulfilled, (state, action) => {
        state.createOrderDetailSuccess = true;
        state.loading = false;
        state.value = action.payload;
        state.createOrderError = false;
      })
      .addCase(createOrder.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.order = action.payload;
        state.error = false;
      });
  },
});

export const {
  setLoading,
  setCreateOrderError,
  setCreateOrderSuccess,
  setOrderAddress,
  getAddressSuccess,
  setAddressSuccess,
} = orderSlice.actions;
export const selectLoading = (state) => state.order.loading;
export const selectError = (state) => state.order.error;
export const selectSuccess = (state) => state.order.success;
export const selectOrder = (state) => state.order.order;
export const selectAddress = (state) => state.order.orderAddress;
export const selectGetAddressSuccess = (state) => state.order.getAddressSuccess;

export default orderSlice.reducer;
