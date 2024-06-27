import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UnsplashPhostosApi } from "../api";


export const fetchImages = createAsyncThunk('fetchPhotos', async () => {
    const data = await UnsplashPhostosApi();
    return data;
  });

  const imagesSlice = createSlice({
    name: 'images',
    initialState: {
      isLoading: false,
      data: [],
      isError: false,
    },
    
    extraReducers: (builder) => {
      builder.addCase(fetchImages.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(fetchImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
      builder.addCase(fetchImages.rejected, (state, action) => {
        console.log('Error', action.error);
        state.isError = true;
      });
    },
  });
  
  export default imagesSlice.reducer;
  