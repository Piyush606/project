import React, { useRef } from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi';
import {AiOutlineMail} from 'react-icons/ai';
import {FaLocationDot} from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';
import useIsVisible from './animation/useIsVisible';
import SocialIcons from './socialIcons';

const Footer = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  return (
    <footer className=''>
  <div className="container mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    {/* <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
     
    </div> */}
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-left">
      <div className="lg:w-1/3 w-full px-12 md:my-12 mb-4">
      <div ref={ref1} className={`transform ease-out duration-1000 ${isVisible1 ? "translate-y-[0%] opacity-100" : "translate-y-[50%] opacity-0"}`}>
      <Link className="flex" href="/">
          <Image width={160} height={62} src="/image/logo.png" alt="" />  
      </Link>
      {/* <p className="my-5 text-sm text-gray-500 text-center">
        Air plant banjo lyft occupy retro adaptogen indego
      </p> */}
      <p className='mt-4'>Dealer & Manufacturers of Cold Rolled Annealed, High Carbon Steel,Medium Carbon Steel, Alloy Steel Plates & Hardnend Tempered Steel</p>
      <div className='my-5'>
        <SocialIcons />
      </div>
      </div>
      </div>
      {/* <div className="lg:w-1/4 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div> */}
      <div className="md:w-2/3 w-full bg-slate-200 md:flex rounded-l-3xl">
        <div className='md:w-1/2 w-full my-12 px-12'>
          <div ref={ref2} className={`transform ease-out duration-1500 ${isVisible2 ? "translate-y-[0%] opacity-100" : "translate-y-[50%] opacity-0"}`}>
          <h2 className='font-bold mb-3 text-start'>
            QUICK LINKS
          </h2>
          <nav className="list-none mb-10">
            <li className="mb-2">
              <a className="flex text-gray-900 hover:text-blue-800 cursor-pointer">ABOUT</a>
            </li>
            <li className="mb-2">
              <a className="flex text-gray-900 hover:text-blue-800 cursor-pointer">SERVICES</a>
            </li>
            <li className="mb-2">
              <a className="flex text-gray-900 hover:text-blue-800 cursor-pointer">BLOG</a>
            </li>
          </nav>
          </div>
        </div>
        <div className="md:w-1/2 w-full my-12 px-12">
        <div ref={ref3} className={`transform ease-out duration-2000 ${isVisible3 ? "translate-y-[0%] opacity-100" : "translate-y-[50%] opacity-0"}`}>
          <h2 className="font-bold mb-3 text-start">
            CONTACT
          </h2>
          <nav className="list-none mb-10">
            <li className="mb-2">
            <a href="tel:+919982088592" className="flex text-gray-900 hover:text-blue-800">
            <div className='w-8'>
            <BiSolidPhoneCall className='mt-1 mr-2'/>
              </div>
              <span className=''>
              9982088592</span></a>
            </li>
            <li className="mb-2">
            <a href="mailto:bombaysalescorp1@gmail.com" className="flex text-gray-900 hover:text-blue-800">
              <div className='w-8'>
                <AiOutlineMail className='mt-1 mr-2'/>
              </div>
              <span>
                bombaysalescorp1@gmail.com
              </span>
            </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex text-gray-900 hover:text-blue-800 cursor-pointer">
              <div className='w-8 mr-4'>
                <FaLocationDot className='mt-1.5'/>
              </div>
              <div>
              Shop No A-5 Bharat Lokhand Bazar 1st Lane , MS Ali Road, Near Two Tank, Mumbai-400008, Maharashtra (INDIA)
              </div></a> 
            </li>
          </nav>
        </div>      
        </div>
      </div>
  </div>
  </div>
</footer>

  )
}

export default Footer