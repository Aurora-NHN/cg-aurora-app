import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { provincesAPI,districtsAPI,wardsAPI} from "~/api/provinceAPI";

export const getProvince = createAsyncThunk(
  "province/getProvince",
  async () => {
    const response = await provincesAPI();
    return response.data.results;
  }
);

export const getDistrict = createAsyncThunk("province/getDistrict", async (provinceId) => {
  const response = await districtsAPI(provinceId);
  return response.data.results;
});

export const getWard = createAsyncThunk("province/getWard", async (districtId) => {
  const response = await wardsAPI(districtId);
  return response.data.results;
});

const provinceSlice = createSlice({
  name: "province",
  initialState: {
    provinces: [],
    districts: [],
    wards: [],
    loading: false,
    success: false,
    error: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProvince.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getProvince.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getProvince.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.provinces = action.payload;
        state.error = false;
      })
      .addCase(getDistrict.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getDistrict.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getDistrict.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.districts = action.payload;
        state.error = false;
      })
      .addCase(getWard.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getWard.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getWard.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.wards = action.payload;
        state.error = false;
      });
  },
});

export const { setLoading, setSuccess, setError } = provinceSlice.actions;
export const selectLoading = (state) => state.province.loading;
export const selectError = (state) => state.province.error;
export const selectSuccess = (state) => state.province.success;
export const selectProvince = (state) => state.province.provinces;
export const selectWard = (state) => state.province.wards;
export const selectDistrist = (state) => state.province.districts;

export default provinceSlice.reducer;
