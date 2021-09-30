import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import errorReducer from "./reducers/errorReducer";
import profileReducer from "./reducers/profileReducer";
import postReducer from "./reducers/postReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
    profile: profileReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
