/* eslint-disable no-unused-vars */
import { useState } from "react";
import { LOGO } from "../../../../constants/assetexports"
import { Icons } from "../../../../Icons"
import { footerItems } from "../../../../data";
import {motion } from "framer-motion"
const Footer = () => {
       const [openIndex, setOpenIndex] = useState([]); // store multiple open indexes

  const toggleFooter = (index) => {
    if (openIndex.includes(index)) {
      // if already open, remove it
      setOpenIndex(openIndex.filter(i => i !== index));
    } else {
      // if not open, add it
      setOpenIndex([...openIndex, index]);
    }
  };
  return (
    <motion.div 
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true,amount:0.3}}
    // viewport={{ once: true,amount:"some" }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="bg-[#011B33] relative z-20">
     <div className='xl:max-w-[1500px]   mx-auto flex flex-col items-center justify-center pt-6 lg:pt-20 relative pb-10 px-6 lg:px-16'>
        <div className="grid lg:grid-cols-5 w-full space-y-8 lg:space-y-0 items-start ">
            {
                footerItems.map((item,idx)=>(
                    <div key={idx} className="">
                        <button onClick={() => toggleFooter(idx)}
                            className={`lg:hidden flex justify-between w-full text-left text-[#FF6A00] font-semibold font-sans  text-base`}>
                            <span>{item.title}</span>
                            <span>{openIndex.includes(idx) ? <Icons.iconDown/>: <Icons.iconUp/>}</span>
                        </button>
                    <p className={`${idx === 0 || idx === 1 ?"text-[#FF6A00]":"text-[#BF5540]"} hidden lg:block font-semibold font-sans  text-lg `}>{item.title}</p>
                        <ul className=" lg:pt-6 flex flex-col lg:gap-2">
                        {
                            item.items.map((i,index)=>(
                                <div key={index} className="">
                                    <li  className="text-sm hidden lg:block font-light text-[#FFFFFF]">{i}</li>
                                    {/* mobile toggle  */}
                                    <div className={`lg:hidden flex flex-col   overflow-hidden transition-all duration-300 ease-in-out ${
                                        openIndex.includes(idx) ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
                                        }`} >
                                        <p className="font-light text-[#FFFFFF] font-sans pt-2 text-xs ">{i}</p>
                                    </div>

                                </div>
                            ))
                        }
                    </ul>

                   
                    </div>
                ))
            }
            <img className="pt-20 lg:pt-0" src={LOGO}/>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-between mt-10 lg:items-center">
            <div className="flex gap-4 items-center">
                <Icons.facebook/>
                <Icons.instagram/>
                <Icons.linkedin/>
                <Icons.x/>
            </div>
            <p className="text-[#FFFFFF] text-center pt-24 lg:pt-0 font-sans text-xs font-light">© 2025 WeHostify, All rights reserved</p>
        </div>
    </div>
    </motion.div>
  )
}

export default Footer