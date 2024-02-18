import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    fullName: "",
    rollNumber: "",
    programme: "",
    branch: "",
    collegeEmail: "",
    yearOfPassing: "",
    yearOfAdmission: "",
    contactNumber: "",
    LinkedIn: "",
    personalEmail: "",
    currentLocated: "",
    password: "",
    workingStatus: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details);

    const {
      fullName,
      rollNumber,
      programme,
      branch,
      collegeEmail,
      yearOfPassing,
      contactNumber,
      LinkedIn,
      personalEmail,
      currentLocated,
      password,
      yearOfAdmission,
      workingStatus,
    } = details;

    try {
      const { details } = await axios.post(
        "http://localhost:6014/api/v1/user/register",
        {
          fullName,
          rollNumber,
          programme,
          branch,
          collegeEmail,
          yearOfPassing,
          contactNumber,
          LinkedIn,
          personalEmail,
          currentLocated,
          password,
          yearOfAdmission,
          workingStatus,
        }
      );

      if (details.error) {
        toast.error(details.error);
      } else {
        setDetails({});
        toast.success(`Login Successful! Welcome ${details.fullName}!`);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <div className="flex justify-center items-center mt-[5rem]">
        <div className="w-full max-w-4xl">
          <form
            className="bg-[#f8f9fa] shadow-lg border rounded-lg px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <h1 className="text-4xl text-center font-bold text-slate-600 mb-10">
              Registration Form{" "}
            </h1>

            {/* ------------------------------ CODE FOR PERSONAL DETAILS ----------------------------------------- */}
            <div className="PERSONAL_DETAILS">
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
                    value={details.fullName}
                    onChange={(e) =>
                      setDetails({ ...details, fullName: e.target.value })
                    }
                    required
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="rollNumber"
                    type="text"
                    name="rollNumber"
                    placeholder="Roll Number"
                    value={details.rollNumber}
                    onChange={(e) =>
                      setDetails({ ...details, rollNumber: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
            </div>

            {/* ------------------------------ CODE FOR ACADEMIC DETAILS ----------------------------------------- */}

            <div className="ACADEMIC DETAILS">
              <h1 className="font-medium text-slate-600 text-3xl mb-7 mt-5">
                Academic Details
              </h1>

              <div className="flex flex-row justify-between gap-3">
                <div className="mb-4 w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="programme"
                  >
                    Programme
                  </label>

                  <select
                    id="countries"
                    className="bg-white shadow border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="programme"
                    value={details.programme}
                    onChange={(e) =>
                      setDetails({ ...details, programme: e.target.value })
                    }
                    required
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
                    htmlFor="branch"
                  >
                    Branch
                  </label>

                  <select
                    id="countries"
                    className="bg-white shadow border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="branch"
                    value={details.branch}
                    onChange={(e) =>
                      setDetails({ ...details, branch: e.target.value })
                    }
                    required
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
                    htmlFor="yearAdmission"
                  >
                    Year of Admission
                  </label>

                  <select
                    id="countries"
                    name="yearofAdmission"
                    className="bg-white shadow border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={details.yearOfPassing}
                    onChange={(e) =>
                      setDetails({
                        ...details,
                        yearOfAdmission: e.target.value,
                      })
                    }
                    required
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
                    htmlFor="yearPassing"
                  >
                    Year of Passing
                  </label>

                  <select
                    id="countries"
                    className="bg-white shadow border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="yearPassing"
                    value={details.yearOfPassing}
                    onChange={(e) =>
                      setDetails({ ...details, yearOfPassing: e.target.value })
                    }
                    required
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

            {/* ------------------------------ CODE FOR CONTACT DETAILS ----------------------------------------- */}

            <div className="CONTACT DETAILS">
              <h1 className="font-medium text-slate-600 text-3xl mb-7  mt-5">
                Contact Details
              </h1>

              <div className="flex flex-row justify-between gap-3">
                <div className="mb-4 w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="number"
                  >
                    Mobile Number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="number"
                    name="number"
                    type="text"
                    placeholder="Mobile Number"
                    value={details.contactNumber}
                    onChange={(e) =>
                      setDetails({ ...details, contactNumber: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-4 w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="linkedin"
                  >
                    LinkedIn
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="linkedin"
                    name="linkedin"
                    type="text"
                    placeholder="LinkedIn"
                    value={details.LinkedIn}
                    onChange={(e) =>
                      setDetails({ ...details, LinkedIn: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="flex flex-row justify-between gap-3">
                <div className="mb-4 w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="officeEmail"
                  >
                    Official Email Address
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="officeEmail"
                    name="officeEmail"
                    type="email"
                    placeholder=" Official Email Address"
                    onChange={(e) =>
                      setDetails({ ...details, collegeEmail: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-4 w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="personalEmail"
                  >
                    Personal Email Address
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="personalEmail"
                    name="personalEmail"
                    type="email"
                    placeholder="Personal Email Address"
                    value={details.personalEmail}
                    onChange={(e) =>
                      setDetails({ ...details, personalEmail: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="flex flex-row justify-between gap-3">
                <div className="mb-4 w-1/2">
                  <label
                    htmlFor="location"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Current Location
                  </label>

                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="location"
                    type="text"
                    value={details.currentLocated}
                    placeholder="Location"
                    onChange={(e) =>
                      setDetails({ ...details, currentLocated: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-4 w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={details.password}
                    onChange={(e) =>
                      setDetails({ ...details, password: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-4 w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="text"
                  >
                    Currently Working At
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    name="currentlyworkingar"
                    type="text"
                    placeholder="Currently Working At"
                    value={details.workingStatus}
                    onChange={(e) =>
                      setDetails({ ...details, workingStatus: e.target.value })
                    }
                    required
                  />
                  console.log(details)
                </div>
              </div>
            </div>

            <button className="mt-7 w-[200px] text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg">
              Submit Form
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
