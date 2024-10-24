// components/CallToAction.tsx
import React from 'react';

const   CallToAction: React.FC = () => {
  return (
   <div  className="bg-black flex mt-24 w-full pt-24 pb-10 item-center justify-center" >
     <div className="flex flex-col  items-center  justify-center w-full max-w-5xl lg:h-[40vh] h-[70vh]  relative text-white">
      <h2 className="text-4xl lg:w-[304px] text-center font-semibold mb-4">
        Interested in working together?
      </h2>
      <p className="text-lg mb-8">Let&apos;s bring your vision to life.</p>

      <button className="px-6 py-3 text-lg font-semibold text-black bg-white rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
        Book Discovery Call
      </button>

      <footer className=" flex mt-14 lg:flex-row w-full justify-between flex-col items-center text-white text-center space-y-2">
        <p className="text-sm mt-4">© Goran Babarogic 2024</p>
        <div className="flex space-x-6">
          <a
            href="#"
            className="hover:underline text-sm text-white"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:underline text-sm text-white"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href="#"
            className="hover:underline text-sm text-white"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            href="#"
            className="hover:underline text-sm text-white"
            aria-label="Email Me"
          >
            Email Me
          </a>
        </div>
      </footer>
    </div>
   </div>
  );
};

export default CallToAction;
