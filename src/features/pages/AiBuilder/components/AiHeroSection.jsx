/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from "framer-motion"
import useIsMobile from '../../../shared/utils/isMobile';
import { AVATAR1, AVATAR2, AVATAR3, AVATAR4, GLOW, HEROIMAGEDARKMODE, WEBSITEBUILDERDARKMOBILE, WEBSITEBUILDERDARKMOBILE2, WEBSITEBUILDERHEROIMAGE1, WEBSITEBUILDERHEROIMAGE2, WEBSITEBUILDERMOBILE, WEBSITEBUILDERMOBILE2 } from '../../../../constants/assetexports';
import FancyButton from '../../../shared/Buttons/FancyButton';
import { Icons } from '../../../../Icons';

// background: linear-gradient(180deg, #FFDD00 0%, rgba(255, 255, 255, 0) 100%);

const AiHeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <div className='relative'>
      <div className='xl:max-w-[1500px] pt-28 md:max-w-[52rem] lg:max-w-full    w-full  mx-auto flex flex-col items-center justify-center  relative  px-6 md:px-4  lg:px-16'>
          
          <div className="flex flex-col items-center justify-center w-full text-center">
              <motion.div   initial={{ rotateY: 90, opacity: 0 }} whileInView= {{ rotateY: 0, opacity: 1 }} transition={{ duration: 0.6,delay:0.4 }}
                  viewport={{ once: true,amount:"all"}} className=" ">
                    <p className="text-base text-[#616161] text-center  dark:text-[#EDEDED] font-sans ">AI Website Builder</p>
                    <p className="text-2xl leading-tight lg:text-3xl font-bold text-center font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0">No coding. No design <span className="text-[#FF6A00]">expertise. </span>Just your ideas, turned into a  <span className="lg:block">beautiful,responsive <span className="text-[#007BFF]">websites</span> </span> </p> 
                    <p className="text-lg leading-tight lg:text-xl  text-center  mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2">Launch fast — choose from 200+ templates, get AI-generated content, optimize for <span className="lg:block">from concept to final launch. </span></p>
                    <div className=' hidden lg:flex lg:flex-row w-full relative items-stretch mt-6 lg:mt-[50px] gap-5'>
                      <div className=' w-full h-full'>
                        <img src={WEBSITEBUILDERHEROIMAGE1} className='z-10 lg:min-w-[320px]  xl:min-w-auto object-fill' alt='A scientist '/>
                      </div>
                      <div className='flex flex-col gap-6 z-10'>
                        <div className='bg-[linear-gradient(180deg,#FFDD00_0%,rgba(255,255,255,0)_100%)]  
                        flex-col  justify-center p-5 lg:p-0  lg:pt-5 lg:w-[280px] lg:pl-10 lg:pb-10 lg:min-h-[80px]
                         rounded-[32px]'>
                          <p className='text-[#130D08] text-left text-3xl xl:text-4xl font-medium dark:text-[#FFFFFF] font-sans'>300+ <span className='block'> Projects</span></p>
                        </div>
                        <AICard/>
                      </div>
                      <div className='flex flex-col z-10  items-start justify-start '>
                       <div className='w-full'>
                           <img src={WEBSITEBUILDERHEROIMAGE2} className='object-fill xl:scale-[1.14] block  xl:w-[450px]  dark:hidden  ' alt='A scientist '/>
                        <img src={HEROIMAGEDARKMODE} className='object-fill scale-[1.14]  hidden dark:block w-[450px]' alt='A scientist '/>
                       </div>
                        <div className='w-full mt-6 lg:hidden xl:block'>
                        <FancyButton extraClass="flex items-center justify-center gap-2 w-full" icon={<Icons.stars/>} text="Generate Website" bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                          bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)" textColor="#fff"
                          conicColor="rgba(255, 221, 0, 0.5)" width={isMobile?"250px":"500px"}
                          height="68px" borderRadius="50px" animationSpeed="5s" onClick={() => alert("Clicked!")}/>
                  </div>
                   <div className='w-full mt-6 lg:block xl:hidden'>
                        <FancyButton extraClass="flex items-center justify-center gap-2 w-full" icon={<Icons.stars/>} text="Generate Website" bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                          bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)" textColor="#fff"
                          conicColor="rgba(255, 221, 0, 0.5)" width="300px"
                          height="68px" borderRadius="50px" animationSpeed="5s" onClick={() => alert("Clicked!")}/>
                  </div>
                      </div>
                    </div>

                  {/* for mobile  */}
                   <div className='  lg:hidden flex flex-col gap-3 sm:gap-6 w-full relative items-center   mt-6 lg:mt-[50px] '>
                      <div className=' relative flex '>
                        <img src={WEBSITEBUILDERMOBILE} className='z-10 block dark:hidden sm:w-full' alt='A scientist '/>
                         <img src={WEBSITEBUILDERDARKMOBILE2} className='z-10 hidden dark:block ' alt='A scientist '/>
                      </div>
                      <div className='flex flex-col w-full z-10  items-center justify-center '>
                       <div className='w-full flex justify-center'>
                           <img src={WEBSITEBUILDERMOBILE2} className='object-fill   block 
                             dark:hidden  ' alt='A scientist '/>
                        <img src={WEBSITEBUILDERDARKMOBILE} className='object-fill 
                        hidden dark:block ' alt='A scientist '/>
                       </div>
                        <div className='flex flex-col gap-6 z-10'>
                        <AICard/>
                      </div>
                        <div className='w-full mt-4 flex justify-center'>
                    <FancyButton extraClass="flex items-center justify-center gap-2 w-full"
                     icon={<Icons.stars/>} text="Generate Website" bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                      bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)" textColor="#fff"
                      conicColor="rgba(255, 221, 0, 0.5)" width={isMobile?"300px":"500px"}
                      height={isMobile?"50px":"68px"} borderRadius="50px" animationSpeed="5s" onClick={() => alert("Clicked!")}/>
                  </div>
                      </div>
                    </div>
              </motion.div>
              <img className='hidden object-cover      top-1/2 right-[40$] w-[600px]   lg:block  absolute z-[0]  
                ' src={GLOW} alt='Yellow gradient'/>
            
            
          </div>
      </div>
      <Features/>
    </div>
  )
}

