import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HomeEvents from "../Components/HomeEvents";
import HomeCarousel from "../Components/HomeCarousel";
import HomeInfo from "../Components/HomeInfo";
import HomeFeaturedAlumni from "../Components/HomeFeaturedAlumni";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeCarousel />
      <HomeInfo />
      <HomeEvents />
      <HomeFeaturedAlumni />
      <Footer />
    </div>
  );
};

export default Home;
