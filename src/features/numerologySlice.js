import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createNumerologyReport, createFullNumerologyReport } from "~/api/numerologyAPI";

const initialState = {
    values: [],
    value: {},
    loading: false,
    freeReportError: null,
    fullReportError: null,
    freeReportSuccess: false,
    fullReportSuccess: false,

};
export const addFreeNumerologyReport = createAsyncThunk("/create", async (customerInputData) => {

    const response = await createNumerologyReport(customerInputData);
    localStorage.setItem('data', JSON.stringify(response.data))
    return response.data;

});

export const addFullVipNumerologyReport = createAsyncThunk(
    "/create-full-vip",
    async (customerInputData) => {
        localStorage.setItem('data', JSON.stringify(response.data))
        const response = await createFullNumerologyReport(customerInputData);
        console.log(response);
        return response.data;
    }
)

export const numerologySlice = createSlice({
    name: "numerology",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setFreeReportError: (state, action) => {
            state.freeReportError = action.payload;
        },
        setFullReportError: (state, action) => {
            state.fullReportError = action.payload;
        },
        setValues: (state, action) => {
            state.values = action.payload;
        },
        setCustomerInputFormSuccess: (state, action) => {
            state.value = action.payload;
        },
        setFreeReportSuccess: (state, action) => {
            state.freeReportSuccess = action.payload;
        },
        setFullReportSuccess: (state, action) => {
            state.fullReportSuccess = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            //Update states of add report action
            .addCase(addFreeNumerologyReport.pending, (state) => {
                state.freeReportSuccess = false;
                state.loading = true;
                state.freeReportError = false;
            })
            .addCase(addFreeNumerologyReport.rejected, (state, action) => {
                state.freeReportSuccess = false;
                state.loading = false;
                state.freeReportError = action.payload;
            })
            .addCase(addFreeNumerologyReport.fulfilled, (state, action) => {
                state.freeReportSuccess = true;
                state.loading = false;
                state.value = action.payload.data;
                state.freeReportError = false;
            })
    },
});
export const {
    setLoading,
    setValues,
    setFreeReportError,
    setFullReportError,
    setFreeReportSuccess,
    setFullReportSuccess,
    setCustomerInputFormSuccess
} = numerologySlice.actions;

export const selectLoading = (state) => state.numerology.loading;
export const selectFreeReportError = (state) => state.numerology.freeReportError;
export const selectFreeReportSuccess = (state) => state.numerology.freeReportSuccess;
export const selectFullReportError = (state) => state.numerology.fullReportError;
export const selectFullReportSuccess = (state) => state.numerology.fullReportSuccess;
export const selectNumerologyReportAdded = (state) => state.numerology.value;

export default numerologySlice.reducer;