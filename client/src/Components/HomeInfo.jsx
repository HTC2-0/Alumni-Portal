import React from 'react'
import Director from '../assets/Padhi.jpg'

const HomeInfo = () => {
  return (
    <div className='w-full h-[40rem] border border-black p-5 flex max-md:flex-col'>
      <div className='w-[50%] h-full max-md:w-full max-md:h-[50%] border border-black flex items-center justify-center'>
        <img src={Director} className='h-[20rem] w-[20rem]' />
      </div>
      <div className='w-[50%] h-full max-md:w-full max-md:h-[50%] border border-black flex justify-center items-center'>
        <p className='w-[80%] h-[80%] border border-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consectetur repudiandae animi saepe dolorum alias aliquid, rem totam harum, placeat fugit tenetur consequatur aperiam inventore laudantium deserunt? Modi eos excepturi illum illo possimus doloremque et laudantium architecto! At ducimus eligendi voluptas illo minima quae nam autem veniam na.</p>
      </div>
    </div>
  )
}

export default HomeInfo
