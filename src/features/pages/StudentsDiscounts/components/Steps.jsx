import { BGGRADIENT, CIRCLE1, CIRCLE2, CIRCLE3 } from "../../../../constants/assetexports"
import FancyButton from "../../../shared/Buttons/FancyButton"
import useIsMobile from "../../../shared/utils/isMobile";


const Steps = () => {
     const isMobile = useIsMobile();
  return (
    <div className='xl:max-w-[1500px]   lg:max-w-full md:max-w-3xl  mx-auto flex flex-col  justify-center pt-20 lg:pt-20 w-full  relative  px-6 lg:px-16'>
         <p className="text-base sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">How to Apply for the Student Discount</p>
        <p className="text-2xl leading-tight lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0 text-center">Easy Steps to Unlock Your Student Hosting Deal</p>
        <p className="text-lg leading-tight sm:text-xl   font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2 text-center">We’ve kept the process simple and secure — just send us a few details, and we’ll set up <span className='lg:block'>your account so you can launch in no time.  </span></p>
             {/* <img className=' object-contain w-[500px] hidden lg:block absolute right-0 translate-x-[30%]  z-0 top-[25%]  opacity-60' src={BGGRADIENT} alt='Yellow gradient'/> */}
             <div className="lg:grid grid-cols-1 hidden lg:grid-cols-3 pt-6 lg:mt-10 w-full gap-14 items-end  justify-between z-10 ">
                <img src={CIRCLE1} className="   object-contain h-[200px]" alt="circle one"/>
                <img className=' object-contain hidden lg:block absolute left-0 w-[500px] translate-x-[-30%]  z-0 top-72  opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
                <img src={CIRCLE2}  className=" object-contain h-[263px]" alt="circletwo"/>
                 <img src={CIRCLE3}  className=" object-contain h-[300px]" alt="circle three"/>
             </div>
                <div className=" grid-cols-1 hidden lg:grid lg:grid-cols-3 pt-6 lg:mt-10 w-full  gap-11 z-10 ">
                   <div className="">
                        <p className="text-2xl lg:text-3xl  text-[#130D08] font-sans font-semibold dark:text-white ">Submit Your Student Details</p>
                        <ul className="pl-6 lg:mt-10 text-[#616161] dark:text-[#EDEDED] list-disc font-medium text-xl font-sans">
                            <li className="">Upload a valid student ID card</li>
                            <li className="pt-6">Your school admission letter</li>
                            <li className="pt-6">Provide your official school email address.</li>
                        </ul>
                   </div>
                    <div className=" ">
                        
                        <p className="text-2xl lg:text-3xl  text-[#130D08] font-sans font-semibold dark:text-white ">Verification & Account Setup</p>
                         <img className=' object-contain hidden lg:block absolute right-1/3 w-[450px]   z-0 bottom-0 translate-y-20 opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
                        <ul className="pl-6 lg:mt-10 text-[#616161] dark:text-[#EDEDED] list-disc font-medium text-xl font-sans">
                            <li className="">Our team will review your submission</li>
                            <li className="pt-6">Verify your documents</li>
                            <li className="pt-6">Create your hosting account using your school email address</li>
                        </ul>
                   </div>
                   <div className=" ">
                       
                        <p className="text-2xl lg:text-3xl  text-[#130D08] font-sans font-semibold dark:text-white ">Start Enjoying Your Discount</p>
                        <ul className="pl-6 lg:mt-10 text-[#616161] dark:text-[#EDEDED] list-disc font-medium text-xl font-sans">
                            <li className="">We’ll send your login details to your school email</li>
                            <li className="pt-6">You can change your password</li>
                            <li className="pt-6">Begin using your 50% off hosting and free .com.ng domain.</li>
                        </ul>
                   </div>
                </div>
                <div className="flex flex-col items-center mt-6 gap-6 w-full lg:hidden z-10 ">
                   <div className="w-full flex flex-col items-center justify-center">
                        <img src={CIRCLE1} className=" w-[150px]  object-contain" alt="circle one"/>
                        <p className="text-[22.5px] py-4 lg:text-3xl lg:mt-10 text-[#130D08] font-sans font-semibold dark:text-white ">Submit Your Student Details</p>
                        <ul className="pl-6  lg:mt-10 text-[#616161] dark:text-[#EDEDED] list-disc font-medium text-lg font-sans">
                            <li className="">Upload a valid student ID card</li>
                            <li className="pt-6">Your school admission letter</li>
                            <li className="pt-6">Provide your official school email address.</li>
                        </ul>
                   </div>
                    <div className="w-full flex flex-col z-10 items-center justify-center ">
                        <img src={CIRCLE2}  className="w-[150px] object-contain" alt="circletwo"/>
                        <p className="text-[22.5px] lg:text-3xl py-4 text-[#130D08] font-sans font-semibold dark:text-white ">Verification & Account Setup</p>
                        <img className=' object-contain  lg:hidden absolute right-[10%] w-[300px]   z-0 top-[50%]  opacity-50' src={BGGRADIENT} alt='Yellow gradient'/>
                        <ul className="pl-6  text-[#616161] dark:text-[#EDEDED] list-disc font-medium text-lg font-sans">
                            <li className="">Our team will review your submission</li>
                            <li className="pt-6">Verify your documents</li>
                            <li className="pt-6">Create your hosting account using your school email address</li>
                        </ul>
                   </div>
                   <div className=" w-full flex flex-col items-center justify-center">
                        <img src={CIRCLE3}  className="w-[150px] object-contain" alt="circle three"/>
                        <p className="text-[22.5px] py-4 lg:text-3xl lg:mt-10 text-[#130D08] font-sans font-semibold dark:text-white ">Start Enjoying Your Discount</p>
                        <ul className="pl-6  text-[#616161] dark:text-[#EDEDED] list-disc font-medium text-lg font-sans">
                            <li className="">We’ll send your login details to your school email</li>
                            <li className="pt-6">You can change your password</li>
                            <li className="pt-6">Begin using your 50% off hosting and free .com.ng domain.</li>
                        </ul>
                   </div>
                </div>
            <div className="mt-6 flex justify-center lg:mt-10">
                <FancyButton
                    text="Apply for Student Discount"
                    bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                    bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)"
                    textColor="#fff"
                    conicColor="rgba(255, 221, 0, 0.5)"
                    // width="400px"
                    width={isMobile?"300px":"400px"}
                    height="52px"
                    borderRadius="50px"
                    animationSpeed="5s"
                    onClick={() => console.log("Clicked!")}/>
            </div>

    </div>
  )
}

export default Steps