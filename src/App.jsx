import Home from "./Pages/Home.jsx";
import Alumni from "./Pages/Alumni.jsx";
import Gallary from "./Pages/Gallary.jsx";
import Events from "./Pages/Events.jsx";
import SignUP from "./Pages/SignUp.jsx";
import SignIn from "./Pages/SignIn.jsx";
import Profile from "./Pages/Profile.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;
