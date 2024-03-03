"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LuGitCompare } from "react-icons/lu";
import { ModeToggle } from "@/components/dark-toggle"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { HomeIcon, BarChartIcon, EnvelopeClosedIcon, PersonIcon } from "@radix-ui/react-icons"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



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
      link: "#hero",
      icons: <HomeIcon className="font-semibold" />
    },
    {
      id: 2,
      name: "Predict",
      link: "#predict",
      icons: <BarChartIcon className="font-semibold" />
    },
    {
      id: 3,
      name: "About Us",
      link: "#aboutUs",
      icons: <PersonIcon className="font-semibold" />
    },
    {
      id: 4,
      name: "Contact Us",
      link: "#contact",
      icons: <EnvelopeClosedIcon className="font-semibold" />
    },
  ];

  return (
    <div className="w-full bg-zinc-950 fixed top-0 z-50">
    <div className="flex justify-between mx-auto  items-center w-10/12 h-20 bg-transparent">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:border-b-2 hover:border-white" href="">Logo</a></h1> */}
        <h1 className="text-xl font-custom font-bold tracking-wide space-x-3 flex flex-row items-center justify-center">
          <LuGitCompare className="dark:text-[#7C3AED] text-[#2563EB]" />
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

      <ul className="hidden md:flex items-center">
        {links.map(({ id, link, name, icons }) => (
          <li
            key={id}
            className="nav-links mx-4 cursor-pointer capitalize font-medium
            hover:text-[#2563EB] hover:scale-105 dark:hover:text-[#7C3AED] duration-200 link-underline hover:border-b-2 dark:hover:border-white border-black"
          >
            <Link href={link} className="flex items-center gap-2">
              {icons}
              <span>{name}</span>
            </Link>
          </li>
        ))}
        <li>
          <ModeToggle />
        </li>
      </ul>
      <div className="md:hidden block ml-auto">
        <ModeToggle />
      </div>
      <div className="md:hidden block">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" ><FaBars size={30} /></Button>
          </SheetTrigger>


          <SheetContent> {/* Make sure to add a unique key for each iteration */}
            <SheetHeader>
              <SheetTitle className="md:text-4xl text-xl font-custom font-bold tracking-wide ml-2 flex flex-row">

                <LuGitCompare className="dark:text-[#7C3AED] text-[#2563EB]" />
                <a
                  className="link-underline link-underline-black"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  Compare Labs
                </a>

              </SheetTitle>
              <SheetDescription>
                Navigate with ease: Your gateway to seamless browsing.
              </SheetDescription>
            </SheetHeader>
            <SheetFooter className="grid gap-4 py-4">
              {links.map(({ id, link, name, icons }) => (
                <SheetClose asChild className="grid grid-cols-4 items-center gap-4" key={id}>
                  <Link href={link}>
                    <Label htmlFor="name" className="text-left w-[35vw] space-x-4 flex" >
                      {icons}
                      <span className="font-semibold">{name}</span> {/* Use the name provided in the data */}
                    </Label>
                  </Link>
                </SheetClose>
              ))}
            </SheetFooter>
          </SheetContent>

        </Sheet>
      </div>

    </div>
    </div>
  );
};

export default Navbar;