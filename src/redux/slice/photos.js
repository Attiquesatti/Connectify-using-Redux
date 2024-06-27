import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPhostosApi } from "../api";

export const fetchPhotos = createAsyncThunk('fetchPhotos', async () => {
    const data = await fetchPhostosApi();
    return data;
  });

const photosSlice = createSlice({
    name : "photos",
    initialState:{
        isLoading : false,
        data: null,
        isError:false,
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchPhotos.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPhotos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchPhotos.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.isError = true;
        });
    },
})

export default photosSlice.reducer