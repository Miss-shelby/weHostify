/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from "framer-motion"
import { features } from '../../../../data'
import { ABOUTUSHEROIMAGE, BGGRADIENT, CURVEDARROW, CURVEDARROWMOBILEVIEW, GLOW, OFFICEGROUP } from '../../../../constants/assetexports'
import { FeaturesCard } from '../../Home/components/Cards/FeatureCard'

const AboutHeroSection = () => {
  return (
    <div className='relative overflow-clip'>
      {/* <img className='hidden object-cover  opacity-55 w-[550px] translate-y-[12.5%] 
           bottom-0 right-0 translate-x-[30%]   lg:block  absolute z-[0]   ' src={GLOW} alt='Yellow gradient'/> */}
    <div className='xl:max-w-[1500px] pt-28 md:max-w-[52rem] lg:max-w-full  w-full  mx-auto flex flex-col items-center justify-center  relative  px-6 md:px-4  lg:px-16'>
          <img className='hidden object-cover  opacity-55  translate-y-[12.5%] 
           bottom-0 right-0 translate-x-[30%]   lg:block  absolute z-[0]   ' src={GLOW} alt='Yellow gradient'/>
        <div className="flex flex-col lg:flex-row  items-start lg:justify-between lg:gap-10 xl:gap-34 w-full ">
            <motion.div 
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView= {{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.6,delay:0.4 }}
             viewport={{ once: true,amount:"all"}}
            className="  md:mx-auto  lg:mx-0 w-full pb-6 xl:pb-0 ">
              <p className="text-base text-[#616161] text-center lg:text-left dark:text-[#EDEDED] font-sans ">About Us</p>
               <p className="text-2xl leading-tight lg:text-3xl font-bold text-center lg:text-left font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0">Welcome to WeHostify - Where <span className="bg-orange-gradient-text bg-clip-text text-transparent "> ideas</span> Go Live</p> 
                <p className="text-lg leading-tight lg:text-xl  text-center lg:text-left mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2">At WeHostify, we believe that everyone deserves access to powerful, intuitive, and human-friendly hosting — no matter your skill level, budget, or background.  </p>
               <div className='pt-6 flex w-full justify-between xl:gap-28 '>
                    <p className='text-[#000000] dark:text-[#EDEDED] text-center font-bold font-sans text-[22px] lg:text-2xl'>100+ <span className='block text-[#616161] dark:text-[#EDEDED] font-medium text-base lg:text-xl lg:pt-1'>Happy Users</span></p>
                    <p className='text-[#000000] dark:text-[#EDEDED] text-center font-bold font-sans text-2xl'>50+ <span className='block text-[#616161] font-medium dark:text-[#EDEDED] text-lg lg:text-xl lg:pt-1'>User Reviews</span></p>
                    <p className='text-[#000000] dark:text-[#EDEDED] text-center font-bold font-sans text-2xl'>200+ <span className='block text-[#616161] dark:text-[#EDEDED] font-medium text-lg lg:text-xl lg:pt-1'>Plans Bought</span></p>
               </div>
                <div className='flex justify-center xl:justify-end lg:mt-10'>
                    <img src={CURVEDARROW} className='hidden lg:flex' alt='curved-arrow-with-broken-line'/>
                    <img src={CURVEDARROWMOBILEVIEW} className='lg:hidden mt-1 z-10' alt='curved-arrow-with-broken-line'/>
                </div>
            </motion.div>
             <img className=' object-contain  hidden lg:block  absolute z-[0] lg:left-[30%] lg:translate-y-[30%] top-0 ' 
             src={BGGRADIENT} alt='Yellow gradient'/>
            <div className="w-full flex justify-center xl:justify-end ">
               <img src={ABOUTUSHEROIMAGE} className='object-cover z-10 w-[550px] max-w-full ' alt='Art Afro contemporary'/>
            </div>
        </div>
        <Mission/>
    </div>
    </div>
  )
}

export default AboutHeroSection

const Mission =()=>{
    return (
        <div className='mt-20 lg:mt-0'>
              <img className=' object-contain opacity-55 w-[300px]  
              lg:w-fit top-20   absolute z-[0] lg:left-[30%] translate-y-[80%] lg:translate-y-[60%] lg:top-0 ' src={BGGRADIENT} alt='Yellow gradient'/>
            <div className='flex flex-col-reverse   lg:flex-row items-stretch w-full  justify-between'>
             <div className='  lg:w-[40%]'>
                <img className='lg:h-[545px]   w-full' src={OFFICEGROUP} alt='office group'/>
            </div>
              <div className="md:max-w-3xl md:mx-auto lg:max-w-full lg:mx-0  lg:w-[55%] z-20 pb-6 xl:pb-0 ">
              <p className="text-[15px] sm:text-base text-[#616161] text-center lg:text-left dark:text-[#EDEDED] font-sans ">Our Mission</p>
               <p className="text-[22px] leading-tight lg:text-2xl font-bold text-center lg:text-left font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0">Simplify the Web for Everyday People</p> 
                <p className="text-[17px] leading-tight  text-center lg:text-left mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2">We aim to empower students, startups, nonprofits, and growing enterprises to succeed online by reducing the complexity of technology, offering personalized assistance, and championing digital inclusion across underrepresented communities.  </p>
                <p className="text-[17px] leading-tight  text-center lg:text-left mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-7">Every tool we build, every offer we launch, and every conversation we have is rooted in helping our users create, connect, and scale effortlessly. </p>
                <div className='pt-6 lg:pt-32'>
                    <p className="text[15px] sm:text-base text-[#616161] text-center lg:text-left dark:text-[#EDEDED] font-sans ">Our Vision</p>
                    <p className="text-[22px] leading-tight lg:text-2xl font-bold text-center lg:text-left font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0">N0. 1 Hosting Choice for Africa’s Digital Economy</p> 
                    <p className="text-[17px] leading-tight  text-center lg:text-left mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2">Enabling millions to launch, grow, and thrive online. We envision a digital future where creators, businesses, and changemakers from all corners of the continent have equal access to global opportunities through world-class hosting and support.   </p>
                    <p className="text-[17px] leading-tight  text-center lg:text-left mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-7">
                     We want to be the bridge that connects local dreams to global visibility — reliably, affordably, and seamlessly. </p>
                </div>
            </div>
        </div>
       
        </div>
    )
}

