import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import GalleryCarousel from '../Components/GalleryCarousel'

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full h-[45rem] relative mb-12 top-12 flex justify-center items-center'>
        <div className='w-full h-full'>
          <GalleryCarousel />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery;
