import React from "react";
import K2 from "../assets/k2.png"

const HomeFeaturedAlumni = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[5rem]">
        <h1 className="text-[3rem] tracking-wider">Featured Alumni</h1>
    <div className="w-full h-[40rem] max-sm:h-[100rem] relative grid grid-cols-1 max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 justify-center items-center gap-8 pl-[6rem] max-sm:pl-[2.5rem]">
      {/* Card Component  */}
      <div class="max-w-sm bg-gray-300 border border-gray-200 rounded-lg shadow-2xl ">
        <a href="#">
          <img
            class="rounded-t-lg"
            src={K2}
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800">
              Gaurav Parmar
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ipsam nostrum ratione, obcaecati explicabo provident?
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Visit Profile
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="max-w-sm bg-gray-300 border border-gray-200 rounded-lg shadow-2xl ">
        <a href="#">
          <img
            class="rounded-t-lg"
            src={K2}
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800">
              Ankur Aggarwal
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis pariatur, adipisci eaque commodi ipsa nisi.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Visit Profile
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="max-w-sm bg-gray-300 border border-gray-200 rounded-lg shadow-2xl ">
        <a href="#">
          <img
            class="rounded-t-lg"
            src={K2}
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800">
              Joe Pinto
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto corrupti quae eos veniam rerum.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Visit Profile
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomeFeaturedAlumni;
