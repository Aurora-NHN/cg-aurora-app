import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { forgotPassword } from "~/api/userAPI";
import { logout } from "~/api/loginAPI";

const initialState = {
  value: null,
  loading: false,
  error: null,
  forgotPasswordSuccess: false,
  logoutSuccess: false,
  token: localStorage.getItem("token"),
};

export const forgotPasswordUser = createAsyncThunk("/forgot-password", async (email) => {
  const response = await forgotPassword(email);
//   if (response.status !== 200) {
//     return rejectWithValue(response.data.message);
//   }
  return response.data;
});

export const logoutUser = createAsyncThunk(
  "/logout",
  async () => {
    console.log("logout here");
    const response = await logout();
    console.log(response);
    console.log("logout here")
    //   if (response.status !== 200) {
    //     return rejectWithValue(response.data.message);
    //   }

    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.forgotPasswordSuccess = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPasswordUser.pending, (state) => {
        state.forgotPasswordSuccess = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(forgotPasswordUser.rejected, (state, action) => {
        state.forgotPasswordSuccess = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(forgotPasswordUser.fulfilled, (state, action) => {
        state.forgotPasswordSuccess = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })
      .addCase(logoutUser.pending, (state) => {
        state.logoutSuccess = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.logoutSuccess = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.logoutSuccess = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
        localStorage.removeItem("token");
      });
  },
});

export const { setLoading, setError, setSuccess } = userSlice.actions;

export const selectLoading = (state) => state.user.loading;
export const selectError = (state) => state.user.error;
export const selectForgotPasswordSuccess = (state) => state.user.forgotPasswordSuccess;
export const selectForgotPassword = (state) => state.user.value;
export const selectLogoutSuccess = (state) => state.user.logoutSuccess;

export const setLoadingTrueIfCalled = (isCalled) => (dispatch, getState) => {
  const currentValue = selectLoading(getState());
  if (currentValue === isCalled) {
    dispatch(setLoading(true));
  }
};

export default userSlice.reducer;
