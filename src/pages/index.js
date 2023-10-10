import Image from 'next/image'
import { Inter } from 'next/font/google'
import Carousel from '../../components/Carousel'
import { BiSolidFactory  } from 'react-icons/bi'
import { BsPeopleFill, BsGlobeAmericas, BsClockFill  } from 'react-icons/bs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Carousel/>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
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
    <hr />

    <div className='mt-4'>
      <h1 className='text-center font-bold text-xl'>OUR CORE VALUES</h1>
      <div className="container mx-auto py-8">
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
