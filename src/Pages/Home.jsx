import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer';
import HomeCarousel from '../Components/HomeCarousel';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeCarousel />
      <Link to="/alumni">Alumni</Link>
      <Link to="/events">Events</Link>
      <Link to="/gallary">Gallery</Link>
      <Link to="/profile">Profile</Link>
      <Footer /> 
    </div>
  );
};

export default Home;
