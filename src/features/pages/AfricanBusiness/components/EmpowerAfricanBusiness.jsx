import React from 'react'
// import useIsMobile from '../../../shared/utils/isMobile';
import { BGGRADIENT, EMPOWER, EMPOWER1, EMPOWER2, EMPOWERIMG, TEAMBG } from '../../../../constants/assetexports';
import FancyButton from '../../../shared/Buttons/FancyButton';

const EmpowerAfricanBusiness = () => {
    //  const isMobile = useIsMobile();
  return (
    <div className='xl:max-w-[1500px] lg:max-w-full md:max-w-3xl  mx-auto flex flex-col items-center justify-center pt-24 lg:pt-28   relative  px-6 lg:px-16'>
        <div className=" lg:gap-0  p-5  lg:py-5 lg:px-7 lg:p-5 gap-6 bg-[#FF6A004D]  w-full rounded-[16px] lg:rounded-[30px] 
        relative max-w-full justify-between flex flex-col  lg:flex-row lg:items-center ">
                 <img className=' object-contain  lg:hidden w-[500px] absolute left-0 z-0 top-[30%] opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
            <div className="w-full  xs:py-0 z-20 lg:py-0 lg:w-fit lg:max-w-2xl">
                <img className=' object-contain hidden lg:block w-[500px] absolute left-1/4 translate-x-[20%]  z-0 top-[40%] right-60 opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
                 <p className="text-base sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans ">Empowering African Businesses Online</p>
                <p className="text-[#130D08]  dark:text-[#FFFFFF] font-semibold text-xl xs:text-2xl lg:text-3xl font-sans">Affordable Hosting & Expert <span className='text-[#FF6A00]'>Support </span> for Growth-Driven Brands</p>
                <p className="text-[#616161]  text-sm smx:text-base lg:text-xl font-medium pt-2 lg:pt-5 dark:text-[#EDEDED]">WeHostify is proud to support businesses across Africa by offering accessible, reliable, and fast web hosting tailored to your needs. </p>
                <p className="text-[#616161]  text-sm smx:text-base  lg:text-xl font-medium pt-2 lg:pt-5 dark:text-[#EDEDED]">Whether you're a startup, NGO, or local business, we provide the tools and support to help you thrive online. </p>
             
                   <div className="hidden lg:flex lg:mt-10  w-full ">
                    <FancyButton
                    extraClass=""
                    text="Get Started"
                    bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                    bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)"
                    textColor="#fff"
                    conicColor="rgba(255, 221, 0, 0.5)"
                    width="240px"
                      // width={isMobile ? "250px" : "20px"}
                    height="52px"
                    borderRadius="50px"
                    animationSpeed="5s"
                    onClick={() => console.log("Clicked!")}/>
                    </div>
                     <div className="mt-6 lg:hidden  w-full ">
                    <FancyButton
                    extraClass=""
                    text="Get Started"
                    bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                    bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)"
                    textColor="#fff"
                    conicColor="rgba(255, 221, 0, 0.5)"
                    width="300px"
                      // width={isMobile ? "250px" : "20px"}
                    height="52px"
                    borderRadius="50px"
                    animationSpeed="5s"
                    onClick={() => console.log("Clicked!")}/>
                    </div>
            </div>
            <div className="h-full w-full   lg:h-fit sm:w-fit">
                <img src={EMPOWERIMG} className="lg:w-fit object-cover h-full"/>
               
            </div>
        </div>
        <div className='hidden  xl:flex items-center   pt-5 w-full gap-6  z-10'>
            <img src={EMPOWER} className=' object-contain' alt='african-salesperson'/>
            <img src={EMPOWER1} className=' object-contain' alt='african-salesperson'/>
            <img src={EMPOWER2} className='  object-contain' alt='african-salesperson'/>
        </div>
         <div className='grid    xl:hidden items-center gap-4  pt-5 w-full justify-between z-10'>
           <div className='flex  max-w-full   w-full  col-span-2 gap-5 '>
               <img src={EMPOWER} className='w-[48%] object-contain h-auto' alt='african-salesperson'/>
                <img src={EMPOWER1} className='w-[48%] object-contain h-auto ' alt='african-salesperson'/>
           </div>
           <div className='w-full col-span-2'>
             <img src={EMPOWER2} className='xl:max-w-full w-full'/>
           </div>
        </div>
    </div>
  )
}

export default EmpowerAfricanBusiness
