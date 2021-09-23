import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { profileLoading } from "../../reducers/profileReducer";
import { getProfile } from "../../reducers/profileReducer";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Runs after the first render() lifecycle
    // get current profile
    dispatch(profileLoading());
    axios
      .get("/api/profile")
      .then((res) => {
        dispatch(getProfile(res.data));
        console.log(res);
      })
      .catch((err) => {
        getProfile({});
      });
  }, []);
  return (
    <div>
      <h1>dashboard</h1>
    </div>
  );
};

export default Dashboard;
