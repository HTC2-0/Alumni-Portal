import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HomeEvents from "../Components/HomeEvents";
import HomeCarousel from "../Components/HomeCarousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeCarousel />
      <HomeEvents />
      <Footer />
    </div>
  );
};

export default Home;
