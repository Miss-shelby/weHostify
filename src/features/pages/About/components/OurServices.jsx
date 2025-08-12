import { BGGRADIENT, INTERNETSECURITYBADGE, INTERNETSECURITYBADGE2, LEFTDARKOVERLAY, LEFTWHITEOVERLAY, PEOPLEICON, RIGHTDARKOVERLAY, RIGHTWHITEOVERLAY } from "../../../../constants/assetexports"
import {  services } from "../../../../data"
import { Icons } from "../../../../Icons"
import { FeaturesCard, ServicesCard } from "../../Home/components/Cards/FeatureCard"
import { ReviewCard } from "../../Home/components/Cards/ReviewCard"

const OurServices = () => {
  return (
    <div className='xl:max-w-[1500px] lg:max-w-full  md:max-w-[52rem]  mx-auto flex flex-col items-center justify-center pt-20 lg:pt-20  relative  px-6 md:px-4 lg:px-16'>
         <p className="text-base sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">Our Services</p>
        <p className="text-2xl leading-tight lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0 text-center">What We Do</p>
        <p className="text-lg leading-tight sm:text-xl   font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2 text-center">WeHostify is more than a hosting company — we are a growth partner. Here's what we <span className='lg:block'> offer:</span></p>
             <img className=' object-contain hidden lg:block absolute left-0 translate-x-[-30%]  z-0 top-[10%] right-60 opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
             <img className=' object-contain hidden lg:block absolute z-0 top-[30%] lg:w-[500px] right-[28%] opacity-60' src={BGGRADIENT} alt='Yellow gradient'/>
                <div className="grid  sm:px-0 lg:grid-cols-3 pt-6 lg:pt-10 w-full grid-rows-2 gap-6 z-10 ">
                    {
                        services.map((f,idx)=>(
                            <ServicesCard  key={idx} {...f}/>
                        ))
                    }
                </div>
        <WhyUs/>
    </div>
  )
}

export default OurServices
const WhyUs =()=>{
    return (
    <div className='pt-20 z-20 relative lg:pt-20 w-full'>
         <p className="text-base sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">Why WeHostify?</p>
        <p className="text-2xl z-10 leading-tight lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0 text-center">Why Choose WeHostify?</p>
        <p className="text-lg leading-tight sm:text-xl  font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 z-10 lg:pt-2 text-center">We’re not just another hosting company — WeHostify is built to serve real people with real <span className='lg:block'> needs.</span></p>
             <img className=' object-contain w-[400px] translate-y-[-15%]  lg:hidden absolute left-0 translate-x-[-30%]  z-0 top-0 right-60 opacity-60' src={BGGRADIENT} alt='Yellow gradient'/>
             
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-6 pt-6 lg:pt-10 lg:grid-cols-3  w-full">
                <div className="bg-[#FFDD004D]  py-3 lg:py-0 w-full sm:w-fit h-[200px] lg:h-full sm:col-span-2 rounded-[30px]">
                   <div className="flex flex-col h-full  lg:py-0 justify-center px-3 lg:px-10">
                    <img src={PEOPLEICON} className="h-6 w-6 lg:h-10 lg:w-10 object-contain" alt="peopleIcon.png"/>
                      <p className="text-[22px] leading-tight lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] py-2 lg:py-0  lg:pt-10">People-First Approach</p>
                      <p className="text-[16px] leading-tight sm:text-lg lg:text-[20px]   font-sans font-medium text-[#616161] dark:text-[#EDEDED]  lg:pt-6 ">We offer 24/7 customer support with a real human touch. Platinum users or those with multiple plans get a personal agent.</p>
                   </div>
                </div>
                <div className="bg-[#FFDD004D] w-full sm:w-fit flex flex-col h-[200px] lg:h-full items-end relative sm:col-span-1 rounded-[30px]">
                    <img className="h-[200px] lg:h-full  lg:relative" src={INTERNETSECURITYBADGE} alt="INTERNETSECURITYBADGE"/>
                </div>
            </div> 

            {/* second grid  */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-6 pt-6 lg:pt-5 lg:grid-cols-3  w-full">
                 <div className="bg-[#FF6A004D] block sm:hidden z-10  relative py-3 lg:py-0 h-[200px] lg:h-full sm:col-span-2 rounded-[30px]">
                   <div className="flex flex-col h-full  lg:py-0 justify-center px-3 lg:px-10">
                    {/* <img src={PEOPLEICON} className="h-6 w-6 lg:h-10 lg:w-10 object-contain" alt="peopleIcon.png"/> */}
                    <Icons.deadline/>
                      <p className="text-[22px] leading-tight lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] py-2 lg:py-0  lg:pt-10">Fast & Secure</p>
                      <p className="text-[16px] leading-tight sm:text-lg lg:text-[20px]   font-sans font-medium text-[#616161] dark:text-[#EDEDED]  lg:pt-6 ">99.9% uptime, SSD-powered servers, and top-tier security protocols — so your site is always live and protected.</p>
                      <img className=' object-contain hidden lg:block absolute z-0 top-[10%] lg:w-[400px] right-[10%] opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
                   </div>
                </div>
                <div className="bg-[#FF6A004D] w-full sm:w-fit flex flex-col h-[200px] lg:h-full items-end relative col-span-1 rounded-[30px]">
                    <img className="h-[200px] lg:h-full  lg:relative" src={INTERNETSECURITYBADGE2} alt="INTERNETSECURITYBADGE"/>
                </div>
                <div className="bg-[#FF6A004D] hidden sm:block z-10  relative py-3 lg:py-0 h-[200px] lg:h-full w-full lg:w-fit sm:col-span-2 rounded-[30px]">
                   <div className="flex flex-col h-full  lg:py-0 justify-center px-3 lg:px-10">
                    {/* <img src={PEOPLEICON} className="h-6 w-6 lg:h-10 lg:w-10 object-contain" alt="peopleIcon.png"/> */}
                     <Icons.deadline/>
                      <p className="text-[22px] leading-tight lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] py-2 lg:py-0  lg:pt-10">Fast & Secure</p>
                      <p className="text-[16px] leading-tight sm:text-lg lg:text-[20px]   font-sans font-medium text-[#616161] dark:text-[#EDEDED]  lg:pt-6 ">99.9% uptime, SSD-powered servers, and top-tier security protocols — so your site is always live and protected.</p>
                      <img className=' object-contain hidden lg:block absolute z-0 top-[20%] lg:w-[500px] right-[10%] ' src={BGGRADIENT} alt='Yellow gradient'/>
                   </div>
                </div>
            </div> 

    </div>
    )
}