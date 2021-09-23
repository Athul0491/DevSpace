import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Provider } from "react-redux";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";

const App = () => {
  // name jo state hai wo sab components ko pata hona chahiye isliye sabke parent matlab App.js me state banaya

  return (
    // <StateProvider initialState={initialState} reducer={rootReducer}>
    <Router>
      <div className="App">
        {/* wo name state Navbar ko accessible ho isliye name aur setName ko as prop send kiya */}
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
        <Footer />
      </div>
    </Router>
    // </StateProvider>
  );
};

export default App;
