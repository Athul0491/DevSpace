// import { GET_ERRORS } from "./types";
// // import jwt_decode from "jwt-decode";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useStateValue } from "../store.js";

// // const history = useHistory();
// const RegisterUser = (userData) => {
//   // const [state, dispatch] = useStateValue();

//   axios
//     .post("/api/users/register", userData)
//     .then((res) => console.log(res))
//     .catch((err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       })
//     );
// };
// // Login - Get User Token
// export const loginUser = (userData) => (dispatch) => {
//   axios
//     .post("/api/users/login", userData)
//     .then((res) => {
//       // Save to localStorage
//       const { token } = res.data;
//       // Set token to ls
//       localStorage.setItem("jwtToken", token);
//       // Set token to Auth header
//       setAuthToken(token);
//       // Decode token to get user data
//       const decoded = jwt_decode(token);
//       // Set current user
//       dispatch(setCurrentUser(decoded));
//     })
//     .catch((err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       })
//     );
// };

// // Set logged in user
// export const setCurrentUser = (decoded) => {
//   return {
//     type: SET_CURRENT_USER,
//     payload: decoded,
//   };
// };

// // Log user out
// export const logoutUser = () => (dispatch) => {
//   // Remove token from localStorage
//   localStorage.removeItem("jwtToken");
//   // Remove auth header for future requests
//   setAuthToken(false);
//   // Set current user to {} which will set isAuthenticated to false
//   dispatch(setCurrentUser({}));
// };

// export default RegisterUser;
