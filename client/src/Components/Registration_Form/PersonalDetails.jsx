import { useState } from "react";
const PersonalDetails = () => {
  const [details, setDetails] = useState({
    name: "",
    roll_number: "",
  });

  return (
    <>
      <div>
        <h1 className="font-medium text-slate-600 text-3xl mb-7  ">
          Personal Details
        </h1>

        <div className="flex flex-row justify-between gap-3">
          <div className="mb-4 w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => {
                e.target.value;
              }}
            />
          </div>

          <div className="mb-4 w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="roll_number"
            >
              Roll Number
            </label>
            <input
              name="roll_number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="roll_number"
              type="text"
              placeholder="Roll Number"
              onChange={(e) => {
                setDetails(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
