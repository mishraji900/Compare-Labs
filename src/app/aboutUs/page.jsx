'use client'
import React, { useState } from 'react'
import Member from '../../components/Member';
import { GoDotFill, GoDot } from "react-icons/go";
import { IoPeopleSharp } from "react-icons/io5";
import { VscProject } from "react-icons/vsc";

import Project from '../../components/Project';
import ReactCardFlip from 'react-card-flip';

const MembersSection = ({ member }) => (
  <>
    <h1 className='text-xl dark:text-[#7C3AED] text-[#2563EB] font-medium text-center my-3'>Members</h1>
    <div className='lg:flex lg:flex-row grid grid-cols-2 lg:gap-4 h-fit lg:justify-evenly justify-center'>
      {member.map((member, index) => (
        <Member key={index} {...member} />
      ))}
    </div>
  </>
);
const page = () => {
  const [isflip, setisflip] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');
  function flipcard() {
    setisflip(!isflip);
  }
  const member = [
    {
      name: 'Mayank Mishra',
      git: 'git',
      linked: 'link',
      insta: 'insta',
      img: '/mayank.jpg',
      role: 'Front-End and ML/Ai Developer'
    },
    {
      name: 'Gourav Chatterjee',
      git: 'git',
      linked: 'link',
      insta: 'insta',
      img: '/gourav.png',
      role: 'Back-End Developer'
    },
    {
      name: 'Rounit Kumar',
      git: 'git',
      linked: 'link',
      insta: 'insta',
      img: '/rounit.png',
      role: 'Front-End Developer'
    },
    {
      name: 'Sarthak Prusty',
      git: 'git',
      linked: 'link',
      insta: 'insta',
      img: '/prusty.png',
      role: 'Data Analyst'
    }
  ]
  const project = [
    {
      name: 'Flight price and delay prediction',
      purpose: 'purpose',
      mentor: 'Nibedan Panda',
      techno: 'used items',
      project: 'detail'
    }
  ]
  return (
    <div className=' h-screen w-screen md:px-10 px-8 container mx-auto py-8' id='aboutUs'>
      <div>
        <h1 className='md:text-4xl text-xl text-center mt-4 font-bold font-custom'>About Us</h1>
      </div>

      <div className='p-5 w-full'>
        {activeSection === 'projects' && <Project project={project} />}
        {activeSection === 'members' && <MembersSection member={member} />}

        <div className='flex justify-center mt-10 space-x-6'>
          <VscProject
            className={`text-3xl mx-1 cursor-pointer ${activeSection === 'projects' ? 'text-[#7C3AED]' : 'text-gray-400'}`}
            onClick={() => setActiveSection('projects')} />
          <IoPeopleSharp
            className={`text-3xl mx-1 cursor-pointer ${activeSection === 'members' ? 'text-[#7C3AED]' : 'text-gray-400'}`}
            onClick={() => setActiveSection('members')}
          />

        </div>
      </div>
    </div>
  )
}

export default page