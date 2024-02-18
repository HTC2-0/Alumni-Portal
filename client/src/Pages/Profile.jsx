import React from "react";
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

      <div className="w-full h-36 relative top-[6rem] bg-blue-100 flex justify-around items-center">
        <div className="w-20 h-20 text-[4rem]">
          <img src={Badge} alt="badge" />
        </div>

        <div className="text-[4rem] max-sm:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          <h1 className="inline titillium-web-bold">Batch of 2018</h1>
        </div>
      </div>

      <div className="w-full h-[40rem] relative top-[6rem] flex flex-col mb-[6rem]">
        <h1 className="text-4xl text-center mt-8">
          Good {getPartOfDay()}, User!
        </h1>
        <EditButton />
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
