import HighlightedText from '@/components/HighlightedText'

import React from 'react'
import SkillsTags from '@/components/skillBlocks'
import CallToAction from '@/components/CallToAction'
import Testimonials from '@/components/Testimonial'
import Experience from '@/components/Experiences'
import { Faq } from '@/components/Faq'
import CaseStudy from '@/components/CaseStudy'
import MarqueeComponent from '@/components/Marquee'
import Hero from '@/components/Hero'
import Link from 'next/link'

const Home = () => {
  return (
    <div className=" flex flex-col w-screen items-center justify-center " >


      <div className="flex relative w-full max-w-5xl px-4 md:px-8 gap-36  flex-col items-center">

        <Hero />

        <div className="flex items-center flex-col gap-8">

          <CaseStudy />
          <div  >
            <Link href="/work" className="mt-8 bg-black inline-block self-center font-medium text-white py-2 px-4 rounded-full hover:bg-gray-800 transition">
              View All Studies
            </Link>
          </div>
        </div>

        <HighlightedText />

        {/* 
        <div className="max-w-5xl">

        <div className="flex flex-row w-full  "  >

          <div className="flex-col">

            <div className="icon">
              <Image src={card} alt="image"  className='h-fit  w-fit '   width={50} height={30} />
            </div>

            <div className="texts">

            </div>


          </div>


          <div>



          </div>



        </div>

        </div> */}



        <Testimonials />


        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-semibold justify-center lg:justify-start flex  mb-6 text-gray-800">Skills</h2>

          <SkillsTags />
        </div>



        <div className="flex w-full  flex-col gap-8">
          <h2 className="text-3xl font-semibold  justify-center lg:justify-start flex  mb-6 text-gray-800">Tools</h2>

          <MarqueeComponent />
        </div>

        <Experience />
        <Faq />


      </div>
      <CallToAction />

    </div>
  )
}

export default Home
