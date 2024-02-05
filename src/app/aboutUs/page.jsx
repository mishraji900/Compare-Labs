'use client'
import React, { useState } from 'react'
import Member from '../components/Member';
import { GoDotFill, GoDot } from "react-icons/go";
import { IoPeopleSharp } from "react-icons/io5";
import { VscProject } from "react-icons/vsc";

import Project from '../components/Project';
import ReactCardFlip from 'react-card-flip';

const MembersSection = ({ member }) => (
  <div className='xl:flex xl:flex-row grid grid-cols-2 space-y-4 md:space-x-5 h-fit xl:justify-evenly justify-items-center '>
    {member.map((member, index) => (
      <Member key={index} {...member} />
    ))}

  </div>
);
const page = () => {
  const [isflip,setisflip] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');
  function flipcard(){
    setisflip(!isflip);
  }
  const member = [
    {
      name: 'Mayank Mishra',
      about: 'A dynamic college student, excelling in programming, front-end development, and AI. Proficient in HTML, CSS, and JavaScript, they craft visually stunning user interfaces. Applying ML and AI expertise, they innovate solutions. A proactive learner and collaborative team player, they bring technical proficiency and creative insight. Positioned to impact the intersection of design and AI, this student is a forward-thinking contributor to tech\'s evolution.',
      git: 'git',
      linked: 'link',
      insta: 'insta',
      img:'/mayank.jpg',
      role:'Front-End Developer and ML/Ai specialist'
    },
    {
      name: 'Gourav Chatterjee',
      about: 'lorem',
      git: 'git',
      linked: 'link',
      insta: 'insta',
      img:'/gourav.png',
      role:'Back-End Developer'
    },
    {
      name: 'Rounit Kumar',
      about: 'Motivated college programmer with a strong foundation in programming and a hunger for innovative solutions. Proficient in various languages and frameworks, emphasizing efficiency. Demonstrates robust problem-solving and collaborative skills for project success. Committed to ongoing learning and staying updated with industry trends. Eager to apply academic knowledge and practical experience to tackle real-world challenges professionally.',
      git: 'git',
      linked: 'link',
      insta: 'insta',
      img:'/rounit.png',
      role:'Front-End Developer'
    },
    {
      name: 'Sarthak Prusty',
      about: 'lorem',
      git: 'git',
      linked: 'link',
      insta: 'insta',
      img:'/prusty.png',
      role:'Data Analyst'
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
    <div className='h-screen px-10' id='aboutUs'>
      <div>
        <h1 className='md:text-5xl text-3xl text-center my-4 font-bold text-white font-custom'>About Us</h1>
      </div>

      <div className='p-5'>
        {activeSection === 'projects' && <Project project={project} />}
        {activeSection === 'members' && <MembersSection member={member} />}

        <div className='flex justify-center mt-4 space-x-6'>
          <VscProject
            className={`text-3xl mx-1 cursor-pointer ${activeSection === 'projects' ? 'text-pink-600' : 'text-gray-400'}`}
            onClick={() => setActiveSection('projects')} />
          <IoPeopleSharp
            className={`text-3xl mx-1 cursor-pointer ${activeSection === 'members' ? 'text-pink-600' : 'text-gray-400'}`}
            onClick={() => setActiveSection('members')}
          />

        </div>
      </div>
    </div>
  )
}

export default page