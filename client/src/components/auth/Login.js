import React, { useState, useEffect } from "react";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
import jwt_decode from "jwt-decode";
import classnames from "classnames";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  // export const CurrentUserContext = React.createContext()

  // export const CurrentUserProvider = ({ children }) => {
  //   const [currentUser, setCurrentUser] = React.useState(null)

  //   const fetchCurrentUser = async () => {
  //     let response = await fetch("/api/users/current")
  //     response = await response.json()
  //     setCurrentUser(response)
  //   }
  // useEffect((props) => {
  //   if (props.errors) {
  //     setErrors(props.errors);
  //   }
  // });
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    // console.log(user);

    axios
      .post("api/users/login", user)
      .then((res) => {
        console.log(res);
        const { token } = res.data; //  save to local storage
        localStorage.setItem("token", token); //  set token to local storage
        setAuthToken(token); //   set token to auth header
        // const decoded = jwt_decode(token);
        // setCurrentUser(decoded);
        console.log(user);
        // loginUser(user);
        axios
          .get("api/profile", {
            headers: { Authorization: "" + localStorage.getItem("token") },
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => setErrors(err.response.data));
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
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
