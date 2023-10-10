import React, { useState } from 'react'
import Link from 'next/link';
import './header.module.css';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { BsPinterest } from 'react-icons/bs';
import {AiOutlineMail, AiFillTwitterCircle, AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillCloseCircle, AiOutlineMenu} from 'react-icons/ai';
import Image from 'next/image';

const Header = () => {

    const [isActive, setIsActive] = useState(false);

    function Menu(e){
        let list = document.querySelector('ul');
        e === 1 ? (list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :(list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
    }

  return (
    <>
    <header className="body-font hidden md:block">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center bg-slate-200"> 
        <div className="md:mr-auto bg-blue-800 w-2/3 py-5 rounded-br-full rounded-tr-full">
            <nav className="flex flex-wrap items-center text-base ml-10">
                <a href="tel:+917665556660" className="text-white flex font-bold mr-5 hover:text-gray-200 border-white pl-4 border-l-2"><BiSolidPhoneCall className='mt-1 mr-2'/>7665556660</a>
                <a href="mailto:bombaysalescorp1@gmail.com" className="text-white flex font-bold mr-5 hover:text-gray-200 border-white pl-4 border-l-2"><AiOutlineMail className='mt-1 mr-2'/>bombaysalescorp1@gmail.com</a>
            </nav>
        </div>               
            <div className='flex mr-8'>
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
    </header>

<nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
  <div className="flex justify-between items-center ">
    <div>
    <Image width={160} height={62} src="/image/logo.png" alt="" />  
    </div>
    <span className="text-3xl cursor-pointer mx-2 md:hidden block">
      {isActive?<AiFillCloseCircle onClick={()=>{
       setIsActive(!isActive)
       Menu(0)
    }}/>:
         <AiOutlineMenu onClick={()=>{
       setIsActive(!isActive)
       Menu(1)
    }} />}
    </span>
  </div>
  <ul className="md:flex md:items-center z-50 md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
    <li className="mx-4 my-6 md:my-0">
      <Link href="/" className="font-bold text-xl hover:text-blue-900 duration-500">
        HOME
      </Link>
    </li>
    {/* <li className="mx-4 my-6 md:my-0">
      <a href="#" className="text-xl hover:text-blue-900 duration-500">
        SERVICE
      </a>
    </li> */}
    <li className="mx-4 my-6 md:my-0">
      <Link href="/about" className="font-bold text-xl hover:text-blue-900 duration-500">
        ABOUT
      </Link>
    </li>
    <li className="mx-4 my-6 md:my-0">
      <Link href="#" className="font-bold text-xl hover:text-blue-900 duration-500">
        SERVICES
      </Link>
    </li>
    <li className="flex mx-4 my-6 md:my-0">
      <Link href="/contact" className="bg-blue-900 text-white px-6 py-2 hover:bg-blue-700 duration-500 rounded ">
          <div className='flex align-middle'>
          <BiSolidPhoneCall className='mr-2 mt-1'/>
          <p className='font-bold'>CONTACT</p>
          </div>
      </Link>
    </li>
  </ul>
</nav>

    </>
  )
}

export default Header