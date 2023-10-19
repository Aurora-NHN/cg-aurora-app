import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  changePassword,
  forgotPassword,
  getUserInfo,
  editUserInfo,
} from "~/api/userAPI";
import { logout } from "~/api/loginAPI";

const initialState = {
  value: {},
  loading: false,
  error: null,
  forgotPasswordSuccess: false,
  changePasswordSuccess: false,
  logoutSuccess: false,
  getInfoSuccess: false,
  editInfoSuccess: false,
  token: null,
};

export const getInfo = createAsyncThunk("/get-info", async () => {
  const response = await getUserInfo();
  return response.data.data;
});

export const editInfo = createAsyncThunk(
  "/edit-info",
  async (info, { rejectWithValue }) => {
    const response = await editUserInfo(info);
    if (response.status !== 200) {
      return rejectWithValue(response.data.message);
    }
    return response.data;
  }
);

export const forgotPasswordUser = createAsyncThunk(
  "/forgot-password",
  async (email, { rejectWithValue }) => {
    const response = await forgotPassword(email);
    if (response.status !== 200) {
      return rejectWithValue(response.data.message);
    }
    return response.data;
  }
);

export const changePasswordUser = createAsyncThunk(
  "/change-password",
  async (data, { rejectWithValue }) => {
    const response = await changePassword(data);
    if (response.status !== 200) {
      return rejectWithValue(response.data.message);
    }
    return response.data;
  }
);

export const logoutUser = createAsyncThunk("/logout", async (token) => {
  const response = await logout(token);
  return response.data;
});

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
    setForgotPasswordSuccess: (state, action) => {
      state.forgotPasswordSuccess = action.payload;
    },
    setChangePasswordSuccess: (state, action) => {
      state.changePasswordSucess = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLogoutSuccess: (state, action) => {
      state.logoutSuccess = action.payload;
    },
    setGetInfoSuccess: (state, action) => {
      state.getInfoSuccess = action.payload;
    },
    setEditInfoSuccess: (state, action) => {
      state.editInfoSuccess = action.payload;
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
        state.error = action.payload;
      })
      .addCase(forgotPasswordUser.fulfilled, (state, action) => {
        state.forgotPasswordSuccess = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })
      .addCase(changePasswordUser.pending, (state) => {
        state.changePasswordSucess = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(changePasswordUser.rejected, (state, action) => {
        state.changePasswordSucess = false;
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(changePasswordUser.fulfilled, (state, action) => {
        state.changePasswordSucess = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })
      .addCase(getInfo.pending, (state, action) => {
        state.getInfoSuccess = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getInfo.rejected, (state, action) => {
        state.getInfoSuccess = false;
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getInfo.fulfilled, (state, action) => {
        state.getInfoSuccess = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })
      .addCase(editInfo.pending, (state, action) => {
        state.editInfoSuccess = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(editInfo.rejected, (state, action) => {
        state.editInfoSuccess = false;
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editInfo.fulfilled, (state, action) => {
        state.editInfoSuccess = true;
        state.loading = false;
        state.value = action.payload;
        console.log("edit info action.payload: ");
        console.log(action.payload);
        state.error = null;
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
        state.token = null;
        localStorage.removeItem("token");
      });
  },
});

export const {
  setLoading,
  setError,
  setForgotPasswordSuccess,
  setChangePasswordSuccess,
  setToken,
  setLogoutSuccess,
  setGetInfoSuccess,
  setEditInfoSuccess,
} = userSlice.actions;

export const selectLoading = (state) => state.user.loading;
export const selectError = (state) => state.user.error;
export const selectForgotPasswordSuccess = (state) =>
  state.user.forgotPasswordSuccess;
export const selectChangePasswordSuccess = (state) =>
  state.user.changePasswordSucess;
export const selectEditInfoSuccess = (state) => state.user.editInfoSuccess;
export const selectLogoutSuccess = (state) => state.user.logoutSuccess;
export const selectToken = (state) => state.user.token;
export const selectUserInfo = (state) => state.user.value;
export const selectGetInfoSuccess = (state) => state.user.getInfoSuccess;

export default userSlice.reducer;
