import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "~/api/loginAPI";
import { forgotPassword } from "~/api/userAPI";

const initialState = {
  value: null,
  loading: false,
  errors: null,
  loginSuccess: false,
  registerSuccess: false,
  // forgotPasswordSuccess: false,
};

export const loginUser = createAsyncThunk(
  "login",
  async (loginData, { rejectWithValue }) => {
    const response = await login(loginData);
    if (response.status !== 200) {
      return rejectWithValue(response.data.message);
    }
    return response.data;
  }
);

export const registerUser = createAsyncThunk(
  "register",
  async (registerData, { rejectWithValue }) => {
    const response = await register(registerData);

    if (response.status !== 201) {
      return rejectWithValue(response.data.message);
    }
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setLoginSuccess: (state, action) => {
      state.loginSuccess = action.payload;
    },
    setRegisterSuccess: (state, action) => {
      state.registerSuccess = action.payload;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginSuccess = false;
        state.loading = true;
        state.errors = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginSuccess = false;
        state.loading = false;
        state.errors = action.error;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginSuccess = true;
        state.loading = false;
        state.value = action.payload;
        state.errors = false;
        localStorage.setItem("token", action.payload.data);
      })
      .addCase(registerUser.pending, (state) => {
        state.registerSuccess = false;
        state.loading = true;
        state.errors = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerSuccess = false;
        state.loading = false;
        state.errors = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerSuccess = true;
        state.loading = false;
        state.errors = false;
      });
  },
});

export const { setLoading, setError, setLoginSuccess, setRegisterSuccess, setValue } =
  loginSlice.actions;

export const selectAuthIsLoading = (state) => state.login.loading;
export const selectAuthIsError = (state) => state.login.errors;
export const selectLoginSuccess = (state) => state.login.loginSuccess;
export const selectRegisterSuccess = (state) => state.login.registerSuccess;
export const selectUserLogin = (state) => state.login.value;
export const selectUserRegister = (state) => state.login.value;

// export const setLoadingTrueIfCalled = (isCalled) => (dispatch, getState) => {
//   const currentValue = selectAuthIsLoading(getState());
//   if (currentValue === isCalled) {
//     dispatch(setLoading(true));
//   }
// };

export default loginSlice.reducer;
