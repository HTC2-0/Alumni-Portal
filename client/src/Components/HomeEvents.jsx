import React from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

// Sample random events at IIIT Kota
const iiitKotaEvents = [
  {
    name: "Workshop on Machine Learning",
    date: "February 20, 2024",
    description: "A workshop aimed at introducing students to machine learning concepts.",
  },
  {
    name: "Guest Lecture on Artificial Intelligence",
    date: "February 22, 2024",
    description: "Renowned AI expert Dr. John Doe will deliver a lecture on AI advancements.",
  },
  {
    name: "Hackathon: CodeFest 2024",
    date: "February 25-26, 2024",
    description: "An exciting coding competition where students showcase their coding skills.",
  },
];

// Sample random news pieces
const newsPieces = [
  {
    title: "New Study Reveals Impact of Climate Change on Agriculture",
    date: "February 17, 2024",
    source: "New York Times",
  },
  {
    title: "Government Announces Funding for STEM Education",
    date: "February 18, 2024",
    source: "CNN",
  },
  {
    title: "SpaceX Successfully Launches New Satellite into Orbit",
    date: "February 19, 2024",
    source: "Space.com",
  },
];

const HomeEvents = () => {
  return (
    <div className="w-full h-[40rem] max-md:h-[60rem] flex gap-5 max-md:flex-col mb-10 mt-10">
      <div className="w-[50%] h-full max-md:w-full max-md:h-[50%] flex justify-center align-center">
        <div className="event-card relative h-full w-[80%] border bg-gray-100 rounded-lg overflow-scroll shadow-2xl mx-auto">
          {iiitKotaEvents.map((event, index) => (
            <div key={index} className="p-8">
              <h2 className="text-xl font-bold mb-4">{event.name}</h2>
              <p className="text-sm text-gray-600 mb-4">Date: {event.date}</p>
              <p className="text-base text-gray-800 mb-8">{event.description}</p>
              {/* Use Link component with 'to' attribute set to IIIT Kota website */}
              <Link
                to="https://www.iiitkota.ac.in"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4 mx-8"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[50%] h-full max-md:w-full max-md:h-[50%] flex justify-center align-center">
        <div className="event-card relative h-full w-[80%] border bg-gray-100 rounded-lg overflow-scroll shadow-2xl mx-auto">
          {newsPieces.map((news, index) => (
            <div key={index} className="p-8">
              <h2 className="text-xl font-bold mb-4">{news.title}</h2>
              <p className="text-sm text-gray-600 mb-4">Date: {news.date}</p>
              <p className="text-base text-gray-800 mb-8">Source: {news.source}</p>
              {/* Use Link component with 'to' attribute set to IIIT Kota website */}
              <Link
                to="https://www.iiitkota.ac.in"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4 mx-8"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeEvents;
