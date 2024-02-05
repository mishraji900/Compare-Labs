import React from 'react'

const Project = ({ project }) => {
  return (
    <>
      <div className='md:block hidden'>
        {project.map((project, index) => (
          <div key={index} className=' md:p-4 rounded-lg h-[440px] mb-4'>
            <h2 className='md:text-3xl text-xl text-center font-custom font-bold text-pink-400'>{project.name}</h2>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-4 md:m-4'>
              <div className=' bg-white md:text-base text-sm p-2 md:col-span-2 rounded-lg shadow-md shadow-pink-500'>
                <p className='text-gray-800 text-left'>Purpose: {project.purpose}</p>
                <p className='text-gray-600'>Mentor: {project.mentor}</p>
                <p className='text-gray-600'>Technologies Used: {project.techno}</p>
                <p className='text-gray-600'>Project Details: {project.project}</p>
              </div>
              <div className='bg-pink-500 p-2 rounded-lg shadow-md shadow-gray-500'>
                image
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='md:hidden'>
        {project.map((project, index) => (
          <div key={index} className=' md:p-4 rounded-lg h-[440px] mb-4'>
            <h2 className='md:text-3xl text-xl text-center font-custom font-bold text-pink-400'>{project.name}</h2>
            <div className='bg-pink-500 p-2 mt-4 rounded-lg shadow-md shadow-gray-500'>
              image
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-4 md:m-4'>
              <div className=' bg-white md:text-base text-sm p-2 md:col-span-2 rounded-lg shadow-md shadow-pink-500'>
                <p className='text-gray-800 text-left'>Purpose: {project.purpose}</p>
                <p className='text-gray-600'>Mentor: {project.mentor}</p>
                <p className='text-gray-600'>Technologies Used: {project.techno}</p>
                <p className='text-gray-600'>Project Details: {project.project}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Project