import React from 'react'
import { BGGRADIENT, GLOW, HOSTINGAGENT, IMAGEONE, IMAGETWO } from '../../../../constants/assetexports'
import FancyButton from '../../../shared/Buttons/FancyButton'
import CarouselHero from './Carousel/Partners'

const Empowerment = () => {
  return (
    <div className="relative">
        <div className='xl:max-w-[1500px]  mx-auto flex flex-col items-center justify-center pt-14 lg:pt-28 relative  px-6 lg:px-16'>
               <img className='hidden lg:block object-contain absolute z-[0] right-0 top-0 opacity-45' src={BGGRADIENT} alt='Yellow gardient'/>
                <div className="absolute bottom-0 lg:w-[800px] lg:h-[800px]  lg:left-0   z-0 pointer-events-none opacity-45    ">
                    <img src={GLOW} alt="left-gradient glow"
                        className=" object-cover w-full h-full  lg:translate-x-[-30%] lg:translate-y-[30%] translate-y-[65%]"/>
                </div>
               <div className="w-full z-20">
                   <p className="text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">Built to Support Visionaries and Changemakers</p>
                   <p className="text-2xl lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] pt-2 text-center">Empowering Local Change-Makers</p>
                   <div className="">
                       <p className="text-lg leading-tight  mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-2 lg:pt-8 text-center"> At WeHostify, we believe that big impact starts with small ideas. That’s why we provide exclusive hosting <span className='md:block'>discounts, priority support, and custom web solutions to African-based SMEs and NGOs working to create  </span>
                          change in their communities. </p>

                       {/* <div className="relative w-full h-[700px] mt-[32px] rounded-[30px] pl-3 md:pl-10 overflow-hidden  flex flex-col justify-end">
                           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 via-60% to-black to-85% z-10"></div>
                           <div className="absolute inset-0  bg-[url('./assets/empowerBg.png')] bg-cover bg-center z-0"></div>
                           <div className="relative z-20 p-4 text-white flex items-center gap-10">
                           <div className="w-full lg:max-w-lg">
                                   <p className='text-white text-xl  lg:text-6xl font-bold font-sans '>Nawe Schools</p>
                                   <p className='font-medium font-sans text-sm lg:text-lg leading-[23px] pt-4'>Where creativity meets code. Nawe empowers young African developers and designers to build the future through hands-on mentorship, community, and real-world projects.</p>
                                   <div className="mt-6">
                                           <FancyButton
                                           text="Apply Now"
                                           bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                                           bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)"
                                           textColor="#fff"
                                           conicColor="rgba(255, 221, 0, 0.5)"
                                           width="250px"
                                           height="48px"
                                           borderRadius="50px"
                                           animationSpeed="5s"
                                           onClick={() => console.log("Clicked!")}/>
                                   </div>
                           </div>
                           <div className="flex w-full items-end gap-3 sm:gap-6">
                               <img className='w-[120px] sm:w-[320px] object-contain' src={IMAGEONE}/>
                               <img className='w-[90px] sm:w-fit object-contain' src={IMAGETWO}/>
                           </div>
                           
                           </div>
                       </div> */}
                       <CarouselHero/>
   
                   </div>
               </div>
        </div>
         <img className=' object-contain absolute z-[0] bottom-0 left-[-20px]' src={BGGRADIENT} alt='Yellow gradient'/>
    </div>
  )
}

export default Empowerment