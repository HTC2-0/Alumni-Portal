import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you are using React Router

const AlumniCard = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative h-[13rem] flex flex-col mt-6 text-gray-700 bg-gray-100 shadow-md bg-clip-border rounded-xl w-96"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
          <Link to="https://www.github.com/coderkaushik" target="_blank" rel="noopener noreferrer">
            <FaGithub className="mr-4" style={{ fontSize: "1.5rem", cursor: "pointer" }} />
          </Link>
          <Link to="https://www.linkedin.com/in/hiteshwarkaushik" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ fontSize: "1.5rem", cursor: "pointer" }} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default AlumniCard;
