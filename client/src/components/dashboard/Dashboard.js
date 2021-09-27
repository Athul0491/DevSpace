import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { setCurrentUser } from "../../reducers/authReducer";
import { setCurrentError } from "../../reducers/errorReducer";
import classnames from "classnames";
import Experience from "./Experience";
import Education from "./Education";

import { profileLoading } from "../../reducers/profileReducer";
import { setProfile } from "../../reducers/profileReducer";
import { isAuth, user } from "../../reducers/authReducer";
import { profile, loading } from "../../reducers/profileReducer";
import Spinner from "../reusable/Spinner";

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const User = useSelector(user);
  const Auth = useSelector(isAuth);
  const Profile = useSelector(profile);
  const Loading = useSelector(loading);
  const onDelete = (e) => {
    // deleteAccount();
    if (window.confirm("Are you sure? This cannot be undone!")) {
      axios
        .delete("/api/profile")
        .then((res) => {
          dispatch(setCurrentUser({}));
          // history.push("/dashboard");
        })
        .catch((err) => dispatch(setCurrentError(err)));
    }
  };
  let dashboardContent;
  if (!Auth) {
    history.push("/login");
  }
  if (Profile === null || Loading) {
    dashboardContent = <Spinner />;
  } else {
    if (Profile && Object.keys(Profile).length > 0) {
      dashboardContent = (
        <div>
          <p className="lead text-muted">
            {" "}
            Welcome{" "}
            <Link to="{`/profile/${profile.handle}`}"> {User.name}</Link>
          </p>

          <div className="btn-group mb-4" role="group">
            <Link to="/edit-profile" className="btn btn-light">
              <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
            </Link>
            <Link to="/add-experience" className="btn btn-light">
              <i className="fab fa-black-tie text-info mr-1"></i>
              Add Experience
            </Link>
            <Link to="/add-education" className="btn btn-light">
              <i className="fas fa-graduation-cap text-info mr-1"></i>
              Add Education
            </Link>
          </div>
          <Experience experience={Profile.experience} />
          <Education education={Profile.education} />
          <div style={{ marginBottom: "60px" }} />
          <button
            onClick={() => {
              onDelete();
            }}
            className="btn btn-danger"
          >
            Delete My Account
          </button>
        </div>
      );
      // console.log(Profile);
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
        dispatch(setProfile(res));
        // console.log(res);
      })
      .catch((err) => {
        dispatch(setProfile({}));
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
