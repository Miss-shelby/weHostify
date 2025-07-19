import React from 'react'

import { FeaturesCard } from './Cards/FeatureCard'
import { features } from '../../../../data'

const Features = () => {
  return (
    <div className='xl:max-w-[1500px]  mx-auto flex flex-col items-center justify-center pt-32 relative pb-10 px-6 lg:px-16'>
        <div className="flex flex-col xl:flex-row items-center justify-between w-full ">
            <div className="xl:max-w-lg w-full pb-6 xl:pb-0">
              <p className="text-sm sm:text-base text-[#616161] text-center sm:text-left dark:text-[#EDEDED] font-sans ">CMS Compatibility – Built for the Tools You Know</p>
               <p className="text-xl lg:text-3xl font-bold text-center sm:text-left font-sans text-[#130D08] dark:text-[#fff] pt-2">Works Perfectly with WordPress, Joomla, and More</p>
                <p className="text-xl xl:max-w-3xl text-center sm:text-left mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-2 ">WeHostify is designed to run seamlessly with the world’s most trusted content management systems — so you can keep building with what you’re already comfortable using.  </p>
            </div>
            <div className="grid px-6 sm:px-0 lg:grid-cols-2 grid-rows-2 gap-6 ">
                {
                    features.map((f,idx)=>(
                        <FeaturesCard  key={idx} {...f}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Features

