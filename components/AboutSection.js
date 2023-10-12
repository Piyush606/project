import React, { useEffect } from 'react'

import useIsVisible from './animation/useIsVisible'
import { useRef } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image'

const AboutSection = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  return (
    <section>
    <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
      {/* <div ref={ref1} className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 transform ease-out duration-1500 ${isVisible1 ? "translate-x-[0%] opacity-100" : "translate-x-[-100%] opacity-0"}`}> */}
      <div className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0`} data-aos='fade-right'>
        <Image width={720} height={600}
          className="object-cover object-center rounded"
          alt="hero"
          src="/image/4.png"
        />
      </div>
      <div ref={ref2} className={`lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center transition-opacity ease-in duration-2000 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
        <h2 className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-900">
          About Us
        </h2>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        WE ARE HIGHLY
RECOMMENDABLE STEEL
& MANUFACTURER FIRM
          {/* <br className="hidden lg:inline-block" />
          readymade gluten */}
        </h1>
        <p className="mb-8 leading-relaxed">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
          tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
          chambray.
        </p>
      </div>
    </div>
  </section>
  )
}

export default AboutSection