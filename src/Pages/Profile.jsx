import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import EditButton from "../Components/EditButton";

const Profile = () => {
  return (
    <div>
      <Navbar />

      <div class="w-full h-48 relative border border-black bg-blue-100">
        <div class="absolute top-10 right-20 text-[4rem]">
          <h1 class="inline">Batch of 2018</h1>
        </div>
      </div>

      <div className="relative w-full h-[30rem] border border-black">
        <EditButton />
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
