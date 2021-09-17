import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logoutUser from "../../utils/logout";
import axios from "axios";

// yaha Navbar component ko  jo prop pass kiya tha wo object-destructuring use karke available kiya
const Navbar = ({name,setName}) => {
  const [avatar, setAvatar] = useState("");

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  useEffect(() => {
    (async () => {
      if(avatar == '' && localStorage.getItem("token")) // If avatar is not set, fetch user info; else dont fetch kyuki faida hi nai
      await axios
        .get("api/profile", {
          headers: { Authorization: "" + localStorage.getItem("token") },
        })
        .then((res) => {
          console.log(res.data.user.avatar);
          // setName(res.data.user.name);
          setAvatar(res.data.user.avatar);
        })
        .catch((err) => setErrors(err.res));
    })();
  }, []); // ye dependency array rakhna is good-practice

  // authUser ko AuthLinks kiya aur normal variable ko  react component  bana diya kyuki usme 'avatar' ka value react change karega .
  const AuthLinks = ({avatar})=>{ 
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="" onClick={logoutUser} className="nav-link">
            <img
              className="rounded-circle"
              src={avatar}
              alt={name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a gravatar connected to your email to display an image"
            />
            Logout
          </a>
        </li>
      </ul>
    );
  } 
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
              <Link className="nav-link" to="profiles.html">
                {" "}
                Developers
              </Link>
            </li>
          </ul>
          {name ? <AuthLinks avatar={avatar}/> : guestLinks} 
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
