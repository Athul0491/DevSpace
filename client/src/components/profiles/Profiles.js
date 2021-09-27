import React, { useState, useEffect } from "react";
import Spinner from "../reusable/Spinner";
import { Link } from "react-router-dom";
import isEmpty from "../../utils/isEmpty";

import { setProfiles } from "../../reducers/profileReducer";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { profile, profiles, loading } from "../../reducers/profileReducer";
import { profileLoading } from "../../reducers/profileReducer";
import { useHistory } from "react-router-dom";

const Profiles = () => {
  const Loading = useSelector(loading);
  const dispatch = useDispatch();
  const history = useHistory();
  const [pro, setPro] = useState([]);
  const Profile = useSelector(profile);
  //   useEffect(() => {
  //     // Runs after the first render() lifecycle
  //     // get current profile
  //     dispatch(profileLoading());
  //     axios
  //       .get("/api/profile/all")
  //       .then((res) => {
  //         dispatch(setProfiles(res));
  //         // console.log(res);
  //       })
  //       .catch((err) => {
  //         dispatch(setProfiles());
  //       });
  //   }, []);

  const Profiles = pro;
  //   const Profiles = useSelector(profiles);
  let profileItems;

  if (Profiles === null || Loading) {
    profileItems = <Spinner />;
  } else {
    if (Profiles && Profiles.length > 0) {
      profileItems = (
        <div>
          {Profiles.map((Profile) => (
            <div
              key={Profile.user._id}
              className="card card-body bg-light mb-3"
            >
              <div className="row">
                <div className="col-2">
                  <img
                    src={Profile.user.avatar}
                    alt=""
                    className="rounded-circle"
                  ></img>
                </div>
                <div className="col-lg-9 col-md-4 col-8">
                  <h3>{Profile.user.name}</h3>
                  <p>
                    {Profile.status}
                    {isEmpty(Profile.company) ? null : (
                      <span> at {Profile.company}</span>
                    )}
                  </p>
                  <p>
                    {isEmpty(Profile.location) ? null : (
                      <span>{Profile.location}</span>
                    )}
                  </p>
                  <Link
                    to={`/profile/${Profile.handle}`}
                    className="btn btn-info"
                  >
                    View Profile
                  </Link>
                </div>
                <div className="col-md-4 d-none d-md-block">
                  <h4>Skill Set</h4>
                  <ul className="list-group">
                    {Profile.skills.slice(0, 4).map((skill, index) => (
                      <li key={index} className="list-group-item">
                        <i className="fa fa-check pr-1">{skill}</i>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          {/* <h1>profiles found</h1> */}
        </div>
      );
    } else {
      profileItems = (
        <div>
          <h4>No profiles found</h4>
        </div>
      );
    }
  }
  useEffect(() => {
    // Runs after the first render() lifecycle
    // get current profile
    dispatch(profileLoading());
    axios
      .get("/api/profile/all")
      .then((res) => {
        dispatch(setProfiles(res.data));
        console.log(res);
        setPro(res.data);
      })
      .catch((err) => {
        dispatch(setProfiles());
      });
  }, []);
  //   setTimeout(function () {
  //       alert("Hello");
  //     }, 3000);
  return (
    <div className="profile">
      <div className="container">
        <div className="row">
          <div className="col-mid-12">
            <h1 className="display-4 text-center">DEVELOPER PROFILES</h1>
            <p className="lead text-center">
              Browse and connect with developers
            </p>
            {profileItems}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
