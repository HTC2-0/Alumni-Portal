import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Gallery = () => {
  const gridData = ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6'];
  return (
    <div>
      <Navbar />
      <div className='w-full h-[45rem] relative border border-black flex justify-center items-center'>
        <div className='w-[90%] h-[75%] border border-black'></div>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery;
