import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createOrder, getStatus} from "~/api/vnPayAPI";

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
    async (data) => {
        const response = await createOrder(data);
        return response.data;
    }
);

export const getBillStatus = createAsyncThunk(
    "/get-bill-status",
    async () => {
        const response = await getStatus();
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
        setValue: (state, action) => {
            state.value = action.payload;
        },
        setValues: (state, action) => {
            state.values = action.payload;
        },
        setBillStatus: (state, action) => {
            state.values = action.payload;
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
            })
            .addCase(createOrderVNPay.fulfilled, (state, action) => {
                state.orderSuccess = true;
                state.loading = false;
                state.value = action.payload;
                state.errors = false;
            })
            .addCase(getBillStatus.pending, (state) => {
                state.loading = true;
                state.errors = false;
            })
            .addCase(getBillStatus.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
            .addCase(getBillStatus.fulfilled, (state, action) => {
                state.loading = false;
                state.errors = false;
                state.billStatus = action.payload;
            });
    },
});

export const {
    setLoading,
    setOrderSuccess,
    setValue,
    setBillStatus,
    setStatus,
} = paymentSlice.actions;

export const selectPaymentIsLoading = (state) => state.payment.loading;
export const selectPaymentIsError = (state) => state.payment.errors;
export const selectOrderSuccess = (state) => state.payment.orderSuccess;
export const selectOrder = (state) => state.payment.value;
export const selectBillStatus = (state) => state.payment.billStatus;

export default paymentSlice.reducer;
