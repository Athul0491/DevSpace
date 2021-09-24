// import react, { useState, useEffect } from "react";
// import { Route, Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { isAuth } from "../../reducers/authReducer";
// const PrivateRoute = ({ component, ...options }) => {
//   const User = useSelector(isAuth);
//   const finalComponent = User ? component : Login;

//   return <Route {...options} component={finalComponent} />;
// };
// export default PrivateRoute;
// // const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
// //   <Route>

// //     {isAuth === true ? <Component {...Component} /> : <Redirect to="/login" />}
// //   </Route>
// // );
