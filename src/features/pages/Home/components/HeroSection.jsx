import { AFRICANWOMAN, GLOW } from "../../../../constants/assetexports";
import FancyButton from "../../../shared/Buttons/FancyButton";
import useIsMobile from "../../../shared/utils/isMobile";
import TextRoller from "./TextRoller"

const HeroSection = () => {
   const isMobile = useIsMobile();
  return (
    <div className="flex flex-col items-center w-ful justify-center pt-28 px-6 xl:px-0">
        <p className="text-[#616161] text-center font-sans text-base dark:text-[#EDEDED] ">Built in Africa. Made for the World.</p>
       <div className="hidden xs:flex flex-col lg:flex-row lg:gap-2 pt-2">
         <p className="text-[#130D08] text-center font-bold font-sans text-2xl  md:text-4xl   dark:text-[#FFFFFF]">Web Hosting with African Roots, Global</p>
         <TextRoller/>
          {/* <p className="bg-orange-gradient-text bg-clip-text text-transparent  font-bold font-sans text-4xl">Reach</p> */}
       </div>
          <div className="block xs:hidden">
              <div className=" text-[#130D08] dark:text-white font-bold font-sans text-2xl text-center w-full">
                <p className=""> Web Hosting with African <br className="block" />
                 <span className="inline-flex gap-2">
                 Roots, Global<TextRoller />
                </span></p>
              </div>
          </div>


          <p className="text-[#616161] text-xl md:text-[22px] lg:leading-[28px] dark:text-[#EDEDED] font-sans font-medium text-center lg:pt-[6px]">WeHostify powers your digital presence with reliable,
            <span className="sm:block">secure hosting tailored for Africa’s digital revolution.</span> </p>
        <div className="flex items-center gap-5  lg:gap-10 mt-10">
            <FancyButton
                text="See Plans"
                bgLinear="linear-gradient(0deg, rgba(255, 221, 0, 0.1), rgba(255, 221, 0, 0.1))"
                bgRadial="radial-gradient(50% 50% at 50% 50%, #FFDD00 0%, #FFDD00 100%)"
                textColor="#130D08"
                conicColor="rgba(255, 106, 0, 0.5)"
                // width="170px"
                width={isMobile ? "150px" : "170px"}
                height="52px"
                borderRadius="50px"
                animationSpeed="5s"
                onClick={() => {
                    console.log('hello');
                }}
                />
             <FancyButton
                text="Get started"
                bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)"
                textColor="#fff"
                conicColor="rgba(255, 221, 0, 0.5)"
                width={isMobile ? "150px" : "170px"}
                height="52px"
                borderRadius="50px"
                animationSpeed="5s"
                onClick={() => {
                console.log('hello');
                ;
                }}
             />
        </div>
        <div className="hidden dark:flex relative  flex-col  justify-center items-center">
           <img src={GLOW} alt="glow" className=" object-contain"/>
          <img src={AFRICANWOMAN} alt="african woman" className="absolute top-36 object-contain"/>
        </div>
        {/* light mode sm  */}
        <div className="dark:hidden lg:hidden flex relative  flex-col  justify-center items-center">
           <img src={GLOW} alt="glow" className=" object-contain"/>
          <img src={AFRICANWOMAN} alt="african woman" className="absolute top-32 object-contain"/>
        </div>
        {/* light mode  */}
        <div className="hidden lg:flex dark:hidden relative  justify-center items-center w-full ">
        {/* Top glow */}
        <img
          src={GLOW}
          alt="glow"
          className="absolute    object-contain "
        />

        {/* Woman image */}
        <img
          src={AFRICANWOMAN}
          alt="african woman"
          className="relative object-contain z-10 top-20"
        />

         {/* Bottom glow */}
        <img
          src={GLOW}
          alt="glow"
          className="absolute top-44 opacity-60  object-contain "
        />
      </div>


        {/* <div className="mt-8 bg-[url('src/assets/bg-gradient.png')] w-full   bg-center  h-full bg-no-repeat
         flex flex-col justify-center items-center">
           <div className="">
             <img src={AFRICANWOMAN} alt="african woman" className="object-contain " />
           </div>
        </div> */}
    </div>
  )
}

export default HeroSection