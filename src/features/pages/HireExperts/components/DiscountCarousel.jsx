import { disCountsLoop } from "../../../../data";

export const SpecialDiscountsLoop = ()=>{
     return (
    <>
      <div className="overflow-hidden relative mt-6 lg:mt-10 w-full">
                  <div className="no-scrollbar slide-container w-full">
                    <div className="slide-animation flex  gap-6 ">
                        {disCountsLoop.map((d, index) => (
                            <div key={`original-${index}`} className=" flex-shrink-0 w-[150px] lg:w-[320px]">
                            <img src={d.imgSrc} className='w-full h-auto '/>
                            </div>
                        ))}
                        {/* Optionally duplicate for infinite scroll */}
                        {disCountsLoop.map((d, index) => (
                            <div key={`duplicate-${index}`} className="flex-shrink-0 w-[150px] lg:w-[320px] ">
                            <img src={d.imgSrc} className=' w-full h-auto  '/>
                            </div>
                        ))}
                    </div>
                  </div>
        </div>
    </>
  );
}
