import { BGGRADIENT, CLOUDCOMPUTINGONE, EDUCATION, HANDS, TECHEXPERT } from "../../../../constants/assetexports"
import { Icons } from "../../../../Icons"

const JoinUs = () => {
  return (
    <div className='xl:max-w-[1500px] lg:max-w-full md:max-w-[52rem]  mx-auto flex flex-col items-center justify-center pt-20 lg:pt-20  relative  px-6 md:px-4 lg:px-16'>
         <p className="text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">Let’s Grow Together</p>
        <p className="text-2xl leading-tight lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0 text-center">Ready to Join Us?</p>
        <p className="text-lg leading-tight sm:text-xl   font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2 text-center">WeHostify isn’t just a service — it’s a movement to empower every dream, every idea, and  <span className='lg:block'> every business across the continent and beyond.</span></p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch h-full w-full  mt-6 lg:mt-10">
            <div className="flex flex-col w-full pt-5 dark:bg-[#18183A] bg-[#FFFFFF] rounded-[30px]">
               <div className="flex w-full px-5 items-center lg:items-start justify-between">
                 <p className="text-[22px]  lg:text-2xl  dark:text-white text-[#130D08] font-medium font-sans">Explore Hosting <span className="text-[#FF6A00] lg:block">Plans</span></p>
                 <Icons.arrowUp className="fill-#616161 dark:fill-white"/>
               </div>
               <img className="w-full lg:pt-6 pt-4 h-full rounded-bl-[30px] rounded-br-[30px]" src={CLOUDCOMPUTINGONE} alt="cloud-computing-server-digital-data-storage-network-infrastructure"/>
            </div>
            <div className="">
                <div className="flex flex-col z-10 relative overflow-hidden  bg-[#FF6A004D] rounded-[30px]">
                    <div className="flex  w-full pt-5 px-5 items-center lg:items-start justify-between">
                        <p className="text-[22px]  lg:text-2xl  dark:text-white text-[#130D08] font-medium font-sans">Apply for SME/NGO  <span className="text-[#FF6A00] lg:block">Program</span></p>
                        <Icons.arrowUp className="fill-#616161 dark:fill-white"/>
                    </div>
                      <img className=' object-contain  sm:hidden absolute translate-x-[30%]  z-0 top-0 right-0 w-[400px] translate-y-[-20%] 
                      opacity-60' src={BGGRADIENT} alt='Yellow gradient'/>
                   <div className="w-full h-[170px] xs:h-[250px] lg:h-[230px]">
                       <img className="w-full h-full object-cover  rounded-bl-[30px] rounded-br-[30px]" src={HANDS} alt="hands reaching"/>
                   </div>
                </div>
                 <div className="flex flex-col mt-6 dark:bg-[#18183A]  bg-[#FFF] rounded-[30px]">
                    <img className="w-full object-contain h-[200px] xs:h-[200px] lg:h-[140px] pt-6 rounded-bl-[30px] rounded-br-[30px]" src={EDUCATION} alt="Education"/>
                    <div className="flex w-full pb-5 px-5 items-center lg:items-start  justify-between">
                        <p className="text-[22px]  lg:text-2xl  dark:text-white text-[#130D08] font-medium font-sans">Claim Student  <span className="text-[#FF6A00] lg:block"> Discount</span></p>
                        <Icons.arrowUp className="fill-#616161 dark:fill-white"/>
                    </div>
                 </div>
            </div>
             <div className="flex flex-col  dark:bg-[#18183A]  bg-[#FFF] rounded-[30px]">
                    <img className="w-full object-contain  rounded-tl-[30px] rounded-tr-[30px]" src={TECHEXPERT} alt="TECHEXPERT"/>
                    <div className="flex w-full items-center lg:items-start pt-4 lg:pt-6 px-5 pb-5 lg:pb-0  justify-between">
                        <p className="text-[22px]  lg:text-2xl  dark:text-white text-[#130D08] font-medium font-sans">Hire a tech <span className="text-[#FF6A00] lg:block">  Expert</span></p>
                        <Icons.arrowUp className="fill-#616161 dark:fill-white"/>
                    </div>
             </div>
        </div>
    </div>
  )
}

export default JoinUs



