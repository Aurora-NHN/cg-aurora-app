import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrder, orderReturn } from "~/api/vnPayAPI";

const initialState = {
  value: null,
  values: {},
  loading: false,
  errors: null,
  getOrderSuccess: false,
  getBillSuccess: false,
};

export const createOrderVNPay = createAsyncThunk(
  "/create-order",
  async (data) => {
    console.log("data: ");
    console.log(data);
    const response = await createOrder(data);
    console.log("create order: ");
    console.log(response.data);
    return response.data;
  }
);

export const getBillVNPay = createAsyncThunk(
  "/get-bill",
  async () => {
    const response = await orderReturn();
    return response.data;
  }
);

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setOrderSuccess: (state, action) => {
      state.getOrderSuccess = action.payload;
    },
    setBillSuccess: (state, action) => {
      state.getBillSuccess = action.payload;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setValues: (state, action) => {
      state.values = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderVNPay.pending, (state) => {
        state.getOrderSuccess = false;
        state.loading = true;
        state.errors = false;
      })
      .addCase(createOrderVNPay.rejected, (state, action) => {
        state.getOrderSuccess = false;
        state.loading = false;
        state.errors = action.error;
      })
      .addCase(createOrderVNPay.fulfilled, (state, action) => {
        state.getOrderSuccess = true;
        state.loading = false;
        state.value = action.payload;
        state.errors = false;
      })
      .addCase(getBillVNPay.pending, (state) => {
        state.getBillSuccess = false;
        state.loading = true;
        state.errors = false;
      })
      .addCase(getBillVNPay.rejected, (state, action) => {
        state.getBillSuccess = false;
        state.loading = false;
        state.errors = action.payload;
      })
      .addCase(getBillVNPay.fulfilled, (state, action) => {
        state.getBillSuccess = true;
        state.loading = false;
        state.errors = false;
        state.values = action.payload;
      });
  },
});

export const {
  setLoading,
  setErrors,
  setOrderSuccess,
  setBillSuccess,
  setValue,
  setValues,
} = paymentSlice.actions;

export const selectPaymentIsLoading = (state) => state.payment.loading;
export const selectPaymentIsError = (state) => state.payment.errors;
export const selectOrderSuccess = (state) => state.payment.getOrderSuccess;
export const selectBillSuccess = (state) => state.payment.getBillSuccess;
export const selectOrder = (state) => state.payment.value;
export const selectBillVNPay = (state) => state.payment.values;

export default paymentSlice.reducer;
