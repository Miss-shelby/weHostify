/* eslint-disable no-unused-vars */
import {motion} from "framer-motion"
export const FeaturesCard =({iconSrc,title,desc})=>{
    return (
        <motion.div 
        initial={{ rotateX: -90, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
         viewport={{ once: true,amount:0.3}}
        transition={{ duration: 1.5 }}
        style={{ transformOrigin: "right" }}
         className="bg-[#FFFFFF] dark:bg-[#18183A] px-5 rounded-[30px] py-6 xl:w-[340px] lg:min-h-[250px]">
            <img className='h-9 w-8 ' src={iconSrc} alt='icon'/>
            <p className='text-2xl lg:text-2xl dark:text-[#FFFFFF] pt-5 lg:pt-2 font-sans font-semibold text-[#130D08]'>{title}</p>
            <p className='text-lg lg:text-lg dark:text-[#EDEDED] pt-2 font-sans font-medium text-[#616161]'>{desc}</p>
        </motion.div>
    )
}

export const ServicesCard =({Icon,title,desc,hostingList})=>{
    return (
        <div className="bg-[#FFFFFF] dark:bg-[#18183A] px-5 rounded-[30px] lg:min-h-[250px] py-[20px] lg:py-[26px] xl:w-full ">
            {/* <img className='h-9 w-8 ' src={iconSrc} alt='icon'/> */}
       
          {
            Icon &&  <Icon/>
          }
       
            <p className='text-2xl lg:text-2xl dark:text-[#FFFFFF] pt-3 lg:pt-4 font-sans font-semibold text-[#130D08]'>{title}</p>
            <p className='text-lg lg:text-lg dark:text-[#EDEDED] pt-3 lg:pt-4 font-sans font-medium text-[#616161]'>{desc}</p>
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

export const KeyFeaturesCard =({Icon,title,desc,hostingList})=>{
    return (
        <div className="bg-[#FFFFFF] dark:bg-[#18183A] px-5 rounded-[30px]  py-[20px] lg:py-[26px] xl:w-full ">
            <p className='text-2xl lg:text-2xl dark:text-[#FFFFFF] pt-3 lg:pt-4 font-sans font-semibold text-[#130D08]'>{title}</p>
            <p className='text-lg lg:text-lg dark:text-[#EDEDED] pt-3 lg:pt-4 font-sans font-medium text-[#616161]'>{desc}</p>
        </div>
    )
}

