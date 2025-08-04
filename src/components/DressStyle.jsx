import React from 'react';
import casual from '../assets/casual.png';
import formal from '../assets/formal.png';
import party from '../assets/party.png';
import gym from '../assets/gym.png';

const DressStyle = () => {
  return (
    <>
      <div className='max-w-[1540px] md:mx-auto bg-[#F2F0F1] flex flex-col p-4 md:p-13 rounded-4xl gap-16 my-12'>
        <h1 className='text-4xl font-bold text-center'>BROWSE BY DRESS STYLE</h1>
        <div className='flex flex-col w-full'>

          {/* First Row */}
          <div className='flex flex-col md:flex-row gap-3 w-full'>
            <div className='md:w-1/3 relative cursor-pointer'>
              <img className='rounded-xl w-full h-44 object-cover object-top' src={casual} alt="Casual" />
              <span className='absolute  top-3 left-4  text-2xl font-bold '>Casual</span>
            </div>

            <div className='md:w-2/3 relative cursor-pointer'>
              <img className='rounded-xl w-full h-38 md:h-44 object-cover object-top' src={formal} alt="Formal" />
              <span className='absolute  top-3 left-4  text-2xl font-bold '>Formal</span>
            </div>
          </div>

          {/* Second Row */}
          <div className='flex flex-col md:flex-row gap-3 mt-3'>
            <div className='md:w-2/3 relative cursor-pointer'>
              <img className='rounded-xl w-full h-40 object-cover object-top' src={party} alt="Party" />
              <span className='absolute  top-3 left-4  text-2xl font-bold '>Party</span>
            </div>

            <div className='md:w-1/3 relative cursor-pointer'>
              <img className='rounded-xl w-full h-40 object-cover object-top' src={gym} alt="Gym" />
              <span className='absolute  top-3 left-4  text-2xl font-bold '>Gym</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default DressStyle;
