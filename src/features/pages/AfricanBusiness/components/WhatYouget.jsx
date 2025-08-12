/* eslint-disable no-unused-vars */
import React from 'react'
import {  whatYouGet } from '../../../../data'
import { BGGRADIENT, TEAMBG, TEAMBGMOBILE } from '../../../../constants/assetexports'
import { ServicesCard } from '../../Home/components/Cards/FeatureCard'
import useIsMobile from '../../../shared/utils/isMobile'
import FancyButton from '../../../shared/Buttons/FancyButton'

const steps =[
    {
        index:1,
        title:"Submit Your Business Info",
        desc:"Upload your CAC certificate or registration, a valid business email, and tell us about your business."
    },
     {
        index:2,
        title:"We Create Your Account",
        desc:"Our team verifies your details and sets up your hosting account using the email you provided."
    },
    {
        index:3,
        title:"Receive Your Login Details",
        desc:"You’ll get your login credentials via email, and you can change your password and begin building right away."
    }
]
const WhatYouGet = () => {
         const isMobile = useIsMobile();
  return (
    <>
     <div className='xl:max-w-[1500px] lg:max-w-full md:max-w-3xl w-full z-10 mx-auto flex flex-col items-center justify-center pt-20 lg:pt-20  relative  px-6 lg:px-16'>
             <img className=' object-contain  lg:hidden absolute translate-y-[40%]   z-0 top-1/2 right-[10%] opacity-80' src={BGGRADIENT} alt='Yellow gradient'/>
             <div className="z-20">
                <p className="text-base sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">What You Get</p>
                <p className="text-2xl leading-tight lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0 text-center">Hosting and Beyond — Built for You</p>
                <p className="text-lg leading-tight sm:text-xl   font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2 text-center">Our African Business package is designed to give you more than just web space — it <span className='lg:block'>equips you with everything needed to grow and thrive in the digital world.  </span></p>
             </div>
                 <img className=' object-contain hidden lg:block absolute left-0 w-[500px] translate-x-[-15%]  z-0 top-0  opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
                 <img className=' object-contain hidden lg:block absolute z-0 top-[50%] lg:w-[500px] right-[28%] opacity-60' src={BGGRADIENT} alt='Yellow gradient'/>
                 <div className="grid  sm:px-0 md:grid-cols-2 xl:grid-cols-3 pt-6 lg:pt-10 w-full  gap-6 z-10 ">
                        {
                            whatYouGet.map((f,idx)=>(
                                <ServicesCard  key={idx} {...f}/>
                            ))
                        }
                </div>
    </div>
            <StepsToApply/>
            <div className="hidden mt-10 lg:flex justify-center lg:mt-10  w-full ">
                <FancyButton
                extraClass=""
                text="Apply as a Business"
                bgLinear="linear-gradient(0deg, rgba(255, 221, 0, 0.1), rgba(255, 221, 0, 0.1))"
                bgRadial="radial-gradient(50% 50% at 50% 50%, #FFDD00 0%, #FFDD00 100%)"
                textColor="#000"
                conicColor="rgba(255, 106, 0, 0.5)"
                width="400px"
                    // width={isMobile ? "3000px" : "400px"}
                height="55px"
                borderRadius="50px"
                animationSpeed="5s"
                onClick={() => console.log("Clicked!")}/>
            </div>
            <div className="flex mt-6 justify-center  lg:hidden  w-full ">
            <FancyButton
            extraClass=""
            text="Apply as a Business"
            bgLinear="linear-gradient(0deg, rgba(255, 221, 0, 0.1), rgba(255, 221, 0, 0.1))"
            bgRadial="radial-gradient(50% 50% at 50% 50%, #FFDD00 0%, #FFDD00 100%)"
            textColor="#000"
            conicColor="rgba(255, 106, 0, 0.5)"
            width="300px"
                // width={isMobile ? "300px" : "400px"}
            height="55px"
            borderRadius="50px"
            animationSpeed="5s"
            onClick={() => console.log("Clicked!")}/>
            </div>
    </>
  )
}

export default WhatYouGet

const StepsToApply=()=>{
    return (
        <div className='bg-[#FF6A00B2] mt-20 w-full'>
            <div className='xl:max-w-[1500px] lg:max-w-full md:max-w-3xl py-10 lg:py-14  z-10 mx-auto flex flex-col items-start justify-center relative  px-6 lg:px-16'>
                <p className="text-base sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans ">How to Apply</p>
            <p className="text-2xl leading-tight lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0 ">3 Simple Steps to Get Started</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 items-stretch gap-6 lg:gap-6 mt-10  lg:mt-7'>
                {
                   steps.map((step)=>(
                    <StepsCard {...step}/>
                   ))
                }
            </div>
            </div>
        </div>
    )
}

export const StepsCard =({index,title,desc})=>{
    return (
        <div className="bg-[#FFAA6E] py-5 lg:py-5 xl:py-0 min-h-[180px]  lg:min-h-[230px] flex flex-col  justify-center px-3 lg:px-8 w-full rounded-[17px] lg:rounded-[30px] ">
            
            <p className='text-3xl lg:text-5xl bg-gradient-to-b from-[#130D08] via-[#130D08] to-[rgba(153,150,149,0)] bg-clip-text text-transparent  font-sans font-semibold text-[#FF6A00]'>{index}</p>
            <p className='text-xl lg:text-xl pt-2 lg:pt-2 font-sans font-medium text-[#0B0B28]'>{title}</p>
            <p className='text-base text-[#130D08B2] font-medium font-sans pt-2'>{desc}</p>
        </div>
    )
}

