import React from 'react'
import { BsPinterest } from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiOutlineMail} from 'react-icons/ai';

const SocialIcons = () => {
  return (
    <div className='flex'>
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
  )
}

export default SocialIcons