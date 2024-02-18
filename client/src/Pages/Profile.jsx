import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import EditButton from "../Components/EditButton";
import Badge from "../assets/badge.png";
import K4 from "../assets/k4.jpg"
import { Link } from "react-router-dom";

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
        <div className="w-20 h-20 text-[4rem] relative">
          <img src={Badge} alt="badge" />
        </div>

        <div className="text-[4rem] max-sm:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          <h1 className="inline titillium-web-bold">Batch of 2018</h1>
        </div>
      </div>

      <div className="w-full h-[35rem] max-sm:h-[48rem] relative top-[6rem] flex flex-col">
        <h1 className="text-4xl max-sm:text-2xl text-center mt-8 mb-5">
          Good {getPartOfDay()}, Aaryan Anil Kumar Singh!
        </h1>
        <div className="relative">
          <EditButton />
        </div>
        <div className="w-full h-[35rem] flex max-sm:flex-col-reverse">
          <div className="w-[50%] h-full max-sm:w-full max-sm:h-[50%] flex justify-center items-center">
            <img src = {K4} style={{width : '90%'}} />
          </div>
          <div className="w-[50%] h-full max-sm:w-full max-sm:h-[50%] rounded-lg overflow-hidden bg-white flex justify-center items-center max-sm:p-10">
            <div>
              <h2 className="text-4xl font-semibold mb-3">
                Profile Information
              </h2>
              <p className="mb-3">
                <strong>Email:</strong> 2022KUCP1036@iiitkota.ac.in
              </p>
              <p className="mb-3">
                <strong>Education:</strong> B.Tech Computer Science and
                Engineering
              </p>
              <p className="mb-3">
                <strong>Employer:</strong> Google India
              </p>
              <p className="mb-3">
                <strong>Location:</strong> Gurugram, Haryana
              </p>
              <Link
                to="https://www.linkedin.com/in/aaryan-anil-kumar-singh-568789250/"
                target="_blank"
              >
                LinkedIn Profile :{" "}
                <span className="text-blue-500 hover:underline">
                  www.linkedin.com/in/aaryan-anil-kumar-singh-568789250/
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
