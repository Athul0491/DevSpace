import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  post: {},
  loading: false,
};

export const postReducer = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPosts: (state = initialState, action) => {
      if (action.payload.data) {
        state.posts = [action.payload.data, ...state.posts];
      } else {
        state.posts = [action.payload, ...state.posts];
      }
      state.loading = false;
    },
    setPost: (state = initialState, action) => {
      if (action.payload.data) {
        state.post = action.payload.data;
      } else {
        state.post = action.payload;
      }
      state.loading = false;
    },
    postLoading: (state = initialState, action) => {
      state.loading = true;
    },
  },
});
export default postReducer.reducer;

export const { addPosts } = postReducer.actions;
