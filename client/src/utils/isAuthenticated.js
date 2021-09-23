import isEmpty from "./isEmpty";
import React, { useState, createContext, useContext, useEffect } from "react";

// //
// const Authenticated = (props) => {
//   // const [isAuthenticated, setIsAuthenticated] = useState(false);
//   // const token = "" + localStorage.getItem("token");
//   //   if (isEmpty(token)) {
//   //     return { isAuthenticated: true };
//   //   } else {
//   //     return { isAuthenticated: false };

//   //   }
//   //   const auth = { isAuthenticated: false };
//   if (props) {
//     return props;
//   }
// };

const authContext = createContext(false);

const useAuth = () => useContext(authContext);
export default useAuth;
