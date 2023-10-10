import React from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi';
import { BsPinterest } from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiOutlineMail} from 'react-icons/ai';
import {FaLocationDot} from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 md:py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    {/* <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
     
    </div> */}
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/3 w-full px-4 flex flex-col align-middle">
      <Link className="flex justify-center md:justify-start" href="/">
          <Image width={160} height={62} src="/image/logo.png" alt="" />  
      </Link>
      {/* <p className="my-5 text-sm text-gray-500 text-center">
        Air plant banjo lyft occupy retro adaptogen indego
      </p> */}
      <div className='flex my-5 justify-center md:justify-start'>
          <a href="">
              <AiFillFacebook className='text-black text-3xl hover:text-blue-900 cursor-pointer'/>
          </a>
          <a href="">
              <AiFillTwitterCircle className='text-black ml-3 text-3xl hover:text-blue-900 cursor-pointer'/>
          </a>
          <a href="">
              <AiFillLinkedin className='text-black ml-3 text-3xl hover:text-blue-900 cursor-pointer'/>
          </a>
          <a href="">
              <AiFillInstagram className='text-black ml-3 text-3xl hover:text-blue-900 cursor-pointer'/>
          </a>
          <a href="">
              <BsPinterest className='text-black ml-3 text-3xl hover:text-blue-900 cursor-pointer'/>
          </a>
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
      <div className="lg:w-1/3 w-full px-4 my-8 md:my-0">
        <h2 className="font-bold mb-3">
          QUICK LINKS
        </h2>
        <nav className="list-none mb-10">
          <li className="mb-2">
            <a className="text-gray-900 hover:text-blue-800 cursor-pointer">ABOUT</a>
          </li>
          <li className="mb-2">
            <a className="text-gray-900 hover:text-blue-800 cursor-pointer">SERVICES</a>
          </li>
          <li className="mb-2">
            <a className="text-gray-900 hover:text-blue-800 cursor-pointer">BLOG</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/3 w-full px-4">
        <h2 className="font-bold mb-3 text-start">
          CONTACT
        </h2>
        <nav className="list-none mb-10">
          <li className="mb-2">
          <a href="tel:+917665556660" className="flex text-gray-900 hover:text-blue-800">
          <div className='w-8'>
          <BiSolidPhoneCall className='mt-1 mr-2'/>
            </div>
            <span className=''>
            7665556660</span></a>
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
</footer>

  )
}

export default Footer