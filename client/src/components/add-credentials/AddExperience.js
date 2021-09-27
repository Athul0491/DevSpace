import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { error } from "../../reducers/errorReducer";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import classnames from "classnames";
import { isAuth } from "../../reducers/authReducer";
import { setCurrentError } from "../../reducers/errorReducer";
import axios from "axios";
import { setProfile } from "../../reducers/profileReducer";

const AddExperience = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const Error = useSelector(error);
  const Auth = useSelector(isAuth);
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [current, setCurrent] = useState(false);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(false);
  if (!Auth) {
    history.push("/login");
  }
  const changeCompany = (e) => {
    setCompany(e.target.value);
  };
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeFrom = (e) => {
    setFrom(e.target.value);
  };
  const changeTo = (e) => {
    setTo(e.target.value);
  };
  const changeLocation = (e) => {
    setLocation(e.target.value);
  };
  const onCheck = (e) => {
    setDisabled(!disabled);
    setCurrent(!current);
  };
  const changeDescription = (e) => {
    setDescription(e.target.value);
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
    const expData = {
      company,
      current,
      description,
      from,
      location,
      title,
      to,
    };
    console.log(expData);
    axios
      .post("/api/profile/experience", expData)
      .then((res) => {
        history.push("/dashboard");
        dispatch(setProfile(res.data));
      })
      .catch((err) => dispatch(setCurrentError(err.response.data)));
  };
  return (
    <div>
      <div className="add-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Experience</h1>
              <p className="lead text-center">
                Add any job or position that you have had in the past or current
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={handleSubmit}>
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

                  {errors.company && (
                    <div className="invalid-feedback">{errors.company}</div>
                  )}
                </div>
                {/* job title */}
                <div className="form-group">
                  <input
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.title,
                    })}
                    placeholder="Job title"
                    name="title"
                    value={title}
                    onChange={changeTitle}
                  />

                  {errors.title && (
                    <div className="invalid-feedback">{errors.title}</div>
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

                  {errors.location && (
                    <div className="invalid-feedback">{errors.location}</div>
                  )}
                </div>
                {/* from */}
                <div className="form-group">
                  <input
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.from,
                    })}
                    placeholder="From"
                    name="from"
                    type="date"
                    value={from}
                    onChange={changeFrom}
                  />

                  {errors.from && (
                    <div className="invalid-feedback">{errors.from}</div>
                  )}
                </div>
                {/* to */}
                <div className="form-group">
                  <input
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.to,
                    })}
                    placeholder="To"
                    name="to"
                    type="date"
                    value={to}
                    onChange={changeTo}
                    disabled={disabled ? "disabled" : ""}
                  />

                  {errors.to && (
                    <div className="invalid-feedback">{errors.to}</div>
                  )}
                </div>
                {/* current */}
                <div className="form-check mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="current"
                    value={current}
                    checked={current}
                    onChange={onCheck}
                    id="current"
                  />
                  <label htmlFor="current" className="form-check-label">
                    Current Job
                  </label>
                </div>
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.description,
                    })}
                    placeholder="Job Description"
                    name="description"
                    value={description}
                    onChange={changeDescription}
                  />

                  {errors.description && (
                    <div className="invalid-feedback">{errors.description}</div>
                  )}
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddExperience;
