import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCommentsApi } from "../api";

export const fetchComments = createAsyncThunk('fetchComments', async () => {
    const data = await fetchCommentsApi();
    return data;
  });

const commentSlice = createSlice({
    name : "comments",
    initialState:{
        isLoading : false,
        data: null,
        isError:false,
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchComments.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchComments.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.isError = true;
        });
    },
});

export default commentSlice.reducer