import { hostingPlans } from "../../../../data"
import HostingCard from "./Cards/HostingCard"


const HostingPlans = () => {
  return (
    <div className="xl:max-w-[1500px] mx-auto flex flex-col items-center justify-center pt-52 relative pb-10 px-6 lg:px-14">
       {/* <div className="absolute top-0 right-[-90px]  border  border-purple-900">
        <img src="src/assets/bg-gradient.png" alt="glow"
          className=" object-scale-down "/>
       </div> */}
        <p className="text-lg text-[#616161] dark:text-[#EDEDED] font-sans text-center">Plans That Grow With You</p>
        <p className="text-xl lg:text-4xl font-bold text-[#130D08] dark:text-[#fff] pt-2 text-center">Flexible Hosting Plans for Every Type of Project</p>
         <p className="text-2xl font-sans  font-medium text-[#616161] dark:text-[#EDEDED] pt-3 text-center">WeHostify has a plan built just for you. Enjoy fast, secure hosting with  <span className="lg:block">unmatched local support.</span></p>
         <div className="grid lg:grid-cols-3 w-full gap-6 mt-10">
           {
            hostingPlans.map((plan,idx)=>(
               <HostingCard isPopular={plan.plan.isPopular} name={plan.plan.name} desc={plan.plan.desc} price={plan.plan.price} packages={plan.plan.packages} key={idx}/>
            ))
           }
         </div>
    </div>
  )
}

export default HostingPlans