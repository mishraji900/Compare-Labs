'use client'
import React from 'react'
import Button from '../components/Button'

const page = () => {
  return (
    <div id='predict' className='h-screen mx-10 rounded-3xl  px-5'>
      <div>
      <h1 className='text-5xl text-center my-4 font-bold text-white font-custom'>Find what you need!</h1>
      </div>
      <div className='grid grid-cols-2 p-5 bg-pink-600/10 rounded-3xl'>
        <div className='text-white p-4 my-auto mx-auto rounded-lg'>
          <form action="" className='space-y-10 text-3xl font-custom '>
            <div className='space-x-4 font-medium'>
              <label>Date of Arrival</label>
              <input type="date" name="date of arrival" id="doa" className='p-2 rounded-3xl text-black' />
            </div>
            <div className='space-x-4 font-medium'>
              <label>Date of Departure</label>
              <input type="date" name="date of departure" id="dod" className='p-2 rounded-3xl text-black' />
            </div>
            <div className='space-x-4 font-medium'>
              <label>Source</label>
              <input type='text' className='p-2 rounded-3xl text-black' />
            </div>
            <div className='space-x-4 font-medium'>
              <label>Destination</label>
              <input type='text' className='p-2 rounded-3xl text-black' />
            </div>
            <div className='space-x-4 font-medium'>
              <label>Which Airline you want</label>
              <input type="text" className='p-2 rounded-3xl text-black' />
            </div>
            <Button className='bg-white hover:bg-pink-600 hover:text-white text-black font-sans w-full rounded-full' text="Submit ->" link='/#predict' />
          </form>
        </div>
        <div className='text-white p-4 my-auto mx-auto rounded-lg'>
          result
        </div>
      </div>
    </div>
  )
}

export default page