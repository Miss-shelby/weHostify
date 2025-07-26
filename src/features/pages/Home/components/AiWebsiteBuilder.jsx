import React from 'react'
import { BGGRADIENT,GLOW,MANONLAPTOP, SCRIBBLE,  SCRIBBLEMOBILE,  WEBSITETEMPLATE } from '../../../../constants/assetexports'
import ClipCard from '../../../shared/Cards/ClipCard'
import AIWebsiteCard from './Cards/AIWebsiteCard'

const AIWebsiteBuilder = () => {
  return (
    <div className="relative">
          <div className="absolute overflow-hidden top-[500px] lg:top-[270px] right-0   z-0 pointer-events-none opacity-55 block ">
              <img src={GLOW} alt="glow"
                className=" object-cover lg:w-[667px] lg:h-[644px] translate-x-[20%] lg:-translate-y-[10%]  h-full right-0 w-[350px]  "/>
            </div>
        <div className='xl:max-w-[1500px]  mx-auto flex flex-col items-center justify-center pt-14 lg:pt-28 relative  px-6 lg:px-16'>
           {/* <div className="absolute top-[270px] right-0  z-0 pointer-events-none opacity-55 overflow-hidden hidden lg:block ">
              <img src={GLOW} alt="glow"
              className=" object-cover w-full h-full right-0"/>
          </div> */} 
            
            <div className="w-full z-20">
                <p className="text-sm sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">Describe It, and Watch Your Website Come to Life</p>
                <p className="text-xl lg:text-[32px] font-bold font-sans text-[#130D08] dark:text-[#fff] pt-2 text-center">Let AI Build Your Website — No Tech Skills Needed</p>
                <div className="">
                    <p className="text-base sm:text-xl lg:max-w-3xl mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-2 text-center">With our smart AI website builder, all you have to do is tell us what your site is  <span className='lg:block'> about. We’ll generate a clean, responsive static web page in seconds. It’s fast,</span> it’s simple, and it just works. </p>
                    <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-10 ">
                        <div className="bg-[#FFDD001A] py-6  px-5 rounded-[30px]">
                           <img className="object-contain lg:w-[600px]" src={WEBSITETEMPLATE}/>
                        </div>
                        <div className=" w-fit">
                             <img className="object-contain lg:w-[600px] z-10" src={MANONLAPTOP}/>
                             
                        </div>
                    </div>
                </div>
                <div className="mt-6 lg:mt-10">
                   <div className="flex flex-col-reverse w-full justify-between xl:flex-row  items-center ">
                    <AIWebsiteCard/>
                     <div className="flex flex-col xl:max-w-lg items-center justify-center w-full">
                        <p className='text-[28px] md:text-4xl text-center text-[#130D08] dark:text-[#FFFFFF] font-semibold font-sans'>Our AI Website Builder Features:</p>
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