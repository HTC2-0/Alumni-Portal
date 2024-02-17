import { Link } from "react-router-dom";
import College from "../assets/Collge.png";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b  border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={College} className="h-16 " alt="Flowbite Logo" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap">
              Alumni Portal
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-blue-700 text-xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-4 py-2 text-center"
            >
              <Link to="/register">Register</Link>
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Events</span>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-xl text-gray-700 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/alumni"
                  className="block py-2 px-3 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  <Link to="/alumni">Alumni</Link>
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="block py-2 px-3 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="block py-2 px-3 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Gallery
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
