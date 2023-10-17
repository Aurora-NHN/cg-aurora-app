import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getBlogsApi} from "~/api/blogApi";


export const getBlogs = createAsyncThunk("/get-blog", async (data,{rejectWithValue}) => {
    const response = await getBlogsApi()
    if (response){
        if (response.status === 200){
            return response.data
        }else {
            return rejectWithValue(response.data)
        }
    }else {
        return rejectWithValue("Connection error!")
    }
});

export const blogSlice = createSlice(
    {
        name: "blogs",
        initialState: {
            values: [],
            success: false,
            loading: false,
            error: null
        },
        extraReducers: builder => {
            builder
                .addCase(getBlogs.pending, (state) => {
                    state.success = false;
                    state.loading = true;
                    state.error = false;
                })
                .addCase(getBlogs.rejected, (state, action) => {
                    state.success = false;
                    state.loading = false;
                    state.error = action.payload;
                })
                .addCase(getBlogs.fulfilled, (state, action) => {
                    state.success = true;
                    state.loading = false;
                    state.error = false;
                    state.values = action.payload;
                })
        }
    }
);

export const selectBlogs = state => state.blogs.values
export const selectGetBlogsSuccess = state => state.blogs.success
export default blogSlice.reducer