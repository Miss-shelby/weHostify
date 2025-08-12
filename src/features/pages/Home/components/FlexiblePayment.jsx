/* eslint-disable no-unused-vars */
import React from 'react'
import { BGGRADIENT, BTCGIRL, DECORATIVECENTERLINE, FREEPIK, HOSTINGAGENT, IMAGEONE, IMAGETWO, LEFTBOTTOMLINE, STARS, TOPDECORATIVECENTERLINE, TOPRIGHTDECORATIVECENTERLINE } from '../../../../constants/assetexports'
import FancyButton from '../../../shared/Buttons/FancyButton'
import { Icons } from '../../../../Icons'
import {motion } from "framer-motion"
const FlexiblePayment = () => {
  const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
    
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

  return (
    <div className="relative">
        <div className='xl:max-w-[1500px]  mx-auto flex flex-col items-center justify-center pt-20 lg:pt-28 relative  px-6 lg:px-16'>
            <img className=' object-contain hidden w-[350px] h-[350px] lg:hidden absolute z-[0] right-0 top-0 opacity-25' src={BGGRADIENT} alt='Yellow gradient'/>
            <div className="w-full z-20">
                <motion.div initial={{filter:"blur(10px)",opacity:0,y:12}}
                    whileInView={{filter:"blur(0)",opacity:1,y:0}}
                   viewport={{ once: true, amount:0.3 }}
                    transition={{duration:2}}>
                    <p className="text-base sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">Pay Your Way — Without the Stress</p>
                    <p className="text-2xl leading-tight lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] pt-1 text-center">Flexible Payment Options for Everyone</p>
                    <p className="text-lg leading-tight sm:text-xl lg:max-w-3xl mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 text-center">WeHostify lets you pay using the methods that work best for you — from
                    <span className='lg:block'> local bank transfers to global payment gateways. No complications,</span>  no hidden fees. </p>
                </motion.div>
                <div className="">
                        <motion.div variants={container} initial="hidden" whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                         className="hidden 2xl:grid grid-cols-[378px_520px_378px]  gap-7 mt-20">
                            <motion.div variants={item} className="bg-[#019CDE] min-h-[300px]  rounded-[24px] flex flex-col justify-center items-center">
                                <div className="">
                                    <Icons.paypal/>
                                </div>
                                <p className='font-bold text-[#FFFFFF] text-2xl font-sans pt-5'>PayPal</p>
                                <p className='font-light text-[#FFFFFF] text-xl text-center font-sans'>Make credit card payment <span className='block'></span>using PayPal</p>
                            </motion.div>
                            <motion.div variants={item} className="bg-[#FBB033] min-h-[300px] relative px-[48px] rounded-[24px] flex flex-col justify-center items-center">
                                <div className="h-full">
                                <img className='lg:h-[340px] absolute bottom-8 left-1/2 -translate-x-1/2  object-cover ' src={BTCGIRL} alt='girl-is-holding-bitcoin-her-hands-character-trendy-retro-style 1'/>
                                </div>
                                <p className=' text-[#130D08] font-bold text-3xl text-center font-sans'>Pay with Bitcoin  </p>
                            </motion.div>
                            <motion.div variants={item} className="bg-[#011B33] min-h-[300px]  rounded-[24px] flex flex-col justify-center items-center">
                                <div className="">
                                    <Icons.paypal/>
                                </div>
                                <p className='font-bold text-[#FFFFFF] text-2xl font-sans pt-5'>PayStack</p>
                                <p className='font-light text-[#FFFFFF] text-xl text-center font-sans'>Make credit card payment  <span className='block'></span>using PayStack</p>
                            </motion.div>
                        </motion.div>
                        <motion.div variants={container} initial="hidden" whileInView="show" className="grid 2xl:hidden grid-cols-1 sm:grid-cols-2  gap-7 mt-20">
                         <motion.div variants={item} className="bg-[#FBB033] col-span-1 sm:col-span-2 min-h-[266px] sm:min-h-[300px] relative px-[48px] rounded-[24px] flex flex-col justify-center items-center">
                            <div className="h-full">
                               <img className='h-[300px] sm:h-[340px] absolute bottom-8 left-1/2 -translate-x-1/2  object-cover ' src={BTCGIRL} alt='girl-is-holding-bitcoin-her-hands-character-trendy-retro-style 1'/>
                            </div>
                            <p className=' text-[#130D08] font-bold text-2xl text-center font-sans'>Pay with Bitcoin  </p>
                        </motion.div>
                        <motion.div variants={item} className="bg-[#019CDE] py-10  rounded-[24px] flex flex-col justify-center items-center">
                            <div className="">
                                <Icons.paypal/>
                            </div>
                            <p className='font-bold text-[#FFFFFF] text-2xl font-sans pt-5'>PayPal</p>
                            <p className='font-light text-[#FFFFFF] text-lg text-center font-sans'>Make credit card payment <span className='block'></span>using PayPal</p>
                        </motion.div>
                        
                        <motion.div variants={item} className="bg-[#011B33] py-10  rounded-[24px] flex flex-col justify-center items-center">
                            <div className="">
                                <Icons.paypal/>
                            </div>
                            <p className='font-bold text-[#FFFFFF] text-2xl font-sans pt-5'>PayStack</p>
                            <p className='font-light text-[#FFFFFF] text-lg text-center font-sans'>Make credit card payment  <span className='block'></span>using PayStack</p>
                        </motion.div>
                        </motion.div>
                    <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true,amount:0.3 }}
                    transition={{ duration: 2,delay:1 }}
                     className="dark:bg-[#18183A] bg-[linear-gradient(94.18deg,_#1A1715_0.87%,_#000000_98.72%)] dark:bg-none relative h-[200px] lg:h-[300px] mt-[26px] flex flex-col justify-center  rounded-[24px]">
                        <img src={LEFTBOTTOMLINE} className="w-[100px] lg:w-fit absolute object-contain bottom-0 left-0 z-0" alt="decorative line"/>
                        <img src={DECORATIVECENTERLINE} className="w-[100px] lg:w-fit absolute object-contain bottom-0 left-1/3 " alt="decorative line"/>
                         <img src={TOPDECORATIVECENTERLINE} className="w-[100px] lg:w-fit absolute object-contain top-0 left-1/3 lg:left-1/2 " alt="decorative line"/>
                         <img src={TOPRIGHTDECORATIVECENTERLINE} className="w-[100px] lg:w-fit  absolute object-contain top-0 right-0 " alt="decorative line"/>
                          <img src={STARS} className="absolute object-contain opacity-35 w-[40px] sm:w-fit top-0 right-0 " alt="stars"/>
                        <div className="flex w-full items-center gap-2 lg:gap-10 py-10 z-20 px-1 lg:px-0">
                            <div className="">
                                <img src={FREEPIK} alt="Freepik" className="object-contain drop-shadow-freepik"/>
                            </div>
                        <div className="w-full">
                            <p className='text-[#FFFFFF] font-bold text-base leading-tight xl:leading-normal lg:text-4xl font-sans'>Use a Crypto Payment<span className='lg:block'>Gateway of Your Choice</span> </p>
                            <p className='text-[#BBBBBB] pt-3 font-medium text-xs md:text-xl font-sans'>WeHostify allows you to pay for your hosting <span className='lg:block'>plans using any cryptocurrency of your choice</span> </p>
                        </div>
                        </div>
                        
                    </motion.div>
                </div>
            </div>
        </div>
         <img className=' object-contain hidden absolute z-[0] bottom-0 left-[-20px]' src={BGGRADIENT} alt='Yellow gradient'/>
    </div>
  )
}

export default FlexiblePayment