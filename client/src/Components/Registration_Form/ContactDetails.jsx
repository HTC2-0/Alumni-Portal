const ContactDetails = () => {
  return (
    <>
      <div>
        <h1 className="font-medium text-slate-600 text-3xl mb-7 mt-5">
          Contact Details
        </h1>

        <div className="flex flex-row justify-between gap-3">
          <div className="mb-4 w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Mobile Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobile_number"
              type="text"
              placeholder="Mobile Number"
            />
          </div>

          <div className="mb-4 w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="linkedin"
            >
              LinkedIn<span className="text-red-500"> *</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="linkedin"
              type="text"
              placeholder="LinkedIn URL"
            />
          </div>
        </div>

        <div className="flex flex-row justify-between gap-3">
          <div className="mb-4 w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="office_email"
            >
              Official Email Address<span className="text-red-500"> *</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="office_email"
              type="email"
              placeholder="Official Email Address"
            />
          </div>

          <div className="mb-4 w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="personal_email"
            >
              Personal Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="personal_email "
              type="email"
              placeholder="Personal Email Address"
            />
          </div>
        </div>

        <div className="flex flex-row gap-3 justify-between">
          <div className="mb-4 w-1/2">
            <label
              htmlFor="address"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Current Location
            </label>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              placeholder="Personal Email Address"
            />
          </div>

          <div className="mb-4 w-1/2">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="passsword"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
