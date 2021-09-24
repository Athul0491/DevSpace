import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import classnames from "classnames";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { error } from "../../reducers/errorReducer";

import setAuthToken from "../../utils/setAuthToken";
// import { isAuth, user } from "../../reducers/authReducer";
import { setCurrentUser } from "../../reducers/authReducer";
import { setCurrentError } from "../../reducers/errorReducer";
// import InputFieldGroup from "../reusable/InputFieldGroup";
import { setProfile } from "../../reducers/profileReducer";

const Login = () => {
  const Error = useSelector(error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const history = useHistory();
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
    const newUser = {
      email,
      password,
    };
    // console.log(user);

    axios
      .post("api/users/login", newUser)
      .then((res) => {
        // console.log(res);
        const token = res.data.token; //  save to local storage
        localStorage.setItem("token", token); //  set token to local storage
        setAuthToken(token); //   set token to auth header

        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
        dispatch(setProfile({}));
        history.push("/dashboard");
      })
      .catch((err) => dispatch(setCurrentError(err.response.data)));
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">Sign in to your DevSpace account</p>
            <form onSubmit={handleSubmit}>
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
                {errors.name && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="form-group mt-3">
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
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// if (!isEmpty(token)) {
//   history.push("/dashboard");
// }
