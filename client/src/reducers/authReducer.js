import isEmpty from "../isEmpty";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state = initialState, action) => {
      state.isAuthenticated = !isEmpty(action.payload);
      state.user = action.payload;
    },
  },
});
// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_CURRENT_USER:
//       return {
//         ...state,
//         isAuthenticated: !isEmpty(action.payload),
//         user: action.payload,
//       };
//     default:
//       return state;
//   }
// };
export const { setCurrentUser } = authReducer.actions;
export const isAuth = (state) => state.auth.isAuthenticated;
export const user = (state) => state.auth.user;
export default authReducer.reducer;
