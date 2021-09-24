import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import classnames from "classnames";
import { isAuth, user } from "../../reducers/authReducer";
import axios from "axios";
import { error } from "../../reducers/errorReducer";
import { setCurrentError } from "../../reducers/errorReducer";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const CreateProfile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const Auth = useSelector(isAuth);
  if (!Auth) {
    history.push("/login");
  }
  const Error = useSelector(error);
  const [displaySocialInputs, setDisplaySocialInputs] = useState(false);
  const [handle, setHandle] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [skills, setSkills] = useState("");
  const [githubusername, setGithubusername] = useState("");
  const [bio, setBio] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [youtube, setYoutube] = useState("");
  const [instagram, setInstagram] = useState("");
  const [errors, setErrors] = useState({});
  const changeHandle = (e) => {
    setHandle(e.target.value);
  };
  const changeStatus = (e) => {
    setStatus(e.target.value);
  };
  const changeCompany = (e) => {
    setCompany(e.target.value);
  };
  const changeWebsite = (e) => {
    setWebsite(e.target.value);
  };
  const changeLocation = (e) => {
    setLocation(e.target.value);
  };
  const changeSkills = (e) => {
    setSkills(e.target.value);
  };
  const changeGithubusername = (e) => {
    setGithubusername(e.target.value);
  };
  const changeBio = (e) => {
    setBio(e.target.value);
  };
  const changeTwitter = (e) => {
    setTwitter(e.target.value);
  };
  const changeFacebook = (e) => {
    setFacebook(e.target.value);
  };
  const changeInstagram = (e) => {
    setInstagram(e.target.value);
  };
  const changeYoutube = (e) => {
    setYoutube(e.target.value);
  };
  const changeLinkedin = (e) => {
    setLinkedin(e.target.value);
  };
  useEffect(() => {
    const getError = async () => {
      if (Error) {
        setErrors(Error);
      }
    };

    // call the async function
    getError();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submit");
    const profileData = {
      handle: handle,
      company: company,
      website: website,
      location: location,
      skills: skills,
      status: status,
      githubusername: githubusername,
      bio: bio,
      twitter: twitter,
      facebook: facebook,
      linkedin: linkedin,
      youtube: youtube,
      instagram: instagram,
    };
    axios
      .post("/api/profile", profileData)
      .then((res) => history.push("/dashboard"))
      .catch((err) => dispatch(setCurrentError(err.response.data)));
  };
  let socialInputs;
  if (displaySocialInputs) {
    socialInputs = (
      <div>
        {/* TWITTER */}

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <FaTwitter style={{ fontSize: "2.2em" }} />
            </span>
          </div>
          <input
            className={classnames("form-control form-control-lg", {
              "is-invalid": errors.twitter,
            })}
            placeholder="Twitter Page URL"
            name="twitter"
            value={twitter}
            onChange={changeTwitter}
          />
          {errors.twitter && (
            <div className="invalid-feedback">{errors.twitter}</div>
          )}
        </div>
        {/* FACEBOOK */}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <FaFacebook style={{ fontSize: "2.2em" }} />
            </span>
          </div>
          <input
            className={classnames("form-control form-control-lg", {
              "is-invalid": errors.facebook,
            })}
            placeholder="Facebook Page URL"
            name="facebook"
            value={facebook}
            onChange={changeFacebook}
          />
          {errors.facebook && (
            <div className="invalid-feedback">{errors.facebook}</div>
          )}
        </div>

        {/* linkedin */}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <FaLinkedin style={{ fontSize: "2.2em" }} />
            </span>
          </div>
          <input
            className={classnames("form-control form-control-lg", {
              "is-invalid": errors.linkedin,
            })}
            placeholder="Linkedin Page URL"
            name="linkedin"
            value={linkedin}
            onChange={changeLinkedin}
          />
          {errors.linkedin && (
            <div className="invalid-feedback">{errors.linkedin}</div>
          )}
        </div>
        {/* youtube */}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <FaYoutube style={{ fontSize: "2.2em" }} />
            </span>
          </div>
          <input
            className={classnames("form-control form-control-lg", {
              "is-invalid": errors.youtube,
            })}
            placeholder="Youtube Page URL"
            name="youtube"
            value={youtube}
            onChange={changeYoutube}
          />
          {errors.youtube && (
            <div className="invalid-feedback">{errors.youtube}</div>
          )}
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              {/* <i className="fa fa-instagram fa-2x" /> */}
              <FaInstagram style={{ fontSize: "2.2em" }} />
            </span>
          </div>
          <input
            className={classnames("form-control form-control-lg", {
              "is-invalid": errors.instagram,
            })}
            placeholder="Instagram Page URL"
            name="instagram"
            value={instagram}
            onChange={changeInstagram}
          />
          {errors.instagram && (
            <div className="invalid-feedback">{errors.instagram}</div>
          )}
        </div>
      </div>
    );
  }
  const options = [
    { label: "* Select Professional Status", value: 0 },
    { label: "Developer", value: "Developer" },
    { label: "Junior Developer", value: "Junior Developer" },
    { label: "Senior Developer", value: "Senior Developer" },
    { label: "Manager", value: "Manager" },
    { label: "Student or Learning", value: "Student or Learning" },
    { label: "Instructor or Teacher", value: "Instructor or Teacher" },
    { label: "Intern", value: "Intern" },
    { label: "Other", value: "Other" },
  ];

  return (
    <div>
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p>
              <small className="d-block pb-3">* = required field</small>
              <form onSubmit={handleSubmit}>
                {/* handle */}
                <div className="form-group">
                  <input
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.handle,
                    })}
                    placeholder="* Profile Handle"
                    name="handle"
                    value={handle}
                    onChange={changeHandle}
                  />
                  <small className="form-text text-muted">
                    A unique handle for you profile URL. Your full name, company
                    name, nickname, etc. (This can't be changed later)
                  </small>
                  {errors.handle && (
                    <div className="invalid-feedback">{errors.handle}</div>
                  )}
                </div>
                {/* status */}
                <div className="form-group">
                  <select
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.status,
                    })}
                    name="status"
                    value={status}
                    onChange={changeStatus}
                    placeholder="Status"
                  >
                    {options.map((option) => (
                      <option key={option.label} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <small className="form-text text-muted">
                    Give us an idea of where you are at your career
                  </small>
                  {errors.status && (
                    <div className="invalid-feedback">{errors.status}</div>
                  )}
                  {/* company */}
                  <div className="form-group">
                    <input
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.company,
                      })}
                      placeholder="Company"
                      name="company"
                      value={company}
                      onChange={changeCompany}
                    />
                    <small className="form-text text-muted">
                      Could be your own company or the one you work for
                    </small>
                    {errors.company && (
                      <div className="invalid-feedback">{errors.company}</div>
                    )}
                  </div>
                  {/* website */}
                  <div className="form-group">
                    <input
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.website,
                      })}
                      placeholder="Website"
                      name="website"
                      value={website}
                      onChange={changeWebsite}
                    />
                    <small className="form-text text-muted">
                      Could be your own website or a company one
                    </small>
                    {errors.website && (
                      <div className="invalid-feedback">{errors.website}</div>
                    )}
                  </div>
                  {/* location */}
                  <div className="form-group">
                    <input
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.location,
                      })}
                      placeholder="Location"
                      name="location"
                      value={location}
                      onChange={changeLocation}
                    />
                    <small className="form-text text-muted">
                      City or city & state suggested (eg. Mumbai, Maharashtra)
                    </small>
                    {errors.location && (
                      <div className="invalid-feedback">{errors.location}</div>
                    )}
                  </div>
                  {/* skills */}
                  <div className="form-group">
                    <input
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.skills,
                      })}
                      placeholder="Skills"
                      name="skills"
                      value={skills}
                      onChange={changeSkills}
                    />
                    <small className="form-text text-muted">
                      Please use comma separated values (eg.
                      HTML,CSS,JavaScript,PHP
                    </small>
                    {errors.skills && (
                      <div className="invalid-feedback">{errors.skills}</div>
                    )}
                  </div>
                  {/* github username */}
                  <div className="form-group">
                    <input
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.githubusername,
                      })}
                      placeholder="Github Username"
                      name="githubusername"
                      value={githubusername}
                      onChange={changeGithubusername}
                    />
                    <small className="form-text text-muted">
                      If you want your latest repos and a Github link, include
                      your username
                    </small>
                    {errors.githubusername && (
                      <div className="invalid-feedback">
                        {errors.githubusername}
                      </div>
                    )}
                  </div>
                  {/* bio */}
                  <div className="form-group">
                    <textarea
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.bio,
                      })}
                      placeholder="Short Bio"
                      name="bio"
                      value={bio}
                      onChange={changeBio}
                    />

                    <small className="form-text text-muted">
                      Tell us a little about yourself
                    </small>

                    {errors.bio && (
                      <div className="invalid-feedback">{errors.bio}</div>
                    )}
                  </div>

                  {/* display social inputs */}
                  <div className="mb-3">
                    <button
                      type="button"
                      onClick={() => {
                        setDisplaySocialInputs(!displaySocialInputs);
                      }}
                      className="btn btn-light"
                    >
                      Add Social Network Links
                    </button>
                    <span className="text-muted">Optional</span>
                  </div>
                  {socialInputs}
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateProfile;
