import React, { useState } from "react";
import { user } from "../../reducers/authReducer";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addPosts } from "../../reducers/postReducer";
import classnames from "classnames";
import { error } from "../../reducers/errorReducer";
import { useHistory } from "react-router-dom";

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [errors, setErrors] = useState({});
  const Error = useSelector(error);
  const history = useHistory();

  const User = useSelector(user);
  const onSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      text: text,
      name: User.name,
      avatar: User.avatar,
    };
    axios
      .post("/api/posts", newPost)
      //   .then((res) => {
      //     dispatch(addPosts(res));
      //     history.push("/feed");
      //     console.log(res);
      //     console.log("doneeee");
      //   })
      .catch((err) => console.log(err));
    setText("");
  };

  return (
    <div className="post-form mb-3">
      <div className="card card-info">
        <div className="card-header bg-info text-white">Say Something...</div>
        <div className="card-body">
          <form
            onSubmit={() => {
              onSubmit();
            }}
          >
            <div className="form-group">
              <div className="form-group">
                <textarea
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.text,
                  })}
                  placeholder="Create a post"
                  name="text"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
                {errors.text && (
                  <div className="invalid-feedback">{errors.text}</div>
                )}
              </div>
            </div>
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
