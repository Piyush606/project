import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const WhatsappIcon = () => {
  return (
    <>
    <a href="https://wa.me/919982088592" className="fixed bottom-5 left-5 md:bottom-10 md:left-10 bg-green-500 rounded-full p-4 text-2xl text-white shadow-md z-[96]" target="_blank">
        <BsWhatsapp/>
    </a>
    </>
  )
}

export default WhatsappIcon