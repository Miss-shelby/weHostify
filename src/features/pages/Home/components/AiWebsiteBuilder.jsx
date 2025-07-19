import React from 'react'
import { BGGRADIENT,MANONLAPTOP, SCRIBBLE,  SCRIBBLEMOBILE,  WEBSITETEMPLATE } from '../../../../constants/assetexports'
import ClipCard from '../../../shared/Cards/ClipCard'

const AIWebsiteBuilder = () => {
  return (
    <div className="relative">
        <div className='xl:max-w-[1500px]  mx-auto flex flex-col items-center justify-center pt-32 relative pb-10 px-6 lg:px-16'>
            <div className="w-full z-20">
                <p className="text-sm sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">Describe It, and Watch Your Website Come to Life</p>
                <p className="text-xl lg:text-[32px] font-bold font-sans text-[#130D08] dark:text-[#fff] pt-2 text-center">Let AI Build Your Website — No Tech Skills Needed</p>
                <div className="">
                    <p className="text-base sm:text-xl lg:max-w-3xl mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-2 text-center">With our smart AI website builder, all you have to do is tell us what your site is  <span className='lg:block'> about. We’ll generate a clean, responsive static web page in seconds. It’s fast,</span> it’s simple, and it just works. </p>
                    <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-10 ">
                        <div className="bg-[#FFDD001A] py-6  px-5 rounded-[30px]">
                           <img className="object-contain lg:w-[600px]" src={WEBSITETEMPLATE}/>
                        </div>
                        <div className="relative w-fit">
                             <img className="object-contain lg:w-[600px] z-10" src={MANONLAPTOP}/>
                              <img className=' object-contain absolute z-[0] w-full right-0 bottom-0 opacity-50' src={BGGRADIENT} alt='Yellow gardient'/>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                   <div className="flex flex-col-reverse w-full justify-center lg:flex-row items-center">
                     <ClipCard/>
                     <div className="">
                        <p className='text-4xl text-center text-[#130D08] font-semibold font-sans'>Our AI Website Builder Features:</p>
                        <img className='hidden lg:block' src={SCRIBBLE} alt='scribble'/>
                          <img className='flex flex-col justify-center w lg:hidden text-center ' src={SCRIBBLEMOBILE} alt='scribble'/>
                     </div>
                   </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default AIWebsiteBuilder