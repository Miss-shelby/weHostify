import { useState } from "react";
import { BGGRADIENT, FAQGRADIENT } from "../../../../constants/assetexports";
import { Icons } from "../../../../Icons";
import { faqData } from "../../../../data";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="">
           {/* <img className=' object-contain absolute z-[0] w-full right-0  top-0 ' src={FAQGRADIENT} alt='Yellow gradient'/> */}
    <div className='xl:max-w-[1500px]  mx-auto flex flex-col items-center justify-center pt-32 relative pb-10 px-6 lg:px-16'>
        <div className="md:max-w-[790px] w-full mx-auto">
             <p className="text-sm sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">Frequently Asked Questions (FAQs)</p>
            <p className="text-xl lg:text-[32px] font-bold font-sans text-[#130D08] dark:text-[#fff] pt-2 text-center">You’ve Got Questions. We’ve Got Answers</p>
            <p className="text-base sm:text-xl   font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-[10px] text-center">Before you make your move, let’s clear up the common questions. Here’s everything you need to know about getting started, managing your website, and making the most of WeHostify.</p>
        </div>
       <div className="w-full  mt-14 space-y-4 relative">
        
         {faqData.map((faq, index) => (
             <div key={index} className="border-[#909090] border-b-[1px] z-10 py-4 transition duration-300 "  >
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
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}

export default Faq
