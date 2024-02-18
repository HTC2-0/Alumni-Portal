import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const AlumniCard = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transition: "transform 0.3s ease",
        transform: hovered ? "scale(1.05)" : "scale(1)"
      }}
    >
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          UserName
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          Current Work Company
        </p>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          Current Work Location
        </p>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          Batch
        </p>
      </div>
      {hovered && (
        <div className="p-6 pt-0 flex">
          <FaGithub className="mr-4" />
          <FaLinkedin />
        </div>
      )}
    </div>
  );
};

export default AlumniCard;
