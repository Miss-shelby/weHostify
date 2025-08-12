import { BGGRADIENT } from "../../../../constants/assetexports"
import { whatYouNeed } from "../../../../data"
import { ServicesCard } from "../../Home/components/Cards/FeatureCard"

const  WhatYouNeed = () => {
  return (
    <div className="relative  overflow-x-clip">
      <div className="">
       <img className=' object-cover  hidden lg:block absolute opacity-65 w-[550px] 
             lg:opacity-60 z-[0] right-0 translate-x-[30%]  transform  top-0 lg:top-0 translate-y-36' src={BGGRADIENT} alt='Yellow gradient'/>
      </div>
    <div className='xl:max-w-[1500px]   lg:max-w-full md:max-w-3xl  mx-auto flex flex-col items-center justify-center pt-20 lg:pt-20  relative  px-6 lg:px-16'>
      {/* <div className="flex items-center absolute right-0 translate-x-10 justify-center w-[500px] h-[500px] rounded-full bg-[radial-gradient(37.26%_37.26%_at_50%_50%,rgba(255,194,51,0.56)_0%,rgba(255,194,51,0)_100%)]">
        </div> */}
        
         <p className="text-base sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">What You Get</p>
        <p className="text-2xl leading-tight lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0 text-center">Everything You Need to Build — For Half the Cost</p>
        <p className="text-lg leading-tight sm:text-xl   font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2 text-center">Our student package combines powerful tools and generous benefits to help you get <span className='lg:block'>online quickly and affordably.  </span></p>
            
                <div className="grid  sm:px-0 md:grid-cols-2 xl:grid-cols-3 pt-6 lg:pt-10 w-full  gap-6 z-10 ">
                    {
                        whatYouNeed.map((f,idx)=>(
                            <ServicesCard  key={idx} {...f}/>
                        ))
                    }
                </div>
        
    </div>
    </div>
  )
}

export default  WhatYouNeed