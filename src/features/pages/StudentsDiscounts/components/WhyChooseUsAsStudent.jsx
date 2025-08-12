/* eslint-disable no-unused-vars */
import { BGGRADIENT, STUDENTIMG } from "../../../../constants/assetexports"
import { Icons } from "../../../../Icons"
import FancyButton from "../../../shared/Buttons/FancyButton";
import useIsMobile from "../../../shared/utils/isMobile";
import {motion, AnimatePresence} from 'framer-motion'
const WhyChooseUsAsStudent = () => {
     const isMobile = useIsMobile();
  return (
     <div className='xl:max-w-[1500px] overflow-x-clip  lg:max-w-full md:max-w-3xl  mx-auto flex flex-col items-center justify-center pt-20   relative  px-6 lg:px-16'>
          {/* <div className="flex items-center absolute right-0 translate-x-10 justify-center w-[500px] h-[500px] rounded-full bg-[radial-gradient(37.26%_37.26%_at_50%_50%,rgba(255,194,51,0.56)_0%,rgba(255,194,51,0)_100%)]">
            </div> */}
            {/* <motion.svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            >
            <circle cx="60" cy="60" r="40" stroke="#FBBF24" strokeWidth="4" fill="#FBBF24" />
            </motion.svg>
            <motion.svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
            <circle cx="60" cy="60" r="40" stroke="#FACC15" strokeWidth="4" fill="none" />
            </motion.svg>
            <motion.svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            >
            <motion.circle
                cx="50"
                cy="60"
                r="35"
                stroke="#FDE68A"
                strokeWidth="4"
                fill="none"
                animate={{
                cx: [50, 60], // move towards center
                scale: [1, 1.2, 1]
                }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            <motion.circle
                cx="70"
                cy="60"
                r="35"
                stroke="#FBBF24"
                strokeWidth="4"
                fill="none"
                animate={{
                cx: [70, 60], // move towards center
                scale: [1, 1.2, 1]
                }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            </motion.svg> */}


             <img className=' object-contain hidden lg:block absolute opacity-65 w-[600px] 
                 lg:opacity-50 z-[0] right-[5%] transform  top-32 translate-y-36' src={BGGRADIENT} alt='Yellow gradient'/>
             <p className="text-base sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">Why Choose WeHostify as a Student?</p>
            <p className="text-2xl leading-tight lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0 text-center">Hosting That Grows With You</p>
            <p className="text-lg leading-tight sm:text-xl   font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2 text-center">WeHostify supports your journey from idea to reality — with tools, flexibility, and  <span className='lg:block'>discounts designed to evolve with your goals. </span></p>
            <div className="grid  sm:px-0  lg:grid-cols-3 pt-6 lg:pt-10 w-full  gap-10 z-10 ">
                
                <div className="block lg:hidden">
                    <img className=' object-contain opacity-55 w-[350px] sm:hidden  lg:w-fit top-[15%]  absolute z-[0] lg:left-[30%] left-0 
                    translate-x-[-40%] lg:translate-y-[60%]  ' src={BGGRADIENT} alt='Yellow gradient'/>
                    <img src={STUDENTIMG} alt="free pik student image"/>
                </div>
                <div className="flex flex-col items-center gap-6 lg:gap-20">
                    <StudentCard title="Student-Friendly Pricing" desc="Our hosting packages are priced with students in mind — giving you premium features at half the cost." Icon={Icons.heart} />
                    <StudentCard title="Skill-Building Tools" desc="Use our AI website builder, integrated dashboards, and domain tools to gain real-world digital experience." Icon={Icons.innovation} />
                </div>
                <div className="hidden lg:block">
                    <img src={STUDENTIMG} alt="free pik student image"/>
                </div>
                 <div className="flex flex-col items-center gap-6 lg:gap-20">
                    <StudentCard title="Growth-Ready Platform" desc="As your ideas evolve, your hosting can scale. We support you from first click to full launch." Icon={Icons.growth} />
                    <StudentCard title="Community & Mentorship" desc="You’re not just buying hosting — you’re joining a network of learners, makers, and mentors." Icon={Icons.community} />
                </div>
            </div>
             <div className="mt-6 flex w-full justify-center lg:mt-10">
                    <FancyButton
                        text="Get Started Now"
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


export default WhyChooseUsAsStudent

 const StudentCard =({Icon,title,desc,hostingList})=>{
    return (
        <div className="w-full z-20">
       {Icon && <Icon />}
       
            <p className='text-2xl lg:text-2xl dark:text-[#FFFFFF] pt-2 lg:pt-6 font-sans font-semibold text-[#130D08]'>{title}</p>
            <p className='text-lg lg:text-lg dark:text-[#EDEDED] pt-2 lg:pt-3 font-sans font-medium text-[#616161]'>{desc}</p>
                {
                 hostingList &&
                <ul className="list-disc font-sans text-lg pl-6 text-[#616161] dark:text-[#FFFFFF] font-medium pt-2">
                   {
                    hostingList.map((host)=>(
                         <li>{host}</li>
                    ))
                   }
                   
                </ul>
                }
        </div>
    )
}