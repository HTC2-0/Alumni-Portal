import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Register from "./Register.jsx';
import SignIn from "./SignIn.jsx";
import HomeCarousel from "../Components/HomeCarousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeCarousel />
      <Link to="/alumni">Alumni</Link>
      <Link to="/events">Events</Link>
      <Link to="/gallary">Gallery</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Footer />
    </div>
  );
};

export default Home;
