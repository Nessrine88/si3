import React from 'react';
import "../globals.css";

const HomePage = () => {
  return (
    <div className=' pt-36 bg-gradient-to-r from-[#AE7789] via-[#F7B6CD] to-[#F8B7D0]  h-[100vh] p-[4rem]'>
    <div className='flex justify-start '>
      <div className='font-[600] text-[64px] leading-[79px] uppercase text-[#4428F2] w-[60vw] clash'>
        <h1 className='text-white'>
          Discover The 
        </h1>
        <h1>
        WOMEN & NON-BINARY WEB3 ECOSYSTEM.
        </h1>
      </div>
      <div className='flex h-fit items-center'>
        <div className='mr-[50px] flex gap-5 h-fit items-center'>
        <p className='font-mono text-white'>
        Info
        </p>
          <img
            src={"/images/exclamation.png"}
            alt=""
            width={46}
            height={60}
            className="w-5 h-5"
          />
          </div>
          <div>
          <button className='font-mono rounded-[8px] border border-white text-white px-4 py-2'>
            Add a community
          </button>

          </div>
      </div>
    </div>
    <div className='flex gap-5'>
      <div className='flex border border-white text-white px-4 py-2 rounded-[8px] w-[42vw] '>
        <img
        src={'/images/search-normal.png'}
        />
        <p>search by name, location, description, values.</p>
      </div>
      <div className='flex border border-white text-white px-4 py-2 rounded-[8px] w-[20vw]'>
        <p>Community Type</p>
        <img
        src={'/arrow-down.svg'}
        />
      </div>
      <div className='flex border border-white text-white px-4 py-2 flex  rounded-[8px] w-[20vw]'>
        <p>Community Location</p>
        <img
        src={'/arrow-down.svg'}
        />
      </div>
    
    </div>
    <div className="my-[2rem] bg-[#D574B633] bg-[url('/images/rectangle.png')] bg-no-repeat bg-cover bg-center bg-opacity-50 h-[30vh] rounded-[8px]">
      <p className="clash text-[#4428F2] text-center text-[35px] font-500 leading-[68px]">JOIN OUR COMMON GROUND.</p>
      <p className="text-center text-[#1C1B22] text-[20px] leading-[26px] font-mono font-400">If you want to get tips for UX job searching, subscribe to my UX Jetpack newsletter. <br /> View at https://uxjetpack.com/newsletter</p>
      <div className="flex justify-center">
      <button className="bg-[#1C1B22] text-white px-4 py-2 flex  rounded-[8px] mt-9 leading-[26px] text-[20px] font-400 font-mono ">COMMON GROUND</button>
      </div>
    </div>
    </div>
  )
}

export default HomePage