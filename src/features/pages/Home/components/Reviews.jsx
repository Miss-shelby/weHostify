import { BGGRADIENT, LEFTDARKOVERLAY, LEFTWHITEOVERLAY, RIGHTDARKOVERLAY, RIGHTWHITEOVERLAY } from "../../../../constants/assetexports"
import { reviews } from "../../../../data"
import { ReviewCard } from "./Cards/ReviewCard"

const Reviews = () => {
  return (
    <div className='xl:max-w-[1500px]   mx-auto flex flex-col items-center justify-center pt-20 lg:pt-28  relative  px-6 lg:px-16'>
         <p className="text-base sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">What Our Users Are Saying</p>
        <p className="text-2xl leading-tight lg:text-[32px] font-bold font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-2 text-center">Loved by Creators, Businesses & Organizations Alike</p>
        <p className="text-lg leading-tight sm:text-xl   font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2 text-center">We want to build trust with you through real stories and experiences from happy <span className='lg:block'>  customers.</span></p>
             <img className=' object-contain hidden lg:block absolute z-20 top-28 right-60 opacity-40' src={BGGRADIENT} alt='Yellow gradient'/>
             <img className=' object-contain absolute z-0 bottom-0 right-60 opacity-40' src={BGGRADIENT} alt='Yellow gradient'/>
           <div className="overflow-hidden mt-6 lg:mt-10 w-full">
             {/* Left fade overlay */}
                {/* <div className="absolute left-0 top-0 h-full w-40 pointer-events-none z-10 "
                    style={{
                        background: 'radial-gradient(ellipse at left center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)' }}>
                </div> */}
                <div  className="dark:hidden absolute left-0 top-0 w-full h-full bg-no-repeat bg-left bg-contain  pointer-events-none z-10" 
                style={{backgroundImage:`url(${LEFTWHITEOVERLAY})`}}>
                </div>
                {/* FOR DARK MODE  */}
                 <div  className="hidden dark:block absolute left-0 top-0 w-full h-full bg-no-repeat bg-left bg-contain  pointer-events-none z-10" 
                style={{backgroundImage:`url(${LEFTDARKOVERLAY})`}}>
                </div>
                {/* Right fade overlay */}
                {/* <div className="absolute right-0 top-0 h-full  w-40 pointer-events-none z-10"
                    style={{
                        background: 'radial-gradient(ellipse at left center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)',
                        transform: 'rotate(180deg)', // Flip the gradient for the right side
                    }}
                ></div> */}
                <div  className="dark:hidden absolute left-0 top-0 w-full h-full bg-no-repeat bg-right bg-contain  pointer-events-none z-10" 
                style={{backgroundImage:`url(${RIGHTWHITEOVERLAY})`}}>
                    {/* FOR DARK MODE  */}
                <div  className="hidden dark:block absolute left-0 top-0 w-full h-full bg-no-repeat bg-left bg-contain  pointer-events-none z-10" 
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
            <div className="overflow-hidden mt-6 w-full">
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

export default Reviews
