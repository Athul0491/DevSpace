import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

import { profileLoading } from "../../reducers/profileReducer";
import { getProfile } from "../../reducers/profileReducer";
import { user } from "../../reducers/authReducer";
import { profile, loading } from "../../reducers/profileReducer";
import Spinner from "../reusable/Spinner";

const Dashboard = () => {
  const dispatch = useDispatch();
  const User = useSelector(user);
  const Profile = useSelector(profile);
  const Loading = useSelector(loading);
  let dashboardContent;
  if (Profile === null || Loading) {
    dashboardContent = <Spinner />;
  } else {
    if (Profile && Object.keys(Profile).length > 0) {
      dashboardContent = <h4> brrrr</h4>;
      console.log(Profile);
    } else {
      console.log(Profile);
      dashboardContent = (
        <div>
          <p className="lead text-muted"> Welcome {User.name}</p>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-lg btn-info">
            Create Profile
          </Link>
        </div>
      );
    }
  }
  useEffect(() => {
    // Runs after the first render() lifecycle
    // get current profile
    dispatch(profileLoading());
    axios
      .get("/api/profile")
      .then((res) => {
        dispatch(getProfile(res));
        // console.log(res);
      })
      .catch((err) => {
        dispatch(getProfile({}));
      });
  }, []);
  return (
    <div className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-mid-12">
            <h1 className="display-4">Dashboard</h1>
            {dashboardContent}
          </div>
        </div>
      </div>
    </div>
  );
};
<h1>dashboard</h1>;
export default Dashboard;
