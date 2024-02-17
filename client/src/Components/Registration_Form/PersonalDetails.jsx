const PersonalDetails = () => {
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
              Name <span className="text-red-500"> *</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>

          <div className="mb-4 w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="roll_number"
            >
              Roll Number<span className="text-red-500"> *</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="roll_number"
              type="text"
              placeholder="Roll Number"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
