import PEN from "../assets/PEN.png";

// Edit Button compoent

const EditButton = ({ onClick }) => {
  return (
    <div className="absolute top-[2rem] right-[2rem] w-10 h-10">
      <button
        onClick={onClick}
        className="w-full h-full flex items-center justify-center rounded-full bg-red-200 hover:bg-red-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <img src={PEN} className="w-full h-full" />
      </button>
    </div>
  );
};

export default EditButton;
