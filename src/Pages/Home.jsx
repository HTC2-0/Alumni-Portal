import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HomeCarousel from '../Components/HomeCarousel';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeCarousel />
      <Footer /> 
    </div>
  );
};

export default Home;
