import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import AcademicDetails from "../Components/Registration_Form/AcademicDetails";
import PersonalDetails from "../Components/Registration_Form/PersonalDetails";
import ContactDetails from "../Components/Registration_Form/ContactDetails";

const handleSubmit = () => {};

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-[5rem]">
        <div className="w-full max-w-4xl">
          <form className="bg-[#f8f9fa] shadow-lg border rounded-lg px-8 pt-6 pb-8 mb-4">
            <h1 className="text-4xl text-center font-bold text-slate-600 mb-10">
              Registration Form{" "}
            </h1>
            <PersonalDetails></PersonalDetails>
            <AcademicDetails></AcademicDetails>
            <ContactDetails></ContactDetails>

            <button
              className="mt-7 w-[200px] text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg"
              onSubmit={handleSubmit}
            >
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
