import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCommentsApi, fetchPhostosApi, fetchPostsApi } from '../api';
 // adjust the path as needed

export const fetchCombinedData = createAsyncThunk('fetchCombinedData', async () => {
  const [posts, photos, comments] = await Promise.all([
    fetchPostsApi(),
    fetchPhostosApi(),
    fetchCommentsApi()
  ]);

  const combinedData = posts.map((post, index) => ({
    title: post.title,
    image: photos[index]?.url,
    comment: comments[index]?.body
  }));

  return combinedData;
});

const dataSlice = createSlice({
    name: 'data',
    initialState: {
      isLoading: false,
      data: [],
      isError: false,
    },
    extraReducers: (builder) => {
      builder.addCase(fetchCombinedData.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(fetchCombinedData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
      builder.addCase(fetchCombinedData.rejected, (state, action) => {
        console.error('Error', action.error);
        state.isError = true;
      });
    },
  });

  export default dataSlice.reducer