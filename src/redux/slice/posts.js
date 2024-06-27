import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPostsApi } from "../api";

export const fetchPosts = createAsyncThunk('fetchPosts', async () => {
    const data = await fetchPostsApi();
    return data;
  });

const postsSlice = createSlice({
    name:"posts",
    initialState:{
        isLoading : false,
        data: null,
        isError:false,
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.isError = true;
        });
    },
})

export default postsSlice.reducer