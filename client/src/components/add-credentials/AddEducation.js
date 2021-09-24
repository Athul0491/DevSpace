import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { error } from "../../reducers/errorReducer";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import classnames from "classnames";
import { isAuth } from "../../reducers/authReducer";
import { setCurrentError } from "../../reducers/errorReducer";
import axios from "axios";

const AddEducation = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const Error = useSelector(error);
  const Auth = useSelector(isAuth);
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [fieldofstudy, setFieldofstudy] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [current, setCurrent] = useState(false);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(false);
  if (!Auth) {
    history.push("/login");
  }
  const changeSchool = (e) => {
    setSchool(e.target.value);
  };
  const changeDegree = (e) => {
    setDegree(e.target.value);
  };
  const changeFrom = (e) => {
    setFrom(e.target.value);
  };
  const changeTo = (e) => {
    setTo(e.target.value);
  };
  const changeFieldofstudy = (e) => {
    setFieldofstudy(e.target.value);
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
    const eduData = {
      school: school,
      degree: degree,
      fieldofstudy: fieldofstudy,
      from: from,
      to: to,
      current: current,
      description: description,
    };
    axios
      .post("/api/profile/education", eduData)
      .then((res) => history.push("/dashboard"))
      .catch((err) => dispatch(setCurrentError(err.response.data)));
  };
  return (
    <div>
      <div className="add-education">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Education</h1>
              <p className="lead text-center">
                Add any school, bootcamp you have attended
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={handleSubmit}>
                {/* company */}
                <div className="form-group">
                  <input
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.school,
                    })}
                    placeholder="* School"
                    name="school"
                    value={school}
                    onChange={changeSchool}
                  />

                  {errors.school && (
                    <div className="invalid-feedback">{errors.school}</div>
                  )}
                </div>
                {/* job title */}
                <div className="form-group">
                  <input
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.degree,
                    })}
                    placeholder="* Degree or Certification"
                    name="degree"
                    value={degree}
                    onChange={changeDegree}
                  />

                  {errors.degree && (
                    <div className="invalid-feedback">{errors.degree}</div>
                  )}
                </div>
                {/* location */}
                <div className="form-group">
                  <input
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.fieldofstudy,
                    })}
                    placeholder="Location"
                    name="fieldofstudy"
                    value={fieldofstudy}
                    onChange={changeFieldofstudy}
                  />

                  {errors.fieldofstudy && (
                    <div className="invalid-feedback">
                      {errors.fieldofstudy}
                    </div>
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
                    placeholder="Program Description"
                    name="description"
                    value={description}
                    onChange={changeDescription}
                    info="Tell us about the program you were in"
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
export default AddEducation;
