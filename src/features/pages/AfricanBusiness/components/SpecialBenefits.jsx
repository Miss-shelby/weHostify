import React from 'react'
import { BGGRADIENT, TOOL1, TOOL2, TOOL3 } from '../../../../constants/assetexports'
import { ServicesCard } from '../../Home/components/Cards/FeatureCard'

const SpecialBenefits = () => {
  return (
    <div className='relative overflow-x-clip'>
           <img className=' object-contain hidden lg:block  absolute right-0 w-[500px] translate-x-[30%]  z-0 top-0  opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
     <div className='xl:max-w-[1500px] lg:max-w-full md:max-w-3xl overflow-hidden z-10 mx-auto flex flex-col items-center justify-center pt-20 lg:pt-20  relative  px-6 lg:px-16'>
             <img className=' object-contain  lg:hidden absolute translate-y-[-10%]   z-0 top-1/2 left-1/3 opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
             <div className="z-20">
             <p className="text-base sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">Why Join as an African Business?</p>
            <p className="text-2xl leading-tight lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0 text-center">Special Benefits for Local Innovators</p>
            <p className="text-lg leading-tight sm:text-xl   font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2 text-center">Our business package combines powerful tools and generous benefits to help you get  <span className='lg:block'>online quickly and affordably.</span></p>
             </div>
              
                
                    <div className="flex flex-col md:flex-row justify-between items-stretch w-full gap-5 lg:gap-12 z-10 pt-6 lg:pt-10 ">
                       <BenefitCard/>
                       <BenefitCardTwo/>
                    </div>
           
    </div>
    </div>
  )
}

export default SpecialBenefits

export const BenefitCard =()=>{
    return (
        <div className="bg-[#FFDD004D] dark:bg-[#FFDD00] py-10 lg:py-0 min-h-[200px] lg:min-h-[320px] flex flex-col  justify-center px-5 lg:px-8 w-full rounded-[17px] lg:rounded-[30px] ">
            
            <p className='text-3xl lg:text-5xl dark:text-[#FF6A00]  font-sans font-semibold text-[#FF6A00]'>200+</p>
            <p className='text-2xl lg:text-3xl pt-6   lg:pt-14 font-sans font-medium text-[#130D08]'>Businesses already running on WeHostify</p>
               
        </div>
    )
}
// min-h-320px suscetiple to change 
export const BenefitCardTwo =()=>{
    return (
        <div className="bg-[#FFDD004D] dark:bg-[#FFDD00] py-10 lg:py-0  min-h-[200px] lg:min-h-[320px] flex flex-col  justify-center px-5 lg:px-8 w-full rounded-[17px] lg:rounded-[30px] ">
            <p className='text-2xl lg:text-3xl   font-sans font-medium text-[#130D08]'>Tailored tools designed to help your digital growth.</p>
            <div className='flex justify-center items-center gap-6 pt-6 lg:pt-14'>
                <img className='object-contain h-10 w-10 lg:w-[70px] lg:h-[70px]' src={TOOL1} alt=''/>
                <img className='object-contain  h-10 w-10 lg:w-[70px] lg:h-[70px]' src={TOOL2} alt=''/>
                <img className='object-contain  h-10 w-10 lg:w-[70px] lg:h-[70px]' src={TOOL3} alt=''/>
            </div>
        </div>
    )
}