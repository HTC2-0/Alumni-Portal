import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="text-white
    -600 body-font bg-gray-600 shadow-md text-xl josefin-sans"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10 h-full flex flex-col justify-between">
              <Link
                to="https://www.iiitkota.ac.in"
                target="_blank"
                className="text-white-600 hover:text-blue-500 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                IIIT Kota Website
              </Link>
              <Link
                to="https://tpcell.iiitkota.ac.in/"
                target="_blank"
                className="text-white-600 hover:text-blue-500 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                Training and Placement Cell
              </Link>
              <Link
                to="https://iiitkota.ac.in/faculty"
                target="_blank"
                className="text-white-600 hover:text-blue-500 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                Faculty in Charge
              </Link>
              <Link
                to="https://iiitkota.ac.in/tender-invitations"
                target="_blank"
                className="text-white-600 hover:text-blue-500 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                Tender Invitations
              </Link>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10 h-full flex flex-col justify-between">
              <Link
                to="https://iiitkota.ac.in/holidays"
                target="_blank"
                className="text-white-600 hover:text-blue-500 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                Holidays
              </Link>
              <Link
                to="https://iiitkota.ac.in/recruitment"
                target="_blank"
                className="text-white-600 hover:text-blue-500 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                Recruitments
              </Link>
              <Link
                to="https://iiitkota.ac.in/it-infrastructure"
                target="_blank"
                className="text-white-600 hover:text-blue-500 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                IT Infrastructure
              </Link>
              <Link
                to="https://iiitkota.ac.in/rti"
                target="_blank"
                className="text-white-600 hover:text-blue-500 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                RTI
              </Link>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10 h-full flex flex-col justify-between">
              <Link
                to="#"
                className="text-white-600 hover:text-blue-500 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                First Link
              </Link>
              <Link
                to="#"
                className="text-white-600 hover:text-blue-500 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                Second Link
              </Link>
              <Link
                to="#"
                className="text-white-600 hover:text-blue-500 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                Third Link
              </Link>
              <Link
                to="#"
                className="text-white-600 hover:text-blue-500 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                Fourth Link
              </Link>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.535726460139!2d75.82416017446538!3d25.04982527780612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f874a7d8fde0d%3A0x471f3c2337f358e8!2sIIIT%20Kota%20permanent%20campus!5e0!3m2!1sen!2sin!4v1708173088341!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0", height: "100%", width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
