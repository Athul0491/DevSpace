import { createSlice } from "@reduxjs/toolkit";
const initialState = { error: null };

// function errorReducer(state = initialState, action) {
//   switch (action.type) {
//     case GET_ERRORS:
//       return action.payload;

//     default:
//       return state;
//   }
// }
export const errorReducer = createSlice({
  name: "error",
  initialState,
  reducers: {
    setCurrentError: (store = initialState, action) => {
      store.error = action.payload;
    },
  },
});
export const error = (store) => store;
export const { setCurrentError } = errorReducer.actions;
export default errorReducer.reducer;
