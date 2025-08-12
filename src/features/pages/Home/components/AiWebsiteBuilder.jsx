/* eslint-disable no-unused-vars */
import React from 'react'
import { BGGRADIENT,GLOW,MANONLAPTOP, SCRIBBLE,  SCRIBBLEMOBILE,  WEBSITETEMPLATE } from '../../../../constants/assetexports'
import ClipCard from '../../../shared/Cards/ClipCard'
import AIWebsiteCard from './Cards/AIWebsiteCard'
import {motion } from "framer-motion"
const AIWebsiteBuilder = () => {
  const headline ="Our AI Website Builder Features:"
  const words = headline.split(" ")
  return (
    <div className="relative">
          <div className="absolute overflow-hidden top-[500px] lg:top-[270px] right-0   z-0 pointer-events-none opacity-55 block ">
              <img src={GLOW} alt="glow"
                className=" object-cover lg:w-[667px] lg:h-[644px] translate-x-[20%] lg:-translate-y-[10%]  h-full right-0 w-[350px]  "/>
            </div>
        <div className='xl:max-w-[1500px]  mx-auto flex flex-col items-center justify-center pt-20 lg:pt-28 relative  px-6 lg:px-16'>
           {/* <div className="absolute top-[270px] right-0  z-0 pointer-events-none opacity-55 overflow-hidden hidden lg:block ">
              <img src={GLOW} alt="glow"
              className=" object-cover w-full h-full right-0"/>
          </div> */} 
            <div className="w-full z-20">
                <motion.p
                initial={{ filter: "blur(8px)", opacity: 0 }}
                whileInView={{ filter: "blur(0px)", opacity: 1 }}
                // viewport={{ once: true }}
                 viewport={{ once: true,amount:0.3 }}
                transition={{ duration: 1 }}
                 className="text-base sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">Describe It, and Watch Your Website Come to Life</motion.p>
                <motion.p 
                initial={{ filter: "blur(8px)", opacity: 0 }}
                whileInView={{ filter: "blur(0px)", opacity: 1 }}
                viewport={{ once: true,amount:0.3}}
                transition={{ duration: 1,delay:0.3 }}
                className="text-2xl leading-tight lg:text-[32px] font-bold font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-2 text-center">Let AI Build Your Website — No Tech Skills Needed</motion.p>
                <div className="">
                    <motion.p 
                    initial={{ filter: "blur(8px)", opacity: 0 }}
                whileInView={{ filter: "blur(0px)", opacity: 1 }}
                 viewport={{ once: true,amount:0.3 }}
                // viewport={{ once: true }}
                transition={{ duration: 1,delay:0.6 }}
                    className="text-lg leading-tight sm:text-xl lg:max-w-3xl mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2 text-center">With our smart AI website builder, all you have to do is tell us what your site is  <span className='lg:block'> about. We’ll generate a clean, responsive static web page in seconds. It’s fast,</span> it’s simple, and it just works. </motion.p>
                    <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-6 lg:mt-10 ">
                        <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                         viewport={{ once: true,amount:0.3 }}
                        // viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-[#FFDD001A] py-6  px-5 rounded-[30px]">
                           <img className="object-contain lg:w-[600px]" src={WEBSITETEMPLATE}/>
                        </motion.div>
                        <motion.div 
                        initial={{ x: 60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                         viewport={{ once: true,amount:0.3 }}
                        // viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className=" w-fit">
                             <img className="object-contain lg:w-[600px] z-10" src={MANONLAPTOP}/>
                        </motion.div>
                    </div>
                </div>
                <div className="mt-6 lg:mt-10">
                   <div className="flex flex-col-reverse w-full justify-between xl:flex-row  items-center ">
                    <AIWebsiteCard/>
                     <div className="flex flex-col xl:max-w-lg items-center justify-center w-full">
                      <motion.p className="text-[28px] md:text-4xl text-center text-[#130D08] dark:text-[#FFFFFF] font-semibold font-sans flex flex-wrap justify-center">
                          {
                            words.map((word,index)=>(
                              <motion.span
                              key={index}
                              initial={{ filter:"blur(10px)", opacity: 0, y: 12 }}
                                whileInView={{filter:"blur(0px)", opacity: 1, y: 0 }}
                                 viewport={{ once: true,amount:0.3 }}
                                // viewport={{ once: true }}
                                transition={{ duration:0.8, delay: 0.1 * index }} className='mr-[6px]'>{word}</motion.span>
                            ))
                          }
                      </motion.p>
                       {/* <p className='text-[28px] md:text-4xl text-center text-[#130D08] dark:text-[#FFFFFF] font-semibold font-sans'>Our AI Website Builder Features:</p> */}
                        <img className='hidden lg:block' src={SCRIBBLE} alt='scribble'/>
                          <img className=' w lg:hidden text-center ' src={SCRIBBLEMOBILE} alt='scribble'/>
                     </div>
                   </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default AIWebsiteBuilder