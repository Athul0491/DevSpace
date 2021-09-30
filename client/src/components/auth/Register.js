import React, { useState, useEffect } from "react";
import axios from "axios";
import classnames from "classnames";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { isAuth } from "../../reducers/authReducer";
import { setCurrentError, error } from "../../reducers/errorReducer";

const Register = () => {
  const Error = useSelector(error);

  const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});
  // const user = useSelector(user);
  const history = useHistory();
  // useEffect(() => {
  //   if (errors) {s
  //     setErrors({ errors });
  //   }
  // });

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changePassword2 = (e) => {
    setPassword2(e.target.value);
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
  // errors = useSelector((state) => {
  //   state.errors;
  // });

  // useEffect(() => {
  //   const navigate = async () => {
  //     // const authorized = await isAuthenticated();
  //     // const token = "" + localStorage.getItem("token");

  //     // console.log(auth);
  //     // Authenticated(isAuthenticated);
  //     if (auth) {
  //       history.push("/dashboard");
  //     }
  //   };

  //   // call the async function
  //   navigate();
  // });
  //982O480387
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      password2,
    };
    // setAuthe(true);
    // RegisterUser(newUser);
    axios
      .post("/api/users/register", newUser)
      .then((res) => history.push("/login"))
      .catch((err) => dispatch(setCurrentError(err.response.data)));

    // dispatch({
    //   type: GET_ERRORS,
    //   payload: err.response.data,
    // });
    //   axios
    //     .post("api/users/register", newUser)
    //     .then((res) => {
    //       console.log(res.data);
    //     })
    //     .catch((err) => setErrors(err.response.data));
  };
  // const errors = errors;
  // const { user } = auth;
  return (
    <div className="register">
      {/* {user ? user.name : null} */}
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your DevSpace account</p>
            <form noValidate onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.name,
                  })}
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={changeName}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.email,
                  })}
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={changeEmail}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
                <small className="form-text text-muted">
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </small>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.password,
                  })}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={changePassword}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.password2,
                  })}
                  placeholder="Confirm Password"
                  name="password2"
                  value={password2}
                  onChange={changePassword2}
                />
                {errors.password2 && (
                  <div className="invalid-feedback">{errors.password2}</div>
                )}
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   errors: state.errors,
// });

export default Register;
