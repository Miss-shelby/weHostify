import { BGGRADIENT } from "../../../../constants/assetexports"
import { whatWeBuild } from "../../../../data"
import { ServicesCard } from "../../Home/components/Cards/FeatureCard"

const WhatWeBuild = () => {
  return (
    <div className='xl:max-w-[1500px] lg:max-w-full md:max-w-3xl overflow-hidden z-10 mx-auto flex flex-col items-center justify-center pt-20 lg:pt-20  relative  px-6 lg:px-16'>
         <img className=' object-contain  lg:hidden absolute translate-y-[-10%]   z-0 top-0 left-1/3 opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
         <div className="z-20">
         <p className="text-base sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">What We Build</p>
        <p className="text-2xl leading-tight lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0 text-center">From Simple Sites to Complex Platforms</p>
        <p className="text-lg leading-tight sm:text-xl   font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2 text-center">Whether you're building a personal brand or launching a full-scale web app, our expert <span className='lg:block'>team can handle it all. We design and develop digital products that are functional, beautiful, and built for growth. </span></p>
         </div>
             <img className=' object-contain hidden lg:block absolute left-0 w-[500px] translate-x-[-15%]  z-0 top-0  opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
             <img className=' object-contain hidden lg:block absolute z-0 top-[44%] lg:w-[500px] right-[28%] opacity-60' src={BGGRADIENT} alt='Yellow gradient'/>
                <div className="grid  sm:px-0 md:grid-cols-2 xl:grid-cols-3 pt-6 lg:pt-10 w-full grid-rows-2 gap-6 z-10 ">
                    {
                        whatWeBuild.map((f,idx)=>(
                            <ServicesCard  key={idx} {...f}/>
                        ))
                    }
                </div>
        {/* <WhyUs/> */}
    </div>
  )
}

export default WhatWeBuild