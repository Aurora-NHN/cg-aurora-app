import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createNumerologyReport, createFullNumerologyReport} from "~/api/numerologyAPI";

const initialState = {
    values: [],
    value: {},
    loading: false,
    error: null,
    success: false,
};
export const addFreeNumerologyReport = createAsyncThunk("/create", async(customerInputData) => {

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
    reducers:{
        setLoading:(state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setValues: (state, action) => {
            state.values = action.payload;
        },
        setCustomerInputFormSuccess: (state, action) => {
            state.success = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        //Update states of add report action
            .addCase(addFreeNumerologyReport.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(addFreeNumerologyReport.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(addFreeNumerologyReport.fulfilled,(state, action) => {
                state.success = true;
                state.loading = false;
                state.value = action.payload.data;
                state.error = false;
            })
            // từ đây
            // .addCase(addFullVipNumerologyReport().pending, (state) => {
            //     state.success = false;
            //     state.loading = true;
            //     state.error = false;
            // })
            // .addCase(addFullVipNumerologyReport().rejected, (state, action) => {
            //     state.success = false;
            //     state.loading = false;
            //     state.error = action.error;
            // })
            // .addCase(addFullVipNumerologyReport().fulfilled,(state, action) => {
            //     state.success = true;
            //     state.loading = false;
            //     state.value = action.payload.data;
            //     state.error = false;
            // })
    },
});
export const {
    setLoading,
    setError,
    setValues,
    setCustomerInputFormSuccess
} = numerologySlice.actions;

export const selectLoading = (state) => state.numerology.loading;
export const selectError = (state) => state.numerology.error;
export const selectSuccess = (state) => state.numerology.success;
export const selectNumerologyReportAdded = (state) => state.numerology.value;

export default numerologySlice.reducer;