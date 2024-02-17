import Home from "./Pages/Home.jsx";
import Alumni from "./Pages/Alumni.jsx";
import Gallary from "./Pages/Gallary.jsx";
import Events from "./Pages/Events.jsx";
import Profile from "./Pages/Profile.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
