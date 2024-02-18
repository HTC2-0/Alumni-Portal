import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
const SignInForm = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen mt-12">
        <div className="w-full max-w-xl  p-8 bg-[#f8f9fa] shadow-lg border rounded-lg">
          <h2 className="text-3xl text-center font-bold text-slate-600 mb-10">
            SIGN IN
          </h2>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="rollNo"
            >
              Roll No. <span className="text-red-500"> *</span>
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="rollNo"
              type="text"
              placeholder="Roll No."
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password <span className="text-red-500"> *</span>
            </label>
            <input
              className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-6 text-center">
            <button
              className="w-1/3 px-4 py-2 font-bold text-white bg-slate-500 rounded hover:bg-slate-600 focus:outline-none focus:shadow-outline"
              type="button"
            >
              SIGN IN
            </button>
          </div>
          <div className="text-center">
            <p>
              Not registered yet?{" "}
              <span className="hover:text-blue-700">
                <Link to="/register">Register</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignInForm;
