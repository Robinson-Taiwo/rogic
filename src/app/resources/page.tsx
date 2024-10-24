import CallToAction from '@/components/CallToAction'
import FigmaUIKits from '@/components/FigmaKits'
import TemplatesGrid from '@/components/Template'
import ToolsSection from '@/components/Tools'
import React from 'react'

const page = () => {
    return (
        <div className="w-full  items-center flex-col justify-center pt-28  flex "  >


            <div className="max-w-5xl flex items-center justify-center flex-col ">

                <div className="w-full px-8  text-sm items-center mb-6 justify-center flex">Framer templates and design tools
                </div>
                <div className="w-full recoleta text-5xl items-center justify-center font-light flex">Resources

                </div>

                <div className="w-full"  >
                    <TemplatesGrid />
                </div>


                <div className='w-full justify-center px-8  lg:px-8 items-center flex flex-col ' >
                    <h2 className="text-3xl lg:text-2xl text-black text-opacity-75  font-semibold mb-8">Tools</h2>

                    <ToolsSection />
                </div>

                <div className='w-full  px-8 pt-20 pb-20 '  >
                    <FigmaUIKits />
                </div>



            </div>
            <CallToAction />

        </div>
    )
}

export default page
