import React, { useState } from "react";
import isEmpty from "../../utils/isEmpty";
import { profile } from "../../reducers/profileReducer";
import { useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";

const ProfileAbout = () => {
  const ProfileState = useSelector(profile);
  const [Profile, setProfile] = useState(ProfileState);
  // Get first name
  const firstName = Profile.user.name.trim().split(" ")[0];

  // Skill List
  const skills = Profile.skills.map((skill, index) => (
    <div key={index} className="p-3">
      <FaCheck /> {skill}
    </div>
  ));
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-light mb-3">
          <h3 className="text-center text-info">{firstName}'s Bio</h3>
          <p className="lead">
            {isEmpty(Profile.bio) ? (
              <span>{firstName} does not have a bio</span>
            ) : (
              <span>{Profile.bio}</span>
            )}
          </p>
          <hr />
          <h3 className="text-center text-info">Skill Set</h3>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              {skills}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAbout;
