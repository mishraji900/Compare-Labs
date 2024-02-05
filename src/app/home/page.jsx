'use client'
import React from 'react'
import Button from '../components/Button'

const page = () => {
  return (
    <div className=''>
      <div className='grid-cols-2 hidden md:grid lg:h-screen h-fit'>
        <div className='p-10 lg:my-20'>
          <div className=' space-y-5 text-gray-300 '>
            <h1 className='lg:text-5xl text-3xl font-custom font-bold '>
              Enhancing Travel Efficiency through Proactive Insights
            </h1>
            <p className='lg:pr-20 pr-10 text-lg text-left'>
              Experience travel like never before with our cutting-edge technology that predicts both flight delays and prices. Gain proactive insights for optimized journeys and seize the advantage in travel planning. Elevate your experience with precision and efficiency, ensuring a seamless and economically savvy adventure. Welcome to a new era of smarter travel.
            </p>
          </div>
          <div className='mt-10 space-x-12'>
            <Button className='bg-white hover:bg-pink-600 hover:text-white text-black' text="Let's predict ->" link='/predict' />
            <Button className='bg-gray-400 text-white hover:bg-pink-800 hover:text-gray-300' text="About Us" link='/aboutUs' />

          </div>
        </div>
        <div className='bg-gray-600/50 p-10 mr-7 h-fit rounded-lg my-auto'>
          <img src="/h1.jpg" alt="" className='w-[650px] md:h-[300px] lg:h-[550px] ' />
        </div>
      </div>
      <div className='sm:block md:hidden h-fit'>
        <div className='p-10 my-5'>
          <div className='bg-gray-600/50 p-10 mb-4 h-fit rounded-lg'>
            <img src="/h1.jpg" alt="" className='w-[650px] h-[250px] ' />
          </div>
          <div className=' space-y-5 text-gray-300  '>
            <h1 className='text-3xl text-center font-custom font-bold '>
              Enhancing Travel Efficiency through Proactive Insights
            </h1>
            <p className='text-lg text-center'>
              Experience travel like never before with our cutting-edge technology that predicts both flight delays and prices. Gain proactive insights for optimized journeys and seize the advantage in travel planning. Elevate your experience with precision and efficiency, ensuring a seamless and economically savvy adventure. Welcome to a new era of smarter travel.
            </p>
          </div>
          <div className='mt-10 space-x-12 flex'>
            <Button className='bg-white hover:bg-pink-600 hover:text-white text-black' text="Let's predict ->" link='/predict' />
            <Button className='bg-gray-400 text-white hover:bg-pink-800 hover:text-gray-300' text="About Us" link='/aboutUs' />

          </div>
        </div>

      </div>
    </div>
  )
}

export default page