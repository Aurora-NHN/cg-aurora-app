import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {login, loginWithGoogle, register} from "~/api/loginAPI";
import {toast} from "react-toastify";

const initialState = {
    value: null,
    loading: false,
    loginError: null,
    registerError: null,
    loginSuccess: false,
    registerSuccess: false,
};

export const loginUser = createAsyncThunk(
    "login",
    async (loginData, {rejectWithValue}) => {
        const response = await login(loginData);
        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }
        return response.data;
    }
);

export const googleLogin = createAsyncThunk(
    "google-login",
    async (credential, {rejectWithValue}) => {
        const response = await loginWithGoogle(credential);
        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }
        return response.data;
    }
);

export const registerUser = createAsyncThunk(
    "register",
    async (registerData, {rejectWithValue}) => {
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
        setLoginError: (state, action) => {
            state.loginError = action.payload;
        },
        setRegisterError: (state, action) => {
            state.registerError = action.payload;
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
            //login user
            .addCase(loginUser.pending, (state) => {
                state.loginSuccess = false;
                state.loading = true;
                state.loginError = false;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loginSuccess = false;
                state.loading = false;
                state.loginError = action.payload;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loginSuccess = true;
                state.loading = false;
                state.value = action.payload;
                state.loginError = false;
                console.log(action.payload.data);
                localStorage.setItem("token", action.payload.data.jwtToken);
                localStorage.setItem("user", JSON.stringify(action.payload.data.userResponseDTO));
            })
            //login with Google
            .addCase(googleLogin.pending, (state) => {
                state.loginSuccess = false;
                state.loading = true;
                state.loginError = false;
                toast("Signing in...",{type:"info", isLoading:true, toastId:1})
            })
            .addCase(googleLogin.rejected, (state, action) => {
                state.loginSuccess = false;
                state.loading = false;
                state.loginError = action.payload;
                toast.error("Login with Google Error!")
                toast.dismiss(1)
            })
            .addCase(googleLogin.fulfilled, (state, action) => {
                state.loginSuccess = true;
                state.loading = false;
                state.value = action.payload;
                state.loginError = false;
                localStorage.setItem("token", action.payload.data.jwtToken);
                localStorage.setItem("user", JSON.stringify(action.payload.data.userResponseDTO));
                toast.dismiss(1)
            })
            // register user
            .addCase(registerUser.pending, (state) => {
                state.registerSuccess = false;
                state.loading = true;
                state.registerError = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.registerSuccess = false;
                state.loading = false;
                state.registerError = action.payload;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.registerSuccess = true;
                state.loading = false;
                state.registerError = false;
            });
    },
});

export const {setLoading, setLoginError, setRegisterError, setLoginSuccess, setRegisterSuccess, setValue} =
    loginSlice.actions;

export const selectAuthIsLoading = (state) => state.login.loading;
export const selectAuthIsError = (state) => state.login.loginError;
export const selectLoginSuccess = (state) => state.login.loginSuccess;
export const selectRegisterSuccess = (state) => state.login.registerSuccess;
export const selectUserLogin = (state) => state.login.value;
export const selectUserRegister = (state) => state.login.value;
export const selectRegisterError = (state) => state.login.registerError;

export default loginSlice.reducer;
