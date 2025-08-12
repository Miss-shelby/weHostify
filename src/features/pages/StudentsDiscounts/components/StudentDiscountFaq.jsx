/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BGGRADIENT, FAQGRADIENT, GLOW } from "../../../../constants/assetexports";
import { Icons } from "../../../../Icons";
import {motion } from "framer-motion"
import { studentfaqData } from "../../../../data";

const StudentDiscountFaq = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="relative">
        <div className="absolute hidden lg:block overflow-hidden top-[600px] lg:top-[370px] left-0   z-0 pointer-events-none opacity-55  ">
          <img src={GLOW} alt="glow"className=" object-cover lg:w-[500px] lg:h-[644px] lg:-translate-y-[10%]  h-full left-0 w-[350px]  "/>
        </div>
        <div className="absolute overflow-hidden  lg:hidden top-0 lg:top-[370px] left-0   z-0 pointer-events-none opacity-55 block ">
          <img src={GLOW} alt="glow"className=" object-cover lg:w-[500px] lg:h-[644px] -translate-y-[20%]  h-full left-0 w-[350px]  "/>
        </div>
        <div className='xl:max-w-[1500px]   mx-auto flex flex-col items-center justify-center pt-20 relative  px-6 lg:px-16'>
            <div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            viewport={{ once: true,amount:0.3}}
            className="md:max-w-[790px] w-full mx-auto">
                <p className="text-base sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">Frequently Asked Questions (FAQs)</p>
                <p className="text-2xl leading-tight lg:text-[32px] font-bold font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-2 text-center">You’ve Got Questions. We’ve Got Answers</p>
                <p className="text-lg leading-tight sm:text-xl   font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-[10px] text-center">We want your student hosting journey to be smooth and stress-free. Here are answers to some common questions about the WeHostify Student Discount program:</p>
            </div>
            <div className="w-full mt-6 lg:mt-14 space-y-4 relative">
              {studentfaqData.map((faq, index) => (
                  <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    viewport={{ once: true,amount:0.3}}
                    key={index} className="border-[#909090] border-b-[1px] z-10 py-6 "  >
                    <button onClick={() => toggleFAQ(index)}
                        className="flex justify-between w-full text-left text-lg  sm:text-xl font-sans dark:text-[#FFFFFF] font-semibold text-[#130D08]">
                        <span>{faq.question}</span>
                        <span>{openIndex === index ? <Icons.iconDown/>: <Icons.iconUp/>}</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
                      }`} >
                      <p className="text-[#616161] dark:text-[#EDEDED] font-sans text-sm sm:text-base py-2">{faq.answer}</p>
                    </div>
                  </motion.div>
            ))}
            </div>
        </div>
        <div className="absolute overflow-hidden  lg:hidden  translate-y-[70%] bottom-0 right-0   z-0 pointer-events-none opacity-55 block ">
          <img src={GLOW} alt="glow"className=" object-cover translate-x-[10%]   left-0 w-[350px]  "/>
        </div>
    </div>
  )
}

export default StudentDiscountFaq

