import setAuthToken from "./setAuthToken";
// import { Authenticated } from "./isAuthenticated";
const logoutUser = () => {
  localStorage.removeItem("token");
  setAuthToken(false);
  // Authenticated(true);
};

export default logoutUser;
