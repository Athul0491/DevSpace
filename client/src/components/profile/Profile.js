import React, { useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCred from "./ProfileCred";
import ProfileGithub from "./ProfileGithub";
import Spinner from "../reusable/Spinner";
import { profile, loading } from "../../reducers/profileReducer";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setProfile } from "../../reducers/profileReducer";
import { profileLoading } from "../../reducers/profileReducer";
import axios from "axios";

const Profile = () => {
  const Loading = useSelector(loading);
  const dispatch = useDispatch();
  const Profile = useSelector(profile);
  const location = useLocation();
  let profileContent;
  if (Profile === null || Loading) {
    profileContent = <Spinner />;
  } else {
    profileContent = (
      <div>
        <ProfileHeader />
        <ProfileAbout />
        <ProfileCred />
        {/* {Profile.githubusername ? <ProfileGithub /> : null} */}
      </div>
    );
  }
  useEffect(() => {
    // Runs after the first render() lifecycle
    // get current Profile

    const handle = location.pathname.slice(9);
    dispatch(profileLoading());
    // console.log(handle);
    axios
      .get(`/api/profile/handle/${handle}`)
      .then((res) => {
        dispatch(setProfile(res));
        // console.log(res);
        // setPro(res.data);
      })
      .catch((err) => {
        dispatch(setProfile(null));
      });
  }, []);
  return (
    <div className="profile">
      <div className="container">
        <div className="row">
          <div className="col-md-12">{profileContent}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
