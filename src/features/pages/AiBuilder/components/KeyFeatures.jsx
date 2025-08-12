/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from "framer-motion"
import { BGGRADIENT, GLOW } from '../../../../constants/assetexports'
import { features, keyFeatures } from '../../../../data'
import { FeaturesCard, KeyFeaturesCard, ServicesCard } from '../../Home/components/Cards/FeatureCard'
import { Icons } from '../../../../Icons'
const KeyFeatures = () => {
  return (
    <>
    <div className='xl:max-w-[1500px] overflow-clip  mx-auto flex flex-col items-start justify-start pt-20   relative  px-6 lg:px-16'>
        <div>
            <p className="text-base sm:text-base text-[#616161] text-center sm:text-left dark:text-[#EDEDED] font-sans ">Key Features</p>
               <p className="text-2xl leading-tight lg:text-3xl font-bold text-center sm:text-left font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-2">Everything You Need to Launch Smarter, Faster, and Without Limits</p>
                <p className="text-lg leading-tight xl:max-w-2xl text-center sm:text-left font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2 ">WeHostify’s AI Website Builder comes packed with intelligent tools that take the hard work out of building.  </p>
        </div>
        
        <div className="flex flex-col mt-6 lg:mt-10 xl:flex-row items-center sm:items-start justify-between w-full ">
            <motion.div 
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView= {{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.6,delay:0.4 }}
             viewport={{ once: true,amount:"all"}}
            className="xl:max-w-md w-full pb-6 xl:pb-0">
               <div className='flex flex-col'>
                    <Icons.seo className=""/>
                    <div className='flex items-center pt-10 w-full justify-between'>
                        <div>
                        <p className='text-xl lg:text-[28px] text-[#130D08] dark:text-[#FFFFFF] pt-5 font-sans font-semibold'>Professional Website Builder</p>
                    <p className='text-base text-[#616161] dark:text-[#9C9B9B] pt-2 font-sans '>Responsive Design. Easy To Use. 49 languages. SEO</p>
                    </div>
                </div>
                         
                </div>
                <div className='flex flex-col mt-14'>
                    <Icons.plugins className=""/>
                    <div className='flex items-center pt-10 w-full justify-between'>
                        <div>
                        <p className='text-xl lg:text-[28px] text-[#130D08] dark:text-[#FFFFFF] pt-5 font-sans font-semibold'>Professional Many Plugins</p>
                    <p className='text-base text-[#616161] dark:text-[#9C9B9B] pt-2 font-sans '>Many functions and plugins, depending on geographical preferences</p>
                    </div>
                </div>
                         
                </div>
            </motion.div>
             <img className=' object-contain hidden lg:block translate-x-[20%] absolute z-[0] right-0 top-[10%] opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
            <div className="grid xl:max-w-3xl sm:px-0 lg:grid-cols-2 grid-rows-2 gap-6 z-10 relative">
                {
                    keyFeatures.map((f,idx)=>(
                        <KeyFeaturesCard  key={idx} {...f}/>
                    ))
                }
            </div>
           
        </div>
        <img src={GLOW} alt="right-gradient glow"
        className="absolute   hidden  bottom-[-100px] h-[300px] w-[300px] z-0 transform opacity-55   object-cover   left-1/2"/>
    </div>
    </>
  )
}

export default KeyFeatures

