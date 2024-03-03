
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const Project = ({ project }) => {
  return (
    <>
      <div className='flex justify-center container'>
        {project.map((project, index) => (
          <div key={index} className=' md:p-4 rounded-lg h-[60vh] mb-4 space-y-5'>
            <div className='flex flex-col md:flex-row gap-4'>
              <div className='dark:bg-gray-600/30 dark:border-0 border-b-2 border-gray-600 p-4 rounded-lg mx-auto h-fit md:w-[25vw] w-[60vw]'>
                image
              </div>

              <Card className='  md:text-base text-sm p-2 md:col-span-2 rounded-lg md:w-[45vw] w-[70vw]'>
                <CardHeader>
                  <CardTitle>
                    <span className='text-xl dark:text-[#7C3AED] text-[#2563EB]'>{project.name}</span>
                  </CardTitle>
                  <CardDescription>
                    <span className='dark:text-gray-300 text-gray-800'>Purpose: {project.purpose}</span>
                    <span className='dark:text-gray-300 text-gray-800'>Mentor: {project.mentor}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col">
                  <span className='dark:text-gray-300 text-gray-800'>Technologies Used: {project.techno}</span>
                  <span className='dark:text-gray-300 text-gray-800'>Project Details: {project.project}</span>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Project