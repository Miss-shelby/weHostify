/* eslint-disable no-unused-vars */
import React from 'react'
import { FeaturesCard } from './Cards/FeatureCard'
import { features } from '../../../../data'
import { BGGRADIENT, GLOW } from '../../../../constants/assetexports'
import {motion} from "framer-motion"
const Features = () => {
  return (
    <>
    <div className='xl:max-w-[1500px] overflow-hidden  mx-auto flex flex-col items-center justify-center pt-20 lg:pt-28  relative  px-6 lg:px-16'>
        
        <div className="flex flex-col xl:flex-row items-center justify-between w-full ">
            <motion.div 
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView= {{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.6,delay:0.4 }}
             viewport={{ once: true,amount:"all"}}
            className="xl:max-w-lg w-full pb-6 xl:pb-0">
              <p className="text-base sm:text-base text-[#616161] text-center sm:text-left dark:text-[#EDEDED] font-sans ">CMS Compatibility – Built for the Tools You Know</p>
               <p className="text-2xl leading-tight lg:text-3xl font-bold text-center sm:text-left font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-2">Works Perfectly with WordPress, Joomla, and More</p>
                <p className="text-lg leading-tight xl:max-w-3xl text-center sm:text-left mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2 ">WeHostify is designed to run seamlessly with the world’s most trusted content management systems — so you can keep building with what you’re already comfortable using.  </p>
            </motion.div>
             <img className=' object-contain lg:hidden absolute z-[0] right-0 top-52 opacity-40' src={BGGRADIENT} alt='Yellow gradient'/>
            <div className="grid  sm:px-0 lg:grid-cols-2 grid-rows-2 gap-6 z-10 relative">
                {
                    features.map((f,idx)=>(
                        <FeaturesCard  key={idx} {...f}/>
                    ))
                }
            </div>
           
        </div>
        <img src={GLOW} alt="right-gradient glow"
        className="absolute   md:hidden  bottom-[-100px] h-[300px] w-[300px] z-0 transform opacity-55   object-cover   left-1/2"/>
    </div>
    </>
  )
}

export default Features

