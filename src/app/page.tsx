import HighlightedText from '@/components/HighlightedText';
import React from 'react';
import SkillsTags from '@/components/skillBlocks';
import CallToAction from '@/components/CallToAction';
import Testimonials from '@/components/Testimonial';
import Experience from '@/components/Experiences';
import { Faq } from '@/components/Faq';
import CaseStudy from '@/components/CaseStudy';
import MarqueeComponent from '@/components/Marquee';
import Hero from '@/components/Hero';
import Link from 'next/link';
import Marquee from '@/components/Marque';
import CollaborativeGallery from '@/components/GalleryCard';

const Home = () => {
  return (
    <div className="flex flex-col w-screen items-center justify-center">
        <Hero />
  
      {/* Wrap the rest of the components in max-w-5xl */}
      <div className="max-w-5xl w-full flex-col items-center  flex lg:gap-20 mx-auto px-4 md:px-8">
        <div className="flex items-center lg:relative  flex-col gap-8">
          <CaseStudy />
          <div>
            <Link
              href="/work"
              className="mt-8 bg-black inline-block self-center font-medium text-white py-2 px-4 rounded-full hover:bg-gray-800 transition"
            >
              View All Studies
            </Link>
          </div>
        </div>

        <div className="md:px-8 w-full lg:relative mt-24 lg:mt-10  flex items-center justify-center mb-20">
          <HighlightedText />
        </div>

        <Testimonials />

        <div className="flex w-full lg:mb-20 h-full relative overflow-x-hidden flex-col gap-8">
          <Marquee />
        </div>

        <div className="flex flex-col mt-20 lg:mb-20 gap-8">
          <h2 className="text-3xl font-semibold overflow-x-hidden justify-center lg:justify-start flex mb-6 text-gray-800">
            Skills
          </h2>
          <SkillsTags />
        </div>

        <div className="flex w-full mb-20 lg:mb-20 h-full relative overflow-x-hidden mt-20 flex-col gap-8">
          <CollaborativeGallery />
        </div>

        <div className="flex w-full relative overflow-x-hidden lg:mb-20 flex-col gap-8">
          <h2 className="text-3xl font-semibold overflow-y-hidden overflow-x-hidden justify-center lg:justify-start flex mb-6">
            Tools
          </h2>
          <MarqueeComponent />
        </div>

        <div className="flex w-full mb-20 lg:mb-20 lg:mt-20 h-full relative overflow-x-hidden overflow-y-hidden  flex-col gap-8">
        <Experience />
        </div>

        <Faq />
      </div>

      <CallToAction />
    </div>
  );
};

export default Home;
