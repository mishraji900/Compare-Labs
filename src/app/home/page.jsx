'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const page = () => {
  return (
    <div className=' container mx-auto h-screen my-auto w-screen' id='hero'>
      <div className='hidden md:flex flex-1 justify-center items-center lg:h-screen h-fit'>
        <div className=' w-[50vw]'>
          <div className=' space-y-5'>
            <h1 className='lg:text-5xl text-3xl font-custom font-bold '>
              Enhancing Travel <span className='text-[#2563EB] dark:text-[#7C3AED]'>Efficiency</span> through Proactive Insights
            </h1>
            <p className='lg:pr-20 pr-10 text-base text-left'>
              Experience travel like never before with our cutting-edge technology that predicts both flight delays and prices. Gain proactive insights for optimized journeys and seize the advantage in travel planning. Elevate your experience with precision and efficiency, ensuring a seamless and economically savvy adventure. Welcome to a new era of smarter travel.
            </p>
          </div>
          <div className='mt-10 space-x-12'>
            <Button asChild className="bg-[#2563EB] hover:bg-[#2563EB]/90 dark:bg-[#7C3AED] text-white/90 hover:dark:bg-[#7C3AED]/70 hover:text-white" ><Link href="/predict">Let's Predict</Link></Button>
            <Button asChild className="bg-gray-400 hover:bg-gray-600 dark:bg-gray-600/40 dark:hover:bg-gray-600/60 text-white/90  " ><Link href="/aboutUs">About Us</Link></Button>


          </div>
        </div>
        <div className=' dark:border-b-2 border-b-2 border-gray-600 p-10 rounded-lg my-auto w-[40vw] lg:h-fit h-[70vh] '>
          <img src="/analyse.svg" alt="" className='w-[50vw] h-[60vh]' />
        </div>
      </div>
      <div className='sm:flex sm:flex-col items-center py-10  md:hidden h-screen space-y-5'>

        <div className='dark:border-b-2 border-b-2 border-gray-600 p-10 rounded-lg mx-auto w-[70vw] h-fit'>
          <img src="/analyse.svg" alt="" className='w-[50vw]' />
        </div>



        <div className=' space-y-5'>
          <h1 className='text-3xl text-center font-custom font-bold '>
            Enhancing Travel <span className='text-[#2563EB] dark:text-[#7C3AED]'>Efficiency</span> through Proactive Insights
          </h1>
          <p className='text-lg text-left px-6'>
            Experience travel like never before with our cutting-edge technology that predicts both flight delays and prices. Gain proactive insights for optimized journeys and seize the advantage in travel planning. Elevate your experience with precision and efficiency, ensuring a seamless and economically savvy adventure. Welcome to a new era of smarter travel.
          </p>
        </div>


        <div className=' space-x-12 flex justify-center items-center'>
          <Button asChild className="bg-[#2563EB] hover:bg-[#2563EB]/90 dark:bg-[#7C3AED] text-white/90 hover:dark:bg-[#7C3AED]/70 hover:text-white" ><Link href="/predict">Let's Predict</Link></Button>
          <Button asChild className="bg-gray-400 hover:bg-gray-600 dark:bg-gray-600/40 dark:hover:bg-gray-600/60 text-white/90  " ><Link href="/aboutUs">About Us</Link></Button>

        </div>


      </div>
    </div>
  )
}

export default page