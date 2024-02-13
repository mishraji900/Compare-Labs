import Link from 'next/link';
import React from 'react'
import { LuGitCompare } from "react-icons/lu";
const Footer = () => {
  return (
    <div className='border-t border-gray-600 p-10 flex flex-col md:flex-row items-center justify-between gap-10'>
      <div className='text-sm md:text-base text-white w-96'>
        <h1 className='font-custom text-3xl'>Why CompareLabs?</h1>
        <p>"CompareLabs" emphasizes our dedication to thorough comparison and data-driven analysis for predicting flight prices and delays. It signals our commitment to innovation and experimentation in delivering accurate insights for informed travel decisions.
        </p>
      </div>
      <div className='text-sm md:text-base text-gray-500 '>
        <div className="grid grid-cols-3 md:flex md:flex-col min-w-full items-center justify-center">
          <div>
            <Link href="/contactUs"><p>Contact Information</p></Link>
          </div>
          <div>
            <Link href="/aboutUs"><p>Company Information</p></Link>
          </div>
          <div>
            <p>Privacy Policy</p>
          </div>
          <div>
            <p>Terms of Service</p>
          </div>
          <div>
            <p>FAQs</p>
          </div>
          <div>
            <p>Disclaimer</p>
          </div>
          <div>
            <p>Copyright Information</p>
          </div>
        </div>

      </div>
      <div className='text-sm md:text-base text-white'>
        <h1 className='font-custom flex text-3xl'>©2023<LuGitCompare />CompareLabs</h1>
        <p>Country India</p>
        <p>
          All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer