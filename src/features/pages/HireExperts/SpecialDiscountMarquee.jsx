
import { BGGRADIENT, TEAMBG, TEAMBGMOBILE } from "../../../constants/assetexports"
import FancyButton from "../../shared/Buttons/FancyButton";
// import useIsMobile from "../../shared/utils/isMobile";
import { SpecialDiscountsLoop } from "./components/DiscountCarousel";


const SpecialDiscounts = () => {
    // const isMobile = useIsMobile();
  return (
    <>
    <div className='xl:max-w-[1500px] w-full lg:max-w-full md:max-w-3xl  mx-auto flex flex-col items-center justify-center pt-20 lg:pt-20  relative  px-6 lg:px-16'>
         <p className="text-base sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">Empowering Local Innovation</p>
        <p className="text-2xl leading-tight lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0 text-center">Special Discounts for Afro-Based Businesses</p>
        <p className="text-lg leading-tight md:max-w-4xl sm:text-xl   font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2 text-center">We’re passionate about supporting African innovation. If your business is based in Africa, you automatically qualify for exclusive discounts on our expert services — whether you're building your first website, launching an app, or scaling a digital platform.WeHostify is here to reduce the barriers, so your ideas can go further, faster.</p>
             <img className=' object-contain hidden lg:block absolute z-0 top-0 -translate-y-[10%]  right-0 opacity-60' src={BGGRADIENT} alt='Yellow gradient'/>
        <div className="lg:mt-10 w-full overflow-hidden">
            <SpecialDiscountsLoop/>
        </div>
         <div className="mt-6 lg:mt-10 flex flex-col items-center justify-center w-full">
            <FancyButton
            text="Apply for Special Discount"
            bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
            bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)"
            textColor="#fff"
            conicColor="rgba(255, 221, 0, 0.5)"
            width="400px"
            // width={isMobile?"220px":"400px"}
            height="52px"
            borderRadius="50px"
            animationSpeed="5s"
            onClick={() => console.log("Clicked!")}/>
        </div>
        <DigitalTeam/>
    </div>
    </>
  )
}

export default SpecialDiscounts

const DigitalTeam=()=>{
    // const isMobile = useIsMobile();
    return (
        <div className="mt-20  lg:gap-0  pl-4  lg:pl-10 bg-[#FF6A004D]  w-full rounded-[16px] lg:rounded-[30px] 
        relative max-w-full justify-between flex items-stretch lg:items-center ">
                 <img className=' object-contain  lg:hidden w-[500px] absolute left-0 translate-x-[-20%] z-0 top-[0%] opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
            <div className="w-[60%] py-5 xs:pt-5 xs:py-0 z-20 md:pb-5 lg:pb-0 lg:py-0 lg:w-fit lg:max-w-lg">
                <img className=' object-contain hidden lg:block w-[500px] absolute left-0 translate-x-[-30%]  z-0 top-[0%] right-60 opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
                <p className="text-[#130D08]  dark:text-[#FFFFFF] font-semibold text-xl xs:text-2xl lg:text-3xl font-sans">We’re Your Digital Team</p>
                <p className="text-[#616161]  text-sm smx:text-base [1.1rem] lg:text-xl font-medium pt-2 lg:pt-5 dark:text-[#EDEDED]">You don’t need to find a separate agency or freelancer — you already trust your hosting with us, now let’s take your entire digital presence to the next level.
                With WeHostify, your idea is in expert hands.</p>
                   <div className="mt-4 lg:mt-10  w-full ">
                    <FancyButton
                    extraClass="!text-[10px] smx:!text-[12.5px] lg:!text-base"
                    text="Start Building with Us Today"
                    bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                    bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)"
                    textColor="#fff"
                    conicColor="rgba(255, 221, 0, 0.5)"
                    width="350px"
                    //   width={isMobile ? "250px" : "300px"}
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