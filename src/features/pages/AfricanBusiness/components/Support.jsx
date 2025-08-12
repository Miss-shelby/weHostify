import React from 'react'
import { BGGRADIENT, TEAMBG, TEAMBGMOBILE } from '../../../../constants/assetexports';
import FancyButton from '../../../shared/Buttons/FancyButton';
import { Icons } from '../../../../Icons';
import useIsMobile from '../../../shared/utils/isMobile';

const Support = () => {

    return (
        <div className="xl:max-w-[1500px] lg:max-w-full md:max-w-3xl  mx-auto flex flex-col items-center justify-center pt-20  relative  px-6 lg:px-16">
            <div className='w-full'>
                <img className=' object-contain opacity-60  hidden lg:block  lg:w-[560px] top-[20%]  absolute z-[0] lg:right-[10%]  translate-x-[7%]   ' src={BGGRADIENT} alt='Yellow gradient'/>
                <div className='flex flex-col justify-center  w-full  items-center'>
                <div className="md:max-w-3xl flex flex-col z-10 items-center justify-center lg:max-w-4xl w-full  ">
                    <p className="text-base text-[#616161] text-center lg:text-left dark:text-[#EDEDED] font-sans ">We’re Here to Support You</p>
                    <p className="text-2xl leading-tight lg:text-3xl font-bold text-center font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0">Trusted, Transparent, and Tailored for Africa  </p> 
                    <p className="text-lg leading-tight  text-center   font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2">From day one, our priority is to make sure your experience is smooth, secure, and <span className='lg:block'> meaningful. We’re ready to support you every step of the way.</span> </p>
                    
                    <div className="w-full z-20 pt-6 lg:pt-20 flex  items-center gap-4 justify-between lg:gap-14">
                        <p className="text-[#130D08] min-h-[4.5rem] flex flex-col justify-center text-xl xs:text-[22px] lg:text-4xl dark:text-[#FFFFFF] font-medium font-sans">50% Off <span className="text-[#616161] text-sm  xs:text-base lg:text-2xl block dark:text-[#EDEDED] pt-1 lg:pt-1">Discount</span></p>
                        <Icons.divider/>
                        <img className=' object-contain opacity-65   lg:hidden   top-[40%]  absolute z-0 right-[10%] w-[300px] translate-x-[7%]   ' src={BGGRADIENT} alt='Yellow gradient'/>
                         <p className="z-20 text-[#130D08] min-h-[4.5rem] flex flex-col justify-center text-xl xs:text-[22px] lg:text-4xl dark:text-[#FFFFFF] font-medium font-sans">Free .com .ng<span className="text-[#616161] text-sm xs:text-base lg:text-2xl block dark:text-[#EDEDED] pt-1 lg:pt-1">Domain</span></p>
                         <Icons.divider/>
                          <p className="z-20 text-[#130D08] min-h-[4.5rem] flex flex-col xs:justify-center text-xl  xs:text-[22px] lg:text-4xl dark:text-[#FFFFFF] font-medium font-sans">200+<span className="text-[#616161] text-sm xs:text-base lg:text-2xl block dark:text-[#EDEDED] pt-1 lg:pt-1">Businesses</span></p>
                    </div>
                   
                   
                </div>
                </div>
        
            </div>
            <p className='text-[#616161] pt-6 font-sans font-bold text-xl lg:pt-10 dark:text-[#EDEDED] text-center'>Choose Plan:</p>
             <div className='flex flex-col md:flex-row w-full justify-between mt-6 lg:mt-10 gap-5 lg:gap-10'>
                <PlanCard textColorOne="dark:text-[#fff]" textColorTwo="dark:text-[#EDEDED]" extraClass="bg-[#FFDD0033] dark:bg-[#FFDD00CC]" plan_name="DA_Platinum" plan_type="$19.00/Annually"/>
                <PlanCard extraClass="bg-[#FFDD00CC] dark:bg-[#FFDD00]" plan_name="DA_Rhodium" plan_type="$33.00/Annually"/>
             </div>
             <DigitalTeam/>
        </div>
    )
}

export default Support

const PlanCard =({plan_name,plan_type,extraClass,textColorOne,textColorTwo})=>{
    return (
        <div className={` ${extraClass} flex flex-col gap-20 lg:gap-28 w-full py-7  px-5 lg:px-10 justify-center rounded-[17px] lg:rounded-[30px] lg:min-h-[300px] `}>
                    <p className={`text-[#130D08] text-2xl lg:text-4xl ${textColorOne} font-medium font-sans`}>{plan_name}</p>
                   <div className='flex w-full justify-between items-center'>
                      <p className={`text-xl lg:text-3xl text-[#616161] ${textColorTwo} font-medium font-sans `}>{plan_type}</p>
                      <Icons.arrow className="fill-#616161 dark:fill-white hidden lg:block" />
                       <Icons.smallArrow className="fill-#616161 dark:fill-white block lg:hidden" />
                   </div>
        </div>
    )
}

const DigitalTeam=()=>{
    const isMobile = useIsMobile();
    return (
        <div className="mt-20  lg:gap-0  pl-4   lg:pl-10 bg-[#FF6A004D]  w-full rounded-[16px] lg:rounded-[30px] 
        relative max-w-full justify-between flex items-stretch lg:items-center ">
                 <img className=' object-contain hidden  lg:hidden w-[500px] absolute left-0 translate-x-[-20%] z-0 top-[0%] opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
            <div className="w-[60%] py-5 xs:pt-5 xs:py-0 md:pb-5 lg:pb-0 z-20 lg:py-0 lg:w-fit lg:max-w-xl">
                <img className=' object-contain hidden lg:block w-[500px] absolute left-0 translate-x-[-50%]  z-0 top-[40%] right-60 opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
                <p className="text-[#130D08]  dark:text-[#FFFFFF] font-semibold text-xl xs:text-2xl lg:text-3xl font-sans">Where Local Businesses Meet Global Potential</p>
                <p className="text-[#616161]  text-sm smx:text-base [1.1rem] lg:text-xl font-medium pt-2 lg:pt-5 dark:text-[#EDEDED]">By joining WeHostify, you don’t just get hosting — you get a community. We provide networking opportunities, marketing support, and visibility across our platforms to showcase your success.</p>
                   <div className="mt-4 lg:mt-10  w-full ">
                    <FancyButton
                    extraClass="!text-[10px] smx:!text-[12.5px] lg:!text-base"
                    text="Join WeHostify Community"
                    bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                    bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)"
                    textColor="#fff"
                    conicColor="rgba(255, 221, 0, 0.5)"
                    // width="300px"
                      width={isMobile ? "250px" : "300px"}
                    height="52px"
                    borderRadius="50px"
                    animationSpeed="5s"
                    onClick={() => console.log("Clicked!")}/>
                    </div>
            </div>
            <div className="h-full smx:w-[30%]   lg:h-fit sm:w-fit">
                <img src={TEAMBG} className="hidden lg:block lg:w-fit object-cover h-full"/>
                <img src={TEAMBGMOBILE} className="lg:hidden  smx:h-[400px] md:h-fit w-full "/>
            </div>
        </div>
    )
}