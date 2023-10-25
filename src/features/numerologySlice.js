import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createNumerologyReport} from "~/api/numerologyAPI";
import {toast} from "react-toastify";

const initialState = {
    values: [],
    value: null,
    loading: false,
    reportSuccess: false,
    reportError: null
};
export const addNumerologyReport = createAsyncThunk(
    "/createNumerologyReport", async (customerInputData, {rejectWithValue}) => {
        console.log('action dispatched')
        const response = await createNumerologyReport(customerInputData);
        if (response.status === 200 || response.status === 201) {
            return response.data;
        } else {
            return rejectWithValue(response.data.message)
        }
    });

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
        setReportSuccess: (state, action) => {
            state.reportSuccess = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            //Update states of add report action
            .addCase(addNumerologyReport.pending, (state) => {
                state.reportSuccess = false;
                state.loading = true;
                state.reportError = null;
            })
            .addCase(addNumerologyReport.rejected, (state, action) => {
                state.reportSuccess = false;
                state.loading = false;
                state.reportError = action.payload;
                toast("Report error!" + action.payload, {type: "error", autoClose: 2000})
            })
            .addCase(addNumerologyReport.fulfilled, (state, action) => {
                console.log('action fulfilled')
                console.log(action.payload.data)
                state.reportSuccess = true;
                state.loading = false;
                state.value = action.payload.data;
                localStorage.setItem('data', JSON.stringify(action.payload.data));
                state.reportError = null;
            })

    },
});
export const {
    setLoading,
    setValues,
    setFreeReportError,
    setFullReportError,
    setReportSuccess,
    setFullReportSuccess,
    setCustomerInputFormSuccess
} = numerologySlice.actions;

export const selectLoading = (state) => state.numerology.loading;
export const selectReportError = (state) => state.numerology.reportError;
export const selectReportSuccess = (state) => state.numerology.reportSuccess;
export const selectFullReportError = (state) => state.numerology.fullReportError;
export const selectFullReportSuccess = (state) => state.numerology.fullReportSuccess;
export const selectNumerologyReportAdded = (state) => state.numerology.value;

export default numerologySlice.reducer;