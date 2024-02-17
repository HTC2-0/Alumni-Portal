import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import EditButton from "../Components/EditButton";
import Badge from "../assets/badge.png";

const Profile = () => {
  const getPartOfDay = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour < 12) {
      return "morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  };

  return (
    <div>
      <Navbar />

      <div className="w-full h-48 relative border border-black bg-blue-100">
        <div className="absolute top-[5.5rem] left-20 w-20 h-20 rounded-full bg-red-600 text-[4rem]">
          <img src={Badge} alt="badge" />
        </div>

        <div className="absolute top-20 right-20 text-[4rem]">
          <h1 className="inline titillium-web-bold">Batch of 2018</h1>
        </div>
      </div>

      <div className="relative w-full h-[30rem] border border-black">
        <div>
          <h1 className="text-4xl text-center mt-8">
            Good {getPartOfDay()}, User!
          </h1>
          <EditButton />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
