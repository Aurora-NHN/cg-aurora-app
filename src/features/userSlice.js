import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "~/apis/userAPI";

const initialState = {
  value: null,
  loading: false,
  error: null,
  success: false,
};

export const loginUser = createAsyncThunk("login", async (loginData) => {
  const response = await login(loginData);
  return response.data;
});

export const registerUser = createAsyncThunk(
  "register",
  async (registerData) => {
    const response = await register(registerData);
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
      state.success = action.payload;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
        localStorage.setItem("token", action.payload.jwtToken);
      })
      .addCase(registerUser.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.error = false;
      });
  },
});

export const { setLoading, setError, setSuccess, setValue } = userSlice.actions;

export const selectLoading = (state) => state.user.loading;
export const selectError = (state) => state.user.error;
export const selectSuccess = (state) => state.user.success;
export const selectUserLogin = (state) => state.user.value;
export const selectUserRegister = (state) => state.user.value;

export const setLoadingTrueIfCalled = (isCalled) => (dispatch, getState) => {
  const currentValue = selectLoading(getState());
  if (currentValue === isCalled) {
    dispatch(setLoading(true));
  }
};

export default userSlice.reducer;
