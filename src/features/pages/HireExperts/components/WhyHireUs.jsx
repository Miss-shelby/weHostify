import { BGGRADIENT, ROUNDTABLEMEETING } from "../../../../constants/assetexports"
import { Icons } from "../../../../Icons"

export const WhyHireUs =() =>{
    return (
        <div className="xl:max-w-[1500px] lg:max-w-full md:max-w-3xl  mx-auto flex flex-col items-center justify-center pt-20 lg:pt-20  relative  px-6 lg:px-16">
            <div className=''>
                <img className=' object-contain opacity-55 w-[350px] lg:hidden  lg:w-fit top-[40%]  absolute z-[0] lg:left-[30%] left-0 translate-x-[-40%] lg:translate-y-[60%] lg:top-0 ' src={BGGRADIENT} alt='Yellow gradient'/>
                <div className='flex flex-col-reverse gap-6 xl:gap-0   lg:flex-row items-center w-full  justify-between'>
                
                <div className="md:max-w-3xl md:mx-auto lg:max-w-full lg:mx-0  lg:w-[55%] z-20 pb-0 xl:pb-0 ">
                <p className="text-[15px] sm:text-base text-[#616161] text-center lg:text-left dark:text-[#EDEDED] font-sans ">Why Hire WeHostify?</p>
                <p className="text-[22px] leading-tight lg:text-2xl font-bold text-center lg:text-left font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0">Your Idea Deserves a Professional Touch</p> 
                    <p className="text-[17px] leading-tight  text-center lg:text-left mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2">Choosing WeHostify means choosing a trusted partner to bring your digital vision to life. Our team doesn't just build websites — we build solutions with care, precision, and purpose.  </p>
                   <ul className=" pt-3 lg:pt-10">
                    <li className="text-[17px] flex lg:items-center gap-2 leading-tight  lg:text-left mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED]"> <Icons.checked className=""/> <p><span className="font-semibold dark:text-[#FFFFFF] text-[#130D08] ">Full Project Ownership —</span> from idea to launch, we handle it all</p> </li>
                    <li className="text-[17px] pt-4 flex lg:items-center gap-2 leading-tight   lg:text-left mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED]"> <Icons.checked className=""/> <p><span className="font-semibold dark:text-[#FFFFFF] text-[#130D08] ">Personalized Approach — </span> every solution is tailored to your needs</p> </li>
                    <li className="text-[17px] pt-4 flex lg:items-center gap-2 leading-tight   lg:text-left mx-auto font-sans font-medium text-[#616161] dark:text-[#FFFFFF] dark:text-[#EDEDED]"> <Icons.checked className=""/> <p><span className="font-semibold dark:text-[#FFFFFF] text-[#130D08] ">Transparent Pricing — </span> clear quotes, no surprises</p> </li>
                    <li className="text-[17px] pt-4 flex lg:items-center gap-2 leading-tight   lg:text-left mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED]"> <Icons.checked className=""/> <p><span className="font-semibold dark:text-[#FFFFFF] text-[#130D08] ">Expert Team — </span> design, dev, content, and strategy all handled </p> </li>
                   </ul>
                </div>
                <div className='flex w-full lg:w-fit lg:justify-end '>
                    <img className=' lg:h-[400px]  items-end object-contain  w-full' src={ROUNDTABLEMEETING} alt='office group'/>
                </div>
            </div>
        
            </div>
        </div>
    )
}