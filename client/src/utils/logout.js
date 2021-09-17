import setAuthToken from "./setAuthToken";

const logoutUser = () => {
  localStorage.removeItem("token");
  setAuthToken(false);
};

export default logoutUser;
