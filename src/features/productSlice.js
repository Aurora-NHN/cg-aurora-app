import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  findProducts,
  findProductsByKeyWord,
  findProductsSortByPriceDescending,
  findProductsSortByPriceAscending,
  findProductsBySubCategoryId,
} from "~/api/productAPI";

const initialState = {
  values: [],
  value: null,
  loading: false,
  error: null,
  success: false,
  productDetail: null
  
};

export const getProducts = createAsyncThunk("/products", async (pageNumber) => {
  const response = await findProducts(pageNumber);
  return response.data.content;
});

export const getProductsBySubCategoryId = createAsyncThunk(
  "/products/sub-category",
  async ({ subCategoryId, pageNumber, sortOrder }) => {
    const response = await findProductsBySubCategoryId(
      subCategoryId,
      pageNumber,
      sortOrder
    );
    return response.data.content;
  }
);

export const getProductsByKeyword = createAsyncThunk(
  "/products/search",
  async ({ keyword, pageNumber, sortOrder }) => {
    const response = await findProductsByKeyWord(
      keyword,
      pageNumber,
      sortOrder
    );
    return response.data.content;
  }
);

export const getProductsSortByPriceDescending = createAsyncThunk(
  "/products/sort/priceDescending",
  async (pageNumber) => {
    const response = await findProductsSortByPriceDescending(pageNumber);
    return response.data.content;
  }
);
export const getProductsSortByPriceAscending = createAsyncThunk(
  "/products/sort/priceAscending",
  async (pageNumber) => {
    const response = await findProductsSortByPriceAscending(pageNumber);
    return response.data.content;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
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
    setProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.values = action.payload;
        state.error = false;
      })
      .addCase(getProductsBySubCategoryId.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getProductsBySubCategoryId.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getProductsBySubCategoryId.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.values = action.payload;
        state.error = false;
      })
      .addCase(getProductsSortByPriceAscending.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getProductsSortByPriceAscending.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getProductsSortByPriceAscending.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.values = action.payload;
        state.error = false;
      })
      .addCase(getProductsByKeyword.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getProductsByKeyword.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getProductsByKeyword.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.values = action.payload;
        state.error = false;
      })
      .addCase(getProductsSortByPriceDescending.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getProductsSortByPriceDescending.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getProductsSortByPriceDescending.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.values = action.payload;
        state.error = false;
      });
  },
});

export const { setLoading, setError, setSuccess,setProductDetail } = productSlice.actions;

export const selectLoading = (state) => state.product.loading;
export const selectError = (state) => state.product.error;
export const selectSuccess = (state) => state.product.success;
export const selectProductDetail = (state) => state.product.productDetail;
export const selectProductList = (state) => state.product.values;
export const setLoadingTrueIfCalled = (isCalled) => (dispatch, getState) => {
  const currentValue = selectLoading(getState());
  if (currentValue === isCalled) {
    dispatch(setLoading(true));
  }
};

export default productSlice.reducer;
