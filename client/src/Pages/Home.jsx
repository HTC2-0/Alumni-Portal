import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HomeEvents from "../Components/HomeEvents";
import HomeCarousel from "../Components/HomeCarousel";
import HomeInfo from "../Components/HomeInfo";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeCarousel />
      <HomeInfo />
      <HomeEvents />
      <Footer />
    </div>
  );
};

export default Home;
