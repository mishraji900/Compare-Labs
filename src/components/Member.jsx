"use client"
import React, { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Image from 'next/image';

const Member = ({ name, git, linked, insta, img, role }) => {

  return (
    <>
      <div className='lg:block hidden'>
        <HoverCard className="cursor-pointer">
          <HoverCardTrigger asChild>
            <div className='w-[18vw]'>
              <Image src={img} width={760} height={899} alt='' />
              <p className='text-lg text-center mt-4 border-b-2 flex flex-col cursor-default'><span>{name}</span></p>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">

              <div className="space-y-1">
                <h4 className="text-base font-semibold flex-row flex">
                  <a href={git} className='mr-2' target='_blank' rel='noopener noreferrer'>
                    <FaGithub />
                  </a>
                  <a href={linked} className='mr-2' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin />
                  </a>
                  <a href={insta} target='_blank' rel='noopener noreferrer'>
                    <FaInstagram />
                  </a>
                </h4>
                <p className="text-sm">
                  {role}
                </p>
                <div className="flex items-center pt-2">

                  <span className="text-xs text-muted-foreground">
                    Joined January 2024
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className='lg:hidden block'>
        <Popover>
          <PopoverTrigger>
            <div className='w-[35vw]'>
              <Image src={img} width={760} height={899} alt='' />
              <p className='text-lg text-center mt-4 border-b-2 flex flex-col cursor-default'><span>{name}</span></p>
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex justify-between space-x-4">

              <div className="space-y-1">
                <h4 className="text-base font-semibold flex-row flex">
                  <a href={git} className='mr-2' target='_blank' rel='noopener noreferrer'>
                    <FaGithub />
                  </a>
                  <a href={linked} className='mr-2' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin />
                  </a>
                  <a href={insta} target='_blank' rel='noopener noreferrer'>
                    <FaInstagram />
                  </a>
                </h4>
                <p className="text-sm">
                  {role}
                </p>
                <div className="flex items-center pt-2">

                  <span className="text-xs text-muted-foreground">
                    Joined January 2024
                  </span>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default Member;
