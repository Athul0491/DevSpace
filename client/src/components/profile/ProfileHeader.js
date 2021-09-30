import React, { useState } from "react";
import isEmpty from "../../utils/isEmpty";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { profile } from "../../reducers/profileReducer";
import { useSelector } from "react-redux";
const ProfileHeader = () => {
  const Profile = useSelector(profile);
  const [profiles, setProfiles] = useState(Profile);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-info text-white mb-3">
          <div className="row">
            <div className="col-4 col-md-3 m-auto">
              <img
                className="rounded-circle"
                src={profiles.user.avatar}
                alt=""
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="display-4 text-center">{profiles.user.name}</h1>
            <p className="lead text-center">
              {profiles.status}{" "}
              {isEmpty(profiles.company) ? null : (
                <span>at {profiles.company}</span>
              )}
            </p>
            {isEmpty(profiles.location) ? null : <p>{profiles.location}</p>}
            <p>
              {isEmpty(profiles.website) ? null : (
                <a
                  className="text-white p-2"
                  href={profiles.website}
                  target="_blank"
                >
                  <FaGlobe style={{ fontSize: "2.2em" }} />
                </a>
              )}

              {isEmpty(profiles.social && profiles.social.twitter) ? null : (
                <a
                  className="text-white p-2"
                  href={profiles.social.twitter}
                  target="_blank"
                >
                  <FaTwitter style={{ fontSize: "2.2em" }} />
                </a>
              )}

              {isEmpty(profiles.social && profiles.social.facebook) ? null : (
                <a
                  className="text-white p-2"
                  href={profiles.social.facebook}
                  target="_blank"
                >
                  <FaFacebook style={{ fontSize: "2.2em" }} />
                </a>
              )}

              {isEmpty(profiles.social && profiles.social.linkedin) ? null : (
                <a
                  className="text-white p-2"
                  href={profiles.social.linkedin}
                  target="_blank"
                >
                  <FaLinkedin style={{ fontSize: "2.2em" }} />
                </a>
              )}

              {isEmpty(profiles.social && profiles.social.youtube) ? null : (
                <a
                  className="text-white p-2"
                  href={profiles.social.youtube}
                  target="_blank"
                >
                  <FaYoutube style={{ fontSize: "2.2em" }} />
                </a>
              )}

              {isEmpty(profiles.social && profiles.social.instagram) ? null : (
                <a
                  className="text-white p-2"
                  href={profiles.social.instagram}
                  target="_blank"
                >
                  <FaInstagram style={{ fontSize: "2.2em" }} />
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