export default AiHeroSection

const AICard =()=>{
  return (
    <div className='bg-[#007BFF] xl:w-[400px] p-5 rounded-[24px] lg:rounded-[32px] lg:py-2  xl:absolute md:py-10  left-[450px] bottom-0'>
      <p className='text-[22px] leading-6 xl:leading-tight xl:text-3xl text-[#F1F0EC] dark:text-[#F1F0EC] text-left font-bold font-sans'>We have the best AI website generator</p>
      <div className='lg:pt-5 flex items-center gap-6 lg:gap-11'>
         <div className="flex items-center">
            {/*profile  Avatars  */}
            <img src={AVATAR1} alt="Profile 1"  className="w-6 h-6 xl:w-10 xl:h-10 rounded-full object-cover"/>
            <img src={AVATAR2} alt="Profile 2" className="w-6 h-6 xl:w-10 xl:h-10 rounded-full object-cover -ml-3"/>
            <img src={AVATAR3} alt="Profile 3" className="w-6 h-6 xl:w-10 xl:h-10 rounded-full b object-cover -ml-3"/>
            <img src={AVATAR4} alt="Profile 4" className="w-6 h-6 xl:w-10 xl:h-10 rounded-full object-cover -ml-3" />
        </div>
        <p className='text-[#FFFBF8] leading-5 ml-3 lg:ml-0 pt-2 lg:pt-0 lg:leading-tight dark:text-[#FFFBF8] font-medium font-sans text-base text-left'>Join our Community,We are waiting for you</p>

      </div>
    </div>
  )
}


const Features =()=>{
  return (
    <div className='border-t border-[#909090] border-b mt-20 '>
      <div className='xl:max-w-[1500px] md:max-w-[52rem]  lg:max-w-full  lg:gap-10  w-full  mx-auto grid grid-cols-1 lg:grid-cols-3  relative   md:px-4  lg:px-16'>
        <div className='flex flex-col  border-b    lg:border-r border-[#909090] py-6 lg:py-10 lg:pr-10'>
          <Icons.storage className="dark:hidden ml-6 lg:ml-0"/>
           <Icons.builderDarkMode className="hidden dark:block ml-6 lg:pr-0"/>
          <div className='flex items-center w-full justify-between px-6 lg:px-0'>
            <div>
              <p className='text-base dark:text-[#FFFFFF] text-[#130D08] pt-5 font-sans font-medium'>Unlimited Storage</p>
              <p className='text-sm text-[#616161] dark:text-[#EDEDED] pt-[2px] font-sans '>Never run of memory</p>
            </div>
            <Icons.arrowBtn />
          </div>
           <p className='text-base text-[#909090] dark:text-[#9C9B9B] pt-5 font-sans pl-6 lg:pr-0'>Over 1,000 GB available</p>
        </div>
         <div className='flex flex-col  border-b lg:border-r border-[#909090] lg:pr-10 py-6 lg:py-10'>
          <Icons.builder className="ml-6 lg:ml-0"/>
         
          <div className='flex items-center w-full justify-between px-6 lg:px-0'>
            <div>
              <p className='text-base text-[#130D08] dark:text-[#FFFFFF] pt-5 font-sans font-medium'>200+ Awesome Templates</p>
              <p className='text-sm text-[#616161] dark:text-[#EDEDED] pt-[2px] font-sans '>Responsive Website Builder</p>
            </div>
            <Icons.arrowBtn/>
          </div>
           <p className='text-base text-[#909090] dark:text-[#9C9B9B] pt-5 font-sans px-6 lg:px-0'> A range of hundreds of pre-made, high-quality templates.</p>
        </div>
         <div className='flex border-b border-[#909090] lg:border-none flex-col py-6 lg:py-10'>
         <div className="ml-6 lg:ml-0">
             <Icons.editor />
         </div>
          <div className='flex items-center w-full justify-between  px-6 lg:px-0'>
            <div>
              <p className='text-base text-[#130D08] dark:text-[#FFFFFF] pt-5 font-sans font-medium'>Drag‑and‑Drop Editor</p>
              <p className='text-sm text-[#616161] dark:text-[#EDEDED]  pt-[2px] font-sans '>Design with Ease</p>
            </div>
            <Icons.arrowBtn/>
          </div>
           <p className='text-base text-[#909090] dark:text-[#9C9B9B] pt-5 font-sans px-6 lg:px-0'> Ideal for beginners and experts alike</p>
        </div>
      </div>
    </div>
  )
}