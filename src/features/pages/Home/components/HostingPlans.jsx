import { GLOW } from "../../../../constants/assetexports"
import { hostingPlans } from "../../../../data"
import HostingCard from "./Cards/HostingCard"


const HostingPlans = () => {
  return (
    <div className="relative">
      <div className="xl:max-w-[1500px] mx-auto flex flex-col items-center justify-center pt-64 sm:pt-24 lg:mt-28 px-6 lg:px-14">
        <div className="absolute top-36 right-0  z-0 pointer-events-none opacity-55 overflow-hidden hidden lg:block ">
          <img src={GLOW} alt="glow"
            className=" object-cover w-full h-full  translate-x-1/4 "/>
        </div>
        
        <div className="absolute bottom-0 lg:w-[800px] lg:h-[800px]  lg:left-0   z-0 pointer-events-none opacity-45    ">
          <img src={GLOW} alt="left-gradient glow"
            className=" object-cover w-full h-full  lg:translate-x-[-30%] lg:translate-y-[30%] translate-y-[65%]"/>
        </div>
          <p className="text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">Plans That Grow With You</p>
          <p className="text-2xl leading-tight sm:leading-normal lg:text-3xl font-bold text-[#130D08] py-1 dark:text-[#fff] lg:pt-2 text-center">Flexible Hosting Plans for Every Type of Project</p>
          <p className="text-lg leading-tight sm:text-xl font-sans   font-medium text-[#616161] dark:text-[#EDEDED] sm:pt-3 text-center">WeHostify has a plan built just for you. Enjoy fast, secure hosting with  <span className="lg:block">unmatched local support.</span></p>
          <div className="grid items-center lg:grid-cols-3 md:px-10 lg:px-0 w-full gap-6 mt-6 sm:mt-10">
            {
              hostingPlans.map((plan,idx)=>(
                <HostingCard isPopular={plan.plan.isPopular} name={plan.plan.name} desc={plan.plan.desc} price={plan.plan.price} packages={plan.plan.packages} key={idx}/>
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default HostingPlans