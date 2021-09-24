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
    setProfile: (state = initialState, action) => {
      //   state.isAuthenticated = !isEmpty(action.payload);
      if (action.payload.data) {
        state.profile = action.payload.data;
        state.loading = false;
      } else {
        state.profile = {};
        state.loading = false;
      }
      state.loading = false;
    },
    profileLoading: (state = initialState, action) => {
      state.loading = true;
    },
    profileNotFound: (state = initialState, action) => {},
    clearCurrentProfile: (state = initialState) => {
      state.profile = null;
      state.profiles = null;
      state.loading = false;
    },
    getProfiles: (state = initialState, action) => {},
  },
});
export default profileReducer.reducer;
export const { setProfile } = profileReducer.actions;
export const { profileLoading } = profileReducer.actions;
export const { profileNotFound } = profileReducer.actions;
export const { clearCurrentProfile } = profileReducer.actions;
// export const { getProfiles } = profileReducer.actions;
export const profile = (state) => state.profile.profile;
export const loading = (state) => state.profile.loading;
