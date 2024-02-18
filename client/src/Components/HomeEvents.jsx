import { Link } from "react-router-dom";

// Sample random events at IIIT Kota
const iiitKotaEvents = [
  {
    name: "Workshop on Machine Learning",
    date: "February 20, 2024",
    description:
      "A workshop aimed at introducing students to machine learning concepts.",
  },
  {
    name: "Guest Lecture on Artificial Intelligence",
    date: "February 22, 2024",
    description:
      "Renowned AI expert Dr. John Doe will deliver a lecture on AI advancements.",
  },
  {
    name: "Hackathon: CodeFest 2024",
    date: "February 25-26, 2024",
    description:
      "An exciting coding competition where students showcase their coding skills.",
  },
  {
    name: "Workshop on Machine Learning",
    date: "February 20, 2024",
    description:
      "A workshop aimed at introducing students to machine learning concepts.",
  },
  {
    name: "Guest Lecture on Artificial Intelligence",
    date: "February 22, 2024",
    description:
      "Renowned AI expert Dr. John Doe will deliver a lecture on AI advancements.",
  },
  {
    name: "Hackathon: CodeFest 2024",
    date: "February 25-26, 2024",
    description:
      "An exciting coding competition where students showcase their coding skills.",
  },
];

// Sample random news pieces
const newsPieces = [
  {
    title: "Impact of Climate Change on Agriculture Explored in New Study",
    date: "February 17, 2024",
    source: "IIIT Kota News",
  },
  {
    title: "STEM Education Receives Funding Boost from Government",
    date: "February 18, 2024",
    source: "IIIT Kota News",
  },
  {
    title: "New Satellite Successfully Launched into Orbit by SpaceX",
    date: "February 19, 2024",
    source: "IIIT Kota News",
  },
  {
    title: "Impact of Climate Change on Agriculture Explored in New Study",
    date: "February 17, 2024",
    source: "IIIT Kota News",
  },
  {
    title: "STEM Education Receives Funding Boost from Government",
    date: "February 18, 2024",
    source: "IIIT Kota News",
  },
  {
    title: "New Satellite Successfully Launched into Orbit by SpaceX",
    date: "February 19, 2024",
    source: "IIIT Kota News",
  },
];

const HomeEvents = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[5rem]">
      <h1 className="text-[3rem] tracking-wider">News and Job Postings</h1>
      <div className="w-full h-[40rem] max-md:h-[60rem] flex gap-5 max-md:flex-col mb-10 mt-20">
        <div className="w-[50%] h-full max-md:w-full max-md:h-[50%] flex justify-center align-center">
          <div className="event-card relative h-full w-[80%] border bg-gray-100 rounded-lg overflow-scroll no-scrollbar shadow-2xl mx-auto">
            {iiitKotaEvents.map((event, index) => (
              <div key={index} className="p-8">
                <h2 className="text-xl font-bold mb-4">{event.name}</h2>
                <p className="text-sm text-gray-600 mb-4">Date: {event.date}</p>
                <p className="text-base text-gray-800 mb-8">
                  {event.description}
                </p>

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
          <div className="event-card relative h-full w-[80%] border bg-gray-100 rounded-lg overflow-scroll no-scrollbar shadow-2xl mx-auto">
            {newsPieces.map((news, index) => (
              <div key={index} className="p-8">
                <h2 className="text-xl font-bold mb-4">{news.title}</h2>
                <p className="text-sm text-gray-600 mb-4">Date: {news.date}</p>
                <p className="text-base text-gray-800 mb-8">
                  Source: {news.source}
                </p>
              
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
    </div>
  );
};

export default HomeEvents;
