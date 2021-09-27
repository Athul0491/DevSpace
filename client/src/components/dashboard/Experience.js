import React from "react";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { setProfile } from "../../reducers/profileReducer";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentError } from "../../reducers/errorReducer";
import { profileLoading } from "../../reducers/profileReducer";

const Experience = (Exp) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onDelete = (id) => {
    axios
      .delete(`/api/profile/experience/${id}`)
      .then((res) => {
        // history.push("/dashboard");
        // dispatch(profileLoading());
        dispatch(setProfile(res.data));
        // axios req to get profile
        console.log(res.data);
      })
      .catch((err) => dispatch(setCurrentError(err.response.data)));
  };
  const experience = Exp.experience.map((expData) => (
    <tr key={expData._id}>
      <td>{expData.company}</td>
      <td>{expData.title}</td>
      <td>
        <Moment format="DD/MM/YYYY">{expData.from}</Moment> -{" "}
        {expData.to === null ? (
          "Now"
        ) : (
          <Moment format="DD/MM/YYYY">{expData.to}</Moment>
        )}
      </td>
      <td>
        <button
          onClick={() => onDelete(expData._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  //   console.log(expData);
  return (
    <div>
      <h4 className="mb-4">Experience Credentials</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Years</th>
            <th></th>
          </tr>
          {experience}
        </thead>
      </table>
    </div>
  );
};

export default Experience;
