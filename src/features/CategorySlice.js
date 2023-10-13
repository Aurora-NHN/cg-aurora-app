import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { findCategories } from "~/api/categoryAPI";

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async () => {
    const response = await findCategories();
    return response;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    values: [],
    value: null,
    loading: false,
    error: null,
    success: false,
    subCategoryId: null,
  },
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
    setSubCategoryId: (state, action) => {
      state.subCategoryId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.values = action.payload;
        state.error = false;
      });
  },
});

export const { setLoading, setError, setSuccess,setSubCategoryId} = categorySlice.actions;
export const selectLoading = (state) => state.category.loading;
export const selectError = (state) => state.category.error;
export const selectSuccess = (state) => state.category.success;
export const selectCategories = (state) => state.category.values;
export const selectSubCategoryId = (state) => state.category.subCategoryId;

export default categorySlice.reducer;
