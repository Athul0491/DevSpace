import React from "react";
import PostForm from "./PostForm";
import Spinner from "../reusable/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { isAuth, user } from "../../reducers/authReducer";
import { useHistory } from "react-router-dom";

const Posts = () => {
  const Auth = useSelector(isAuth);
  const history = useHistory();

  if (!Auth) {
    history.push("/login");
  }
  const User = useSelector(user);
  return (
    <div className="feed">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <PostForm />
            {/* {postContent} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
