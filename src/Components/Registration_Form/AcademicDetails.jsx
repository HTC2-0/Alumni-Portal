const AcademicDetails = () => {
  return (
    <>
      <div>
        <h1 className="font-medium text-slate-600 text-3xl mb-7 mt-5">
          Academic Details
        </h1>

        <div className="flex flex-row justify-between gap-3">
          <div className="mb-4 w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="roll_number"
            >
              Programme
            </label>

            <select
              id="countries"
              className="bg-white shadow border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Choose a Programme</option>
              <option value="PhD">PhD</option>
              <option value="M.Tech">M.Tech</option>
              <option value="B.Tech">B.Tech</option>
            </select>
          </div>
          <div className="mb-4 w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="roll_number"
            >
              Branch
            </label>

            <select
              id="countries"
              className="bg-white shadow border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Choose a Branch</option>
              <option value="CSE">Computer Science Enginnering</option>
              <option value="ECE">
                Electronics and Commnication Enginnering
              </option>
            </select>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-3">
          <div className="mb-4 w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="roll_number"
            >
              Year of Admission
            </label>

            <select
              id="countries"
              className="bg-white shadow border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Year of Admission</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
          </div>
          <div className="mb-4 w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="roll_number"
            >
              Year of Passing
            </label>

            <select
              id="countries"
              className="bg-white shadow border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Year of Passing</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicDetails;
