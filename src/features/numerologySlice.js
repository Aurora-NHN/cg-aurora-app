import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    createNumerologyReport,
    getAllNumerologyReportForUser,
    getPageNumerologyReportForUser
} from "~/api/numerologyAPI";
import {toast} from "react-toastify";
import {tr} from "date-fns/locale";

const initialState = {
    pages: {},
    value: null,
    loading: false,
    reportSuccess: false,
    reportError: null,
    getHistorySuccess: false,
    getHistoryError: null,
    numerologyDetail: null,
    reportDetailSuccess: false
};
export const addNumerologyReport = createAsyncThunk(
    "/createNumerologyReport",
    async (customerInputData, {rejectWithValue}) => {
        const response = await createNumerologyReport(customerInputData);
        if (response.status === 200 || response.status === 201) {
            return response.data;
        } else {
            return rejectWithValue(response.data.message)
        }
    });
export const findAllNumerologyReportForUser = createAsyncThunk(
    "/getNumerologyReports",
    async (rejectWithValue) => {
        const response = await getAllNumerologyReportForUser();
        if (response.status === 200 || response.status === 201) {
            return response.data;
        } else {
            return rejectWithValue(response.data.message)
        }
    }
);

export const findPageNumerologyReports = createAsyncThunk(
    "/getPageNumerologyReports",
    async (pageNumber) => {
        const response = await getPageNumerologyReportForUser(pageNumber);
        return response.data;
    }
);
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
        },
        setGetHistorySuccess: (state, action) => {
            state.getHistorySuccess = action.payload;
        },
        setNumerologyDetail: (state, action) => {
            state.numerologyDetail = action.payload;
        },
        setReportDetailSuccess: (state, action) => {
            state.reportDetailSuccess = action.payload;
        },
        setTotalPages: (state, action) => {
            state.reportDetailSuccess = action.payload;
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
                state.reportSuccess = true;
                state.loading = false;
                state.value = action.payload.data;
                localStorage.setItem('data', JSON.stringify(action.payload.data));
                state.reportError = null;
            })
            .addCase(findPageNumerologyReports.pending, (state) => {
                state.getHistorySuccess = false;
                state.loading = true;
                state.getHistoryError = false;
            })
            .addCase(findPageNumerologyReports.rejected, (state, action) => {
                state.getHistorySuccess = false;
                state.loading = false;
                state.getHistoryError = action.error;
                toast("Report error!" + action.payload, {type: "error", autoClose: 2000})
            })
            .addCase(findPageNumerologyReports.fulfilled, (state, action) => {
                const data = action.payload
                state.getHistorySuccess = true;
                state.loading = false;
                state.pages = data;
                state.getHistoryError = null;
                if (!data || data.content.length === 0){
                    toast.error("Bạn chưa có báo cáo Vip !", {
                        position: toast.POSITION.TOP_RIGHT,
                        type: toast.TYPE.ERROR,
                    });
                }
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
    setReportDetailSuccess,
    setGetHistorySuccess,
    setCustomerInputFormSuccess,
    setNumerologyDetail
} = numerologySlice.actions;

export const selectLoading = (state) => state.numerology.loading;
export const selectReportError = (state) => state.numerology.reportError;
export const selectReportSuccess = (state) => state.numerology.reportSuccess;
export const selectFullReportError = (state) => state.numerology.fullReportError;
export const selectFullReportSuccess = (state) => state.numerology.fullReportSuccess;
export const selectNumerologyReportAdded = (state) => state.numerology.value;
export const selectNumerologyReports = (state) => state.numerology.values;
export const selectNumerologyDetail = (state) => state.numerology.numerologyDetail;
export const selectGetHistorySuccess = state => state.numerology.getHistorySuccess;
export  const selectPageNumerologyReports = state => state.numerology.pages;
export default numerologySlice.reducer;