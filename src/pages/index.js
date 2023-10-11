import { Inter } from 'next/font/google'
import Carousel from '../../components/Carousel'
import { BiSolidFactory  } from 'react-icons/bi'
import { BsPeopleFill, BsGlobeAmericas, BsClockFill  } from 'react-icons/bs'

import useIsVisible from '../../components/animation/useIsVisible'
import { useRef } from 'react'
import AboutSection from '../../components/AboutSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  return (
    <>
    <Carousel/>
    <AboutSection/>
    <hr />

    <div className='mt-4'>
      <h1 className='text-center font-bold text-xl'>OUR CORE VALUES</h1>
      <div ref={ref3} className={`container mx-auto py-8 transition-opacity ease-in duration-1500 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
        <div className="flex flex-wrap justify-center">
          {/* Card 1 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:text-white hover:bg-blue-950 duration-1000">
              <div className='flex justify-center'>
                <BsClockFill className='text-5xl'/>
              </div>
              <h2 className="text-xl font-semibold mt-4">ONTIME DELIVERY</h2>
              <p className="mt-4 text-justify">
              Meet and exceed the complex building performance requirements of your building through building enclosure commissioning.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:text-white hover:bg-blue-950 duration-1000">
              <div className='flex justify-center'>
                <BiSolidFactory className='text-5xl'/>
              </div>
              <h2 className="text-xl font-semibold mt-4">INDUSTRY EXPERIENCE</h2>
              <p className="mt-4 text-justify">
              You have contract obligations to meet and little time to meet them. Reduce the risk with your curtain wall and fenestration products with on-site testing.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:text-white hover:bg-blue-950 duration-1000">
              <div className='flex justify-center'>
                <BsPeopleFill className='text-5xl'/>
              </div>
              <h2 className="text-xl font-semibold mt-4">COMPETITIVE PRICE</h2>
              <p className="mt-4 text-justify">
              Mitigate the risk of fire and smoke damage to your building and ensure the safety of the people inside by working with our team of highly experienced.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:text-white hover:bg-blue-950 duration-1000">
              <div className='flex justify-center'>
                <BsGlobeAmericas className='text-5xl'/>
              </div>
              <h2 className="text-xl font-semibold mt-4">GLOBAL NETWORK</h2>
              <p className="mt-4 text-justify">
              Understand how open spaces, wall placement, and other design aspects of your building will affect the acoustical and technological performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
