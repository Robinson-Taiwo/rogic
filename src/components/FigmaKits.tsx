import React from 'react'

const FigmaKits = () => {
    return (
        <div className="w-full flex gap-8 flex-col " >

            <div className="w-full font-bold text-3xl  flex justify-center ">
                Figma UI Kits

            </div>
            <div className="w-full  pb-2 flex items-center flex-col lg:flex-row border-b border-b-border justify-between">

                <p className="text-gray-800 lg:text-2xl text-xl "  >Untitled UI & Design System

                </p>
                <button className="bg-gray-900 text-white lg:mt-0 mt-4 px-4 py-3 lg:py-4 rounded-full hover:bg-gray-700">
                    Learn more
                </button>
            </div>

            <div className="w-full flex pb-2 items-center flex-col lg:flex-row border-b border-b-border justify-between">

                <p className="text-gray-800  lg:text-2xl indeterminate: text-xl"  >Ant Design System for Figma


                </p>
                <button className="bg-gray-900 text-white lg:mt-0 mt-4 px-4 py-3 lg:py-4 rounded-full hover:bg-gray-700">
                    Learn more
                </button>
            </div>

        </div>
    )
}

export default FigmaKits
