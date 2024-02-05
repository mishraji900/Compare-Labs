"use client"
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Member = ({ name, about, git, linked, insta, img, role }) => {
  const [isFlip, setIsFlip] = useState(false);

  const flipCard = () => {
    setIsFlip(!isFlip);

    // Set a timer to revert the card back after 10 seconds
    setTimeout(() => {
      setIsFlip(false);
    }, 7000); // 10 seconds in milliseconds
  };

  return (
    <div className='' >
      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlip}>
        <div className='bg-white p-4 rounded-lg shadow-md flex w-32 md:w-80 md:h-[465px] h-64 flex-col text-center'>
          <div className='md:w-72 w-24'>
            <img src={img} alt="" className='md:rounded-2xl rounded-full md:w-72 md:h-80 w-24 h-24' />
          </div>
          <h2 className='md:text-2xl text-base font-bold'>{name}</h2>
          <p className='font-bold font-custom text-sm'>{role}</p>
          <div className='flex flex-col items-center mt-2 font-bold text-sm md:text-2xl mx-auto'>
            <div className="flex flex-row">
              <a href={git} className='mr-2' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
              </a>
              <a href={linked} className='mr-2' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin />
              </a>
              <a href={insta} target='_blank' rel='noopener noreferrer'>
                <FaInstagram />
              </a>
            </div>
            <div className='md:flex hidden hover:cursor-pointer ' onClick={flipCard}>
              <p className='text-xs my-auto'>Click to flip</p>
              <img src="/flipa.png" alt="" className='md:w-10 w-5' />
            </div>
          </div>

        </div>
        <div className='bg-pink-500 text-lg text-white p-4 rounded-lg shadow-md text-center leading-snug md:font-medium w-80 h-[465px]'>
          <div>
            {about}
          </div>
        
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Member;
