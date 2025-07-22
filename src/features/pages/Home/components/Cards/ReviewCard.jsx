import { MSGICON,  } from "../../../../../constants/assetexports"

export const ReviewCard =({customer,review,occupation,profileImg})=>{
    return (
        <div className="bg-[#FFFFFF] min-h-[250px]  max-w-[410px] dark:bg-[#18183A] px-5 rounded-[24px] py-6 overflow-hidden ">
            <img className=' pb-1' src={MSGICON} alt='icon'/>
            {/* <p className='text-2xl dark:text-[#FFFFFF] font-sans font-semibold text-[#130D08]'>{title}</p> */}
            <p className='text-base dark:text-[#EDEDED] break-words pt-2 font-sans font-medium text-[#616161] whitespace-normal'>{review}</p>
            <div className="flex mt-2 gap-2">
                <img className="h-12 w-12" src={profileImg} alt='customer-profile-image'/>
                <div className="">
                    <p className='text-[#130D08] dark:text-[#FFFFFF] text-base font-sans font-medium'>{customer}</p>
                    <p className='text-[#616161] dark:text-[#EDEDED]  text-sm font-sans font-light'>{occupation}</p>
                </div>
                
            </div>
        </div>
    )
}