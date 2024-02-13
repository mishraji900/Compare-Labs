"use client"
import Link from "next/link";
import React, { useState,useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LuGitCompare } from "react-icons/lu";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Assuming 768px is your md breakpoint
          setNav(false);
      }
  };
  
  // Set up event listener for window resize
  useEffect(() => {
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  const links = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Predict",
      link: "/predict",
    },
    {
      id: 3,
      name: "AboutUs",
      link: "/aboutUs",
    },
    {
      id: 4,
      name: "ContactUs",
      link: "/contactUs",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-transparent nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:border-b-2 hover:border-white" href="">Logo</a></h1> */}
        <h1 className="md:text-5xl text-2xl font-custom font-bold tracking-wide ml-2 flex flex-row">
        <LuGitCompare />
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Compare Labs
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link,name }) => (
          <li
            key={id}
            className="nav-links mx-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-pink-500 duration-200 link-underline hover:border-b-2 hover:border-white"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center z-40 absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link ,name}) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;