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

        <div className="flex flex-row justify-between gap-3">
          <div className="mb-4 w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="company"
            >
              Currently Working At<span className="text-red-500"> *</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="company "
              type="text"
              placeholder="Eg. Google"
            />
          </div>
          <div className="mb-4 w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Currently Located At<span className="text-red-500"> *</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Eg. Gurugram, Haryana"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
