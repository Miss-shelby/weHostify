/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from "framer-motion"
import { features } from '../../../../data'
import { ABOUTUSHEROIMAGE, BGGRADIENT, CURVEDARROW, CURVEDARROWMOBILEVIEW, FAITHDEV, GBENGAPM, GLOW, KOFIDEV, OFFICEGROUP } from '../../../../constants/assetexports'
import { FeaturesCard } from '../../Home/components/Cards/FeatureCard'
import FancyButton from "../../../shared/Buttons/FancyButton";
import { DevCard, ExpertsCard, TechTalentCard } from './Cards/DevsCards'
import useIsMobile from '../../../shared/utils/isMobile'

const HireHeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <div className='relative'>
    <div className='xl:max-w-[1500px] pt-24 lg:pt-28 md:max-w-[52rem] lg:max-w-full  overflow-hidden  w-full  mx-auto flex flex-col items-center justify-center  relative  px-6 md:px-4  lg:px-16'>
         
        <div className="flex flex-col items-center justify-center w-full text-center ">
            <motion.div   initial={{ rotateY: 90, opacity: 0 }} whileInView= {{ rotateY: 0, opacity: 1 }} transition={{ duration: 0.6,delay:0.4 }}
                viewport={{ once: true,amount:"all"}} className="w-full">
                  <p className="text-base text-[#616161] text-center  dark:text-[#EDEDED] font-sans ">You’ve got the idea — we’ve got the experts.</p>
                  <p className="text-2xl leading-tight lg:text-3xl font-bold text-center font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0">Build Your Dream Project with Confidence </p> 
                  <p className="text-lg leading-tight lg:text-xl  text-center  mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2">Got a great idea but don’t know where to start? Let WeHostify handle the entire journey — <span className="lg:block">from concept to final launch. </span></p>
                <div className='flex pt-6  lg:pt-10 justify-center'>
                  <FancyButton  text="Hire Expert" bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                    bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)" textColor="#fff"
                    conicColor="rgba(255, 221, 0, 0.5)" width="350px"
                    height="52px" borderRadius="50px" animationSpeed="5s" onClick={() => alert("Clicked!")}/>
                </div>
            </motion.div>
             <img className='hidden object-cover   -translate-y-[2rem] lg:w-[480px]  bottom-0 left-1/4 right-1/2   lg:block  absolute z-[0]  
              ' src={GLOW} alt='Yellow gradient'/>
            <div className='bg-[#FF6A004D] z-10 relative rounded-[10.7px] lg:rounded-[30px] h-[300px] mt-36 lg:max-w-5xl w-full'>
                <div className='flex '>
                  <div className='absolute z-10 top-0 left-0 -translate-y-[7rem] xs:-translate-y-[7rem] translate-x-2 lg:-translate-x-12 lg:-translate-y-1/2 -rotate-[10deg]'>
                    <ExpertsCard/>
                  </div>
                  <div className='absolute z-0  top-0 left-32 xs:left-36 -translate-y-[7rem]  xs:-translate-y-[8rem] lg:-translate-y-[6rem] '>
                    <TechTalentCard/>
                  </div>
                </div>
                <div className='h-full'>
                    <div className='absolute right-1/4 top-12'>
                        <DevCard name="Kofi Mark" role="Designer" profileImg={KOFIDEV}/>
                    </div>
                    <div className='flex flex-col h-full justify-end items-start p-3'>
                       <p className='text-[#130D08] dark:text-[#FFFF] leading-5 font-medium font-sans text-base lg:text-xl z-10 lg:pb-[45px] lg:pl-[45px] '>100+
                        <span className='block text-[#616161] dark:text-[#EDEDED] text-sm lg:text-[15px] pt-1'>Skilled Experts</span>
                       </p>
                        <div className='absolute right-[12px] lg:right-[25px] lg:bottom-[25px]'>
                          <DevCard name="Faith Nweke" role="Developer" profileImg={FAITHDEV}/>
                        </div>
                         <div className='absolute left-[37px] lg:left-1/3 bottom-1/3 lg:bottom-[54px]'>
                          <DevCard name="Gbenga Ola" role="Project Manager" profileImg={GBENGAPM}/>
                        </div>
                    </div>
                </div>
            </div>
             {/* <img className=' object-contain  hidden lg:block  absolute z-[0] lg:left-[30%] lg:translate-y-[30%] top-0 ' src={BGGRADIENT} alt='Yellow gradient'/> */}
           
        </div>
    </div>
    </div>
  )
}

export default HireHeroSection



