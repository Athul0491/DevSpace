import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { isAuth, user } from "../../reducers/authReducer";
import { setCurrentUser } from "../../reducers/authReducer";
import { clearCurrentProfile } from "../../reducers/profileReducer";
import setAuthToken from "../../utils/setAuthToken";

const Navbar = () => {
  // const [avatar, setAvatar] = useState("");
  const [authe, setAuthe] = useState("");
  const [usere, setUsere] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector(isAuth);
  const User = useSelector(user);
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
    dispatch(clearCurrentProfile());
    history.push("/login");
    // auth = false;
  };
  // useEffect(() => {
  //   console.log(auth);
  //   console.log(User);

  //   // const navigate = async () => {
  //   //   //   // const authorized = await isAuthenticated();
  //   //   //   // const token = "" + localStorage.getItem("token");
  //   //   //   // console.log(auth);
  //   //   if (auth !== undefined) {
  //   //     setAuthe(auth);
  //   //   }
  //   //   if (User !== undefined && User !== {}) {
  //   //     setUsere(User);
  //   //     // console.log(User);
  //   //   }
  //   // };
  //   // navigate();
  //   // call the async function
  //   // return () => clearTimeout(navigate);
  // });
  // authUser ko AuthLinks kiya aur normal variable ko  react component  bana diya kyuki usme 'avatar' ka value react change karega .
  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <a href="" onClick={logout} className="nav-link">
          <img
            className="rounded-circle"
            src={User.avatar}
            alt={User.name}
            style={{ width: "25px", marginRight: "5px" }}
            title="You must have a gravatar connected to your email to display an image"
          />{" "}
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          DevSpace
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="profiles">
                {" "}
                Developers
              </Link>
            </li>
          </ul>

          {auth ? authLinks : guestLinks}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
