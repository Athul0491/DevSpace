import React from "react";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { setProfile } from "../../reducers/profileReducer";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentError } from "../../reducers/errorReducer";
import { profileLoading } from "../../reducers/profileReducer";

const Education = (Edu) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onDelete = (id) => {
    axios
      .delete(`/api/profile/education/${id}`)
      .then((res) => {
        // history.push("/dashboard");
        // dispatch(profileLoading());
        dispatch(setProfile(res.data));
        // axios req to get profile
        console.log(res.data);
      })
      .catch((err) => dispatch(setCurrentError(err.response.data)));
  };
  const education = Edu.education.map((eduData) => (
    <tr key={eduData._id}>
      <td>{eduData.school}</td>
      <td>{eduData.degree}</td>
      <td>
        <Moment format="DD/MM/YYYY">{eduData.from}</Moment> -{" "}
        {eduData.to === null ? (
          "Now"
        ) : (
          <Moment format="DD/MM/YYYY">{eduData.to}</Moment>
        )}
      </td>
      <td>
        <button
          onClick={() => onDelete(eduData._id)}
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
      <h4 className="mb-4">Education Credentials</h4>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Years</th>
            <th></th>
          </tr>
          {education}
        </thead>
      </table>
    </div>
  );
};

export default Education;
