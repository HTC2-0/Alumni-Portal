import React from "react";
import Director from "../assets/Padhi.jpg";

const HomeInfo = () => {
  return (
    <div className="w-full h-[40rem] p-5 flex justify-center items-center max-md:flex-col">
      <div className="w-[50%] h-full max-md:w-full max-md:h-[40%] flex flex-col gap-5 items-center justify-center">
        <img
          src={Director}
          className="h-96 w-96 max-md:h-40 max-md:w-40 rounded-full mx-auto shadow-lg"
        />
        <h2 className="text-lg text-gray-900 font-semibold tracking-wider">
          Director, NK Padhy
        </h2>
      </div>
      <div className="w-[50%] h-[80%] max-md:w-full max-md:h-[60%] flex justify-center items-center bg-gray-100 rounded-xl shadow-xl">
        <p className="w-[80%] h-[80%] max-md:text-sm flex justify-center items-center text-xl font-semibold leading-relaxed tracking-wider text-gray-900">
          It brings me immense pleasure to extend a warm welcome to each of you
          to the official IIIT Kota Alumni Network website. As the Director, I
          am honored to witness the growth and achievements of our alumni,
          serving as a testament to the excellence fostered within our
          institution. This platform serves as a bridge connecting past,
          present, and future, fostering collaboration, camaraderie, and
          continued growth. I encourage you to actively engage, share insights,
          and strengthen the bonds that unite us as proud alumni of IIIT Kota.
          Together, let us continue to elevate our alma mater's legacy.
        </p>
      </div>
    </div>
  );
};

export default HomeInfo;
