import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";
import AddExperience from "./components/add-credentials/AddExperience";
import AddEducation from "./components/add-credentials/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";
import NotFound from "./components/not-found/NotFound";

// import Todo from "./Todo";
import "./App.css";

const App = () => {
  // name jo state hai wo sab components ko pata hona chahiye isliye sabke parent matlab App.js me state banaya
  // const PrivateRoute = ({ component, ...options }) => {
  //   // const User = useSelector(isAuth);
  //   const finalComponent = isAuth ? component : { Login };

  //   return <Route {...options} component={finalComponent} />;
  // };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profile/:handle" component={Profile} />
          <Route exact path="/not-found" component={NotFound} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/create-profile" component={CreateProfile} />
          <Route exact path="/edit-profile" component={EditProfile} />
          <Route exact path="/add-experience" component={AddExperience} />
          <Route exact path="/add-education" component={AddEducation} />
          <Route exact path="/feed" component={Posts} />
        </div>
        <Footer />
      </div>
      {/* <Todo /> */}
    </Router>
  );
};

export default App;
