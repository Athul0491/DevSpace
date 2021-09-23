import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  profiles: null,
  loading: false,
};
export const profileReducer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfile: (state = initialState, action) => {
      //   state.isAuthenticated = !isEmpty(action.payload);
      state.profile = action.payload.data;
      state.loading = false;
    },
    profileLoading: (state = initialState, action) => {
      state.loading = true;
    },
    profileNotFound: (state = initialState, action) => {},
    clearCurrentProfile: (state = initialState, action) => {
      state.profile = null;
    },
    getProfiles: (state = initialState, action) => {},
  },
});
export default profileReducer.reducer;
export const { getProfile } = profileReducer.actions;
export const { profileLoading } = profileReducer.actions;
export const { profileNotFound } = profileReducer.actions;
export const { clearCurrentProfile } = profileReducer.actions;
// export const { getProfiles } = profileReducer.actions;
export const profile = (state) => state.profile.profile;
export const loading = (state) => state.profile.loading;
