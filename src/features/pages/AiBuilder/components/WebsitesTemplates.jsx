/* eslint-disable no-unused-vars */
import React from 'react'
import { BGGRADIENT, SCREENSHOT1, SCREENSHOT2, WEBSITETEMPLATE1, WEBSITETEMPLATE2, WEBSITETEMPLATE3, WEBSITETEMPLATE4, WEBSITETEMPLATE5, WEBSITETEMPLATE6 } from '../../../../constants/assetexports'
import FancyButton from '../../../shared/Buttons/FancyButton'
import useIsMobile from '../../../shared/utils/isMobile';

const WebsitesTemplates = () => {
      const isMobile = useIsMobile();
  return (
    <div className='xl:max-w-[1500px] overflow-x-clip pt-28 md:max-w-[52rem] lg:max-w-full    
    w-full  mx-auto flex flex-col items-center justify-center  relative  px-6 md:px-4  lg:px-16'>
        <div className='z-20'>
            <p className="text-base text-[#616161] text-center  dark:text-[#EDEDED] font-sans ">See What You Can Build</p>
            <p className="text-2xl leading-tight lg:text-3xl font-bold text-center font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0">From Simple Sites to Stunning Stores </p> 
            <p className="text-lg leading-tight lg:text-xl xl:max-w-4xl  text-center  mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2">Explore real examples of what’s possible with WeHostify’s AI Website Builder. From portfolios and business pages to e-commerce and landing sites — these templates show the versatility and power of what you can create, even without writing a single line of code. </p>
        </div>
        <img className=' object-contain block top-48 left-1/4 lg:block absolute z-[0] lg:left-0 
        lg:top-0 translate-x-[-20%] opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
        <div className='grid md:grid-cols-2 z-10 lg:justify-center lg:items-center xl:grid-cols-3 mt-6 lg:mt-10 w-full gap-7'>
            <img src={WEBSITETEMPLATE1} className='object-cover w-full md:w-fit' alt='website teplates'/>
            <img src={WEBSITETEMPLATE6} className='object-cover w-full md:w-fit' alt='website teplates'/>
            <img src={WEBSITETEMPLATE5} className='object-cover w-full md:w-fit'  alt='website teplates'/>
            <img src={WEBSITETEMPLATE4} className='object-cover w-full md:w-fit'  alt='website teplates'/>
            <img src={WEBSITETEMPLATE3} className='object-cover w-full md:w-fit'  alt='website teplates'/>
             <img src={WEBSITETEMPLATE2} className='object-cover w-full md:w-fit'  alt='website teplates'/>
        </div>
         <div className='mt-6 flex lg:mt-10 lg:justify-center w-full'>
            <FancyButton extraClass="z-20" 
             text="Use AI Builder" bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)" textColor="#fff"
                conicColor="rgba(255, 221, 0, 0.5)" width="400px"
                height="55px" borderRadius="50px" animationSpeed="5s" onClick={() => alert("Clicked!")}/>
         </div>
          <img className=' object-contain block top-2/3 -translate-y-[55%]  translate-x-[-30%] lg:hidden absolute z-[0] 
         opacity-60' src={BGGRADIENT} alt='Yellow gradient'/> 
         <CreateWebsites/>
         <DescribeYourWebsite/>
    </div>
  )
}

export default WebsitesTemplates

const CreateWebsites=()=>{
    const isMobile = useIsMobile();
    return (
    <div className='flex flex-col-reverse lg:flex-row justify-between relative lg:items-center w-full gap-10 pt-20 '>
        <div className='flex-1 lg:w-auto w-full'>
            <img  src={SCREENSHOT1} className='w-full lg:h-[450px] ' alt='screenshot'/>
             <div className='mt-6 w-full block lg:hidden'>
            <FancyButton extraClass="" 
             text="Watch Tutorial Videos" bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)" textColor="#fff"
                conicColor="rgba(255, 221, 0, 0.5)" width="400px"
                height="55px" borderRadius="50px" animationSpeed="5s" onClick={() => alert("Clicked!")}/>
         </div>
        </div>
         <div className='flex-1 z-10'>
            <p className="text-base text-[#616161] text-center lg:text-left   dark:text-[#EDEDED] font-sans ">How-To Resources</p>
            <p className="text-2xl leading-tight lg:text-3xl font-bold text-center lg:text-left font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0">Learn Fast, Build Faster </p> 
            <p className="text-lg leading-tight lg:text-xl xl:max-w-4xl text-center lg:text-left    mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2">New to website building? No worries. Our step-by-step video guides, AI prompt tips, and written tutorials are here to walk you through every feature — from your first click to final launch. </p>
            <ul className='text-lg flex flex-col gap-1 lg:gap-0  list-disc pl-7 pt-6 lg:pt-10 font-sans font-medium text-[#130D08] dark:text-[#FFFFFF]'>
                <li>Quick Website Launch</li>
                <li>Landing Page</li>
                 <li>E-commerce</li>
                 <li>Professional Website</li>
            </ul>
              <img className=' object-contain hidden lg:block absolute z-[0] w-[500px] right-0 top-0 -translate-x-[3%] opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
             <div className='mt-6 lg:mt-10 hidden lg:block'>
            <FancyButton extraClass="" 
             text="Watch Tutorial Videos" bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)" textColor="#fff"
                conicColor="rgba(255, 221, 0, 0.5)" width={isMobile?"250px":"300px"}
                height="55px" borderRadius="50px" animationSpeed="5s" onClick={() => alert("Clicked!")}/>
         </div>
        </div>
    </div>
    )
}
const DescribeYourWebsite=()=>{
    const isMobile = useIsMobile();
    return (
    <div className='flex flex-col-reverse lg:flex-row bg-[#FF6A001A] rounded-[16px] lg:rounded-[30px] justify-between relative lg:items-center w-full gap-10 mt-20 p-6 lg:p-0 lg:pt-10 lg:pl-10'>
         <div className='flex-1 z-10'>
            <p className="text-2xl leading-tight lg:text-3xl font-bold  font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0">Describe It, and We’ll Design It </p> 
            <p className="text-lg leading-tight lg:text-xl xl:max-w-4xl    mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-6">With WeHostify’s AI Website Builder, all you have to do is type a simple prompt — like “Create a modern portfolio site for a freelance photographer” — and watch the AI generate a fully responsive web page with layout, text, and visuals.</p>
              <img className=' object-contain hidden lg:block absolute z-[0] w-[500px] left-0 top-[30%] -translate-x-[30%] opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
             <div className='w-full mt-6 lg:mt-10'>
            <FancyButton extraClass="" 
             text="Generate Website" bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)" textColor="#fff"
                conicColor="rgba(255, 221, 0, 0.5)" width="280px"
                height="55px" borderRadius="50px" animationSpeed="5s" onClick={() => alert("Clicked!")}/>
         </div>
        </div>
        <div className='flex-1'>
            <img  src={SCREENSHOT2} className='w-full lg:h-[400px] ' alt='screenshot'/>
        </div>
        
    </div>
    )
}