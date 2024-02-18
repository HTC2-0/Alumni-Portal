import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import College from "../assets/Collge.png";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 shadow-xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={College} className="h-16 " alt="Flowbite Logo" />
            <span className="self-center text-lg text-gray-900 font-bold uppercase tracking-wider">
              Alumni Portal
            </span>
          </Link>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col md:flex-row md:items-center p-4 md:p-0 mt-4 md:mt-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-white sm:-translate-x-[20rem]">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 text-xl rounded md:bg-transparent md:p-0 ${
                    location.pathname === "/"
                      ? "text-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  <Link to="/home">Home</Link>
                </Link>
              </li>
              <li>
                <Link
                  to="/alumni"
                  className={`block py-2 px-3 text-xl rounded md:bg-transparent md:p-0 ${
                    location.pathname === "/alumni"
                      ? "text-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  Alumni
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className={`block py-2 px-3 text-xl rounded md:bg-transparent md:p-0 ${
                    location.pathname === "/profile"
                      ? "text-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className={`block py-2 px-3 text-xl rounded md:bg-transparent md:p-0 ${
                    location.pathname === "/gallery"
                      ? "text-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  Gallery
                </Link>
              </li>
            </ul>
            <ul className="flex , p-4 md:p-0 mt-4 md:mt-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse max-sm:ju md:border-0 md:bg-white justify-start items-start">
              <li className="ml-auto">
                <Link
                  to="/register"
                  className=" block py-2 px-3 text-xl text-white bg-blue-700 hover:bg-blue-800 rounded-lg font-medium"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
