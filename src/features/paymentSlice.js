import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createOrder} from "~/api/vnPayAPI";
import {toast} from "react-toastify";

const initialState = {
    value: null,
    values: {},
    loading: false,
    errors: null,
    orderSuccess: null,
    billStatus: false,
};

export const createOrderVNPay = createAsyncThunk(
    "/create-order",
    async (data,thunkAPI) => {
        const response = await createOrder(data);
        if (response.status !== 200){
            return thunkAPI.rejectWithValue(response.data)
        }
        return response.data;
    }
);

export const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        setErrors: (state, action) => {
            state.errors = action.payload;
        },
        setOrderSuccess: (state, action) => {
            state.getOrderSuccess = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createOrderVNPay.pending, (state) => {
                state.orderSuccess = false;
                state.loading = true;
                state.errors = false;
            })
            .addCase(createOrderVNPay.rejected, (state, action) => {
                state.orderSuccess = false;
                state.loading = false;
                state.errors = action.payload;
                toast.error(action.payload)
            })
            .addCase(createOrderVNPay.fulfilled, (state, action) => {
                state.orderSuccess = true;
                state.loading = false;
                state.value = action.payload;
                state.errors = false;
                window.location.href = action.payload;
            });
    },
});

export const {
    setOrderSuccess,
} = paymentSlice.actions;

export const selectPaymentIsError = (state) => state.payment.errors;
export const selectOrderSuccess = (state) => state.payment.orderSuccess;
export const selectOrder = (state) => state.payment.value;
export const selectBillStatus = (state) => state.payment.billStatus;

export default paymentSlice.reducer;
