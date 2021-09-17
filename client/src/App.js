import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Provider } from "react-redux";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/layout/Dashboard";

// import store from "./store";

import "./App.css";

const App = () => {
  // name jo state hai wo sab components ko pata hona chahiye isliye sabke parent matlab App.js me state banaya
  const [name, setName] = useState('') 
  return (
    <Router>
      <div className="App">
        {/* wo name state Navbar ko accessible ho isliye name aur setName ko as prop send kiya */}
        <Navbar name={name} setName={setName}/>
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" >  {/* component ko prop pass karna tha toh explicitly mention kiya and Route ka prop hata diya */}
            {/* wo name state Login component ko accessible ho isliye name aur setName ko as prop send kiya */}
            <Login name={name} setName={setName}/> 
          </Route>
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
