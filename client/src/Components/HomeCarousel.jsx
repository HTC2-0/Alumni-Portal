import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RiRadioButtonFill } from "react-icons/ri";
import K1 from "../assets/k1.webp";
import K2 from "../assets/k2.webp";
import K3 from "../assets/k3.png";
import K4 from "../assets/k4.jpg";

// Home carousel componet

function App() {
  const slides = [
    {
      src: K1,
    },
    {
      src: K2,
    },
    {
      src: K3,
    },
    {
      src: K4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full h-[45rem] m-auto py-16 px-4 relative top-10 mb-5 group swiper">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? "text-blue-500" : "text-gray-400"
            }`} //
          >
            <RiRadioButtonFill />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
