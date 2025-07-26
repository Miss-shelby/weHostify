import React from 'react'
import { BGGRADIENT,GIFTBOX, } from '../../../../constants/assetexports'
import FancyButton from '../../../shared/Buttons/FancyButton'
import { Icons } from '../../../../Icons'

const ReferralProgram = () => {
  return (
    <div className="relative">
        <div className='xl:max-w-[1500px]  mx-auto flex flex-col items-center justify-center pt-14 lg:pt-28 relative  px-6 lg:px-16'>
             <img className=' object-contain absolute opacity-65 w-[300px] lg:opacity-100 z-[0] right-0   lg:left-1/2 transform lg:-translate-x-1/2 top-0 lg:top-44' src={BGGRADIENT} alt='Yellow gradient'/>
            <div className="w-full z-20">
                <p className="text-sm sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">Referral Program</p>
                <p className="text-xl lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] pt-2 text-center">Earn More by Sharing WeHostify</p>
                <div className="">
                    <p className="text-base sm:text-xl lg:max-w-3xl mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-1 sm:pt-2 text-center">Our referral program lets you earn discounts, cash, or free hosting time 
                        <span className='lg:block'> every time someone signs up using your unique link.</span> </p>
                    <div className="bg-[#FFDD004D] rounded-[20px] p-4 mt-10">
                        <div className="flex justify-between w-full lg:items-center">
                            <div className="">
                                <p className='text-[#130D08] leading-tight sm:leading-relaxed text-base sm:text-lg dark:text-white font-bold lg:text-2xl font-sans'>Love WeHostify? Tell your friends and get rewarded!</p>
                                <p className='text-xs sm:text-xl text-[#616161] dark:text-[#EDEDED] font-medium pt-2'>Our referral program lets you earn discounts, cash, or free hosting time
                                    <span className='sm:block'> every time someone signs up using your unique link.</span></p>
                            </div>
                            <img className='object-contain w-[118px] md:w-[250px]' src={GIFTBOX} alt='Gift box'/>
                        </div>
                    </div>
                  <div className="grid relative lg:grid-cols-5 mt-6 lg:mt-10">
                    <div className="flex flex-col items-center justify-center">
                        <Icons.createlink/>
                        <p className='text-xl font-sans py-3 dark:text-[#FFFFFF] font-bold text-[#130D08] '>Create link</p>
                        <p className='text-lg text-[#616161] dark:text-[#EDEDED] text-center  font-sans font-medium'>Create your unique referral <span className='sm:block'> link on WeHostify</span></p>
                          <div className="block lg:hidden my-2">
                             <Icons.curveArrowMobile/>
                         </div>
                    </div>
                    <div className="hidden lg:block">
                        <Icons.curveArrow/>
                    </div>
                     <div className="flex flex-col items-center justify-center">
                        <Icons.shareicon/>
                        <p className='text-xl font-sans py-3 font-bold text-[#130D08] dark:text-[#FFFFFF] '>Share link</p>
                        <p className='text-lg text-[#616161] text-center dark:text-[#EDEDED]  font-sans font-medium'>Send your link to your <span className='sm:block'> friends using any platform </span></p>
                        <div className="lg:hidden block my-2">
                         <Icons.curverrowMobile2/>
                    </div>
                    </div>
                    <img className=' object-contain absolute opacity-50 sm:hidden z-[0] left-1/3 transform -translate-x-1/2 top-[450px]' src={BGGRADIENT} alt='Yellow gradient'/>
                    <div className="hidden lg:block">
                         <Icons.curveArrow2/>
                    </div>
                     
                     <div className="flex flex-col items-center relative justify-center">
                       
                        <Icons.badge/>
                        <p className='text-xl font-sans py-3 font-bold text-[#130D08] dark:text-[#FFFFFF]'>Earn rewards</p>
                        <p className='text-lg text-[#616161] text-center dark:text-[#EDEDED]  font-sans font-medium'>Earn free rewards and  <span className='sm:block'> discounts  </span></p>
                    </div>
                  </div>
                   <div className="mt-10 flex flex-col items-center justify-center">
                        <FancyButton
                        text="Start Referring Now"
                        bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                        bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)"
                        textColor="#fff"
                        conicColor="rgba(255, 221, 0, 0.5)"
                        width="400px"
                        height="52px"
                        borderRadius="50px"
                        animationSpeed="5s"
                        onClick={() => console.log("Clicked!")}/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ReferralProgram