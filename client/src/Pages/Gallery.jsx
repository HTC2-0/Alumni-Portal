import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import GalleryCarousel from '../Components/GalleryCarousel'

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full h-[45rem] relative border border-black flex justify-center items-center'>
        <div className='w-[90%] h-[75%] border border-black'>
          <GalleryCarousel />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery;
