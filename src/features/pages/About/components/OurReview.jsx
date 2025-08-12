import { BGGRADIENT, LEFTDARKOVERLAY, LEFTWHITEOVERLAY, REVIEW, RIGHTDARKOVERLAY, RIGHTWHITEOVERLAY } from "../../../../constants/assetexports"
import { reviews } from "../../../../data"
import { ReviewCard } from "../../Home/components/Cards/ReviewCard"

const OurReviews = () => {
  return (
    <div className='xl:max-w-[1500px] lg:max-w-full md:max-w-[52rem]  mx-auto flex flex-col items-center justify-center pt-20 lg:pt-20  relative  px-6 md:px-4 lg:px-16'>
         <p className="text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">Meet Our Community</p>
        <p className="text-2xl leading-tight lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-2 text-center">Real People. Real Stories. Real Results.</p>
        <p className="text-lg  leading-tight sm:text-xl   font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2 text-center">WeHostify is built by and for the dreamers, creators, and entrepreneurs who are shaping <span className='lg:block'> the digital future.</span></p>
             <img className=' object-contain hidden lg:block absolute left-0 translate-x-[-30%]  z-0 top-[50%] right-60 opacity-40' src={BGGRADIENT} alt='Yellow gradient'/>
             <img className=' object-contain block lg:hidden absolute z-0 top-[50%] lg:w-[500px] right-[10%] opacity-60' src={BGGRADIENT} alt='Yellow gradient'/>
        <div className="mt-6">
            <img src={REVIEW}/>
        </div>
        <div className="overflow-hidden mt-6 lg:mt-10 w-full">
            <div  className="dark:hidden absolute left-0 top-[250px] w-full h-full bg-no-repeat bg-left bg-contain  pointer-events-none z-10" 
            style={{backgroundImage:`url(${LEFTWHITEOVERLAY})`}}>
            </div>
            {/* FOR DARK MODE  */}
                <div  className="hidden dark:block absolute left-0 top-[250px] w-full h-full bg-no-repeat bg-left bg-contain  pointer-events-none z-10" 
            style={{backgroundImage:`url(${LEFTDARKOVERLAY})`}}>
            </div>
            <div  className="dark:hidden absolute left-0 top-[250px] w-full h-full bg-no-repeat bg-right bg-contain  pointer-events-none z-10" 
            style={{backgroundImage:`url(${RIGHTWHITEOVERLAY})`}}>
                {/* FOR DARK MODE  */}
            <div  className="hidden dark:block absolute left-0 top-[250px] w-full h-full bg-no-repeat bg-left bg-contain  pointer-events-none z-10" 
            style={{backgroundImage:`url(${RIGHTDARKOVERLAY})`}}>
            </div>
            </div>
            <div className="no-scrollbar slide-container">
                        <div className="slide-animation flex  gap-6 ">
                            {reviews.slice(0,4).map((review, index) => (
                                <div key={`original-${index}`} className=" flex-shrink-0 w-[320px]">
                                <ReviewCard {...review} />
                                </div>
                            ))}
                            {/* Optionally duplicate for seamless scroll */}
                            {reviews.slice(0,4).map((review, index) => (
                                <div key={`duplicate-${index}`} className="flex-shrink-0 w-[320px] ">
                                <ReviewCard {...review} />
                                </div>
                            ))}
                        </div>
            </div>
        </div>
         {/* //second review section  */}
            <div className="overflow-hidden lg:hidden mt-6 w-full">
            <div className="no-scrollbar slide-container">
                <div className="slide-animation flex  gap-6 ">
                    {reviews.slice(4,8).map((review, index) => (
                        <div key={`original-${index}`} className=" flex-shrink-0 w-[320px]">
                        <ReviewCard {...review} />
                        </div>
                    ))}
                    {/* Optionally duplicate for seamless scroll */}
                    {reviews.slice(4,8).map((review, index) => (
                        <div key={`duplicate-${index}`} className="flex-shrink-0 w-[320px] ">
                        <ReviewCard {...review} />
                        </div>
                    ))}
                </div>
            </div>
           </div>
    </div>
  )
}

export default OurReviews