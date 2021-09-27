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
      if (action.payload.data) {
        state.profile = action.payload.data;
      } else {
        state.profile = action.payload;
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
    setProfiles: (state = initialState, action) => {
      if (action.payload.data) {
        state.profiles = action.payload.data;
      } else {
        state.profiles = action.payload;
      }
      state.loading = false;
    },
  },
});
export default profileReducer.reducer;
export const { setProfile } = profileReducer.actions;
export const { setProfiles } = profileReducer.actions;

export const { profileLoading } = profileReducer.actions;
export const { profileNotFound } = profileReducer.actions;
export const { clearCurrentProfile } = profileReducer.actions;
export const profile = (state) => state.profile.profile;
export const profiles = (state) => state.profile.profile;

export const loading = (state) => state.profile.loading;

// export const { getProfiles } = profileReducer.actions;
