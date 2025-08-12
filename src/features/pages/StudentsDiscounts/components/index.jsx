import { BGGRADIENT, PEOPLEGROUP, ROUNDTABLEMEETING, STUDENTGROUP } from "../../../../constants/assetexports"
import { Icons } from "../../../../Icons"
import FancyButton from "../../../shared/Buttons/FancyButton"
// import useIsMobile from "../../../shared/utils/isMobile";

export const StudentDiscountProgram = ()=>{
    //  const isMobile = useIsMobile();
    return (
        <div className="xl:max-w-[1500px] lg:max-w-full md:max-w-3xl  mx-auto flex flex-col items-center justify-center pt-24 lg:pt-28  relative  px-6 lg:px-16">
            <div className='w-full'>
                <img className=' object-contain opacity-100  hidden lg:block  lg:w-[560px] top-[30%]  absolute z-[0] lg:right-[30%]  translate-x-[7%]   ' src={BGGRADIENT} alt='Yellow gradient'/>
                <div className='flex flex-col gap-6 xl:gap-0   lg:flex-row  w-full  justify-between'>
                
                <div className="md:max-w-3xl  md:mx-auto lg:max-w-full lg:mx-0 w-full  lg:w-[55%] xl:w-[53%] z-20 pb-6 xl:pb-0 ">
                <p className="text-base text-[#616161] text-center lg:text-left dark:text-[#EDEDED] font-sans ">Student Discount Program</p>
                <p className="text-2xl leading-tight lg:text-3xl font-bold text-center lg:text-left font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0">Student Hosting Made <span className="text-[#FF6A00]">Affordable</span> </p> 
                    <p className="text-lg leading-tight  text-center lg:text-left mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2">We offer a special discount exclusively for students who want to bring their projects, portfolios, and startups to life online.</p>
                    <p className="text-lg leading-tight  text-center lg:text-left mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-6">Get 50% off 1 year hosting and receive a free .com.ng domain — it’s everything you need to launch, learn, and grow.</p>
                    <div className="hidden  lg:flex lg:justify-start justify-center lg:mt-10 w-full">
                        <FancyButton
                            text="Fill Discount Form"
                            bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                            bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)"
                            textColor="#fff"
                            conicColor="rgba(255, 221, 0, 0.5)"
                            width="240px"
                            // width={isMobile?"350px":"240px"}
                            height="52px"
                            borderRadius="50px"
                            animationSpeed="5s"
                            onClick={() => console.log("Clicked!")}/>
                    </div>
                    <div className="mt-6 lg:hidden flex lg:justify-start justify-center lg:mt-10 w-full">
                        <FancyButton
                            text="Fill Discount Form"
                            bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                            bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)"
                            textColor="#fff"
                            conicColor="rgba(255, 221, 0, 0.5)"
                            width="300px"
                            height="52px"
                            borderRadius="50px"
                            animationSpeed="5s"
                            onClick={() => console.log("Clicked!")}/>
                    </div>
                    <div className="w-full z-20 pt-6 lg:pt-20 flex items-center justify-between lg:gap-14">
                        <p className="text-[#130D08] text-[22px] lg:text-4xl dark:text-[#FFFFFF] font-medium font-sans">50% Off <span className="text-[#616161] text-base lg:text-2xl block dark:text-[#EDEDED] pt-1 lg:pt-0">Discount</span></p>
                        <Icons.divider/>
                        <img className=' object-contain opacity-65   lg:hidden   top-[40%]  absolute z-0 right-[10%] w-[300px] translate-x-[7%]   ' src={BGGRADIENT} alt='Yellow gradient'/>
                         <p className="z-20 text-[#130D08] text-[22px] lg:text-4xl dark:text-[#FFFFFF] font-medium font-sans">Free .com .ng<span className="text-[#616161] text-base lg:text-2xl block dark:text-[#EDEDED] pt-1 lg:pt-0">Domain</span></p>
                    </div>
                    <div className="hidden lg:flex items-center gap-2  lg:pt-24">
                        <img className="object-contain h-[40px]" src={PEOPLEGROUP} alt="group of people"/>
                        <p className="text-[#616161] dark:text-[#EDEDED] font-medium text-base ">Join over <span className="text-[#130D08] dark:text-[#fff] font-semibold">200+ students</span> to start enjoy discounts on all your hosting plans</p>
                    </div>
                </div>
                <div className='flex w-full lg:w-fit lg:justify-end '>
                    <img className='lg:w-[450px] z-10 items-end object-contain  w-full' src={STUDENTGROUP} alt='student group'/>
                </div>
                <div className="lg:hidden flex items-center gap-2 ">
                     <img className="object-contain h-[25px]" src={PEOPLEGROUP} alt="group of people"/>
                        <p className="text-[#616161] dark:text-[#EDEDED] font-medium text-sm ">Join over <span className="text-[#130D08] dark:text-[#fff] font-semibold">200+ students</span> to start enjoy discounts on all your hosting plans</p>
                </div>
            </div>
        
            </div>
        </div>
    )
}