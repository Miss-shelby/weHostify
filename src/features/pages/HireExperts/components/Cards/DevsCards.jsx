import { AFRICANVECTOR, DEV1, DEV2, KOFIDEV } from '../../../../../constants/assetexports'

export const ExpertsCard = () => {
  return (
    <div className='bg-[#fff] dark:bg-[#18183A] w-[120px] xs:w-[155px] lg:w-[210px] rounded-[10.7px] lg:rounded-[29.6px] flex flex-col justify-center p-3  '>
        <button className='text-[8px] xs:text-xs w-fit lg:text-base flex items-center gap-2  text-[#130D08] dark:text-[#FFFFFF] font-sans font-medium bg-[#DEDEDE] 
        dark:bg-[#0F0F24] rounded-full px-1 lg:px-3 py-1'>
            <div className='flex relative'>
                <img className='h-5 w-5 lg:h-10 lg:w-10 object-contain' src={DEV1} alt='Dev 1'/>
                <img className='h-3 w-3 lg:h-5 lg:w-5 object-contain absolute bottom-0 right-0' src={DEV2} alt='Dev 2'/>
            </div>
           <span className='lg:pr-1'> DEVELOPERS</span></button>
           <p className='text-xs lg:text-lg mt-[20px] xs:mt-[30px] lg:mt-[60px] text-left text-[#130D08] font-semibold dark:text-[#FFFFFF]'>Hire Top
             <span className='text-[#FF6A00] dark:text-[#FF6A00] text-base block lg:text-xl'>Tech <span className='block lg:inline-flex'>Experts</span> </span></p>
    </div>

  )
}
export const TechTalentCard = () => {
  return (
    <div className='bg-[#FFDD00] w-[120px] xs:w-[150px] lg:w-[200px] rounded-[10.7px] lg:rounded-[29.6px] flex flex-col justify-center p-3  '>
        <button className='text-[10px] xs:text-xs lg:text-base flex items-center gap-1 lg:gap-2  text-[#130D08] font-sans font-semibold '>
            <div className=''>
                <img className='h-5 w-5 lg:h-10 lg:w-10 object-contain' src={AFRICANVECTOR} alt='Dev 1'/>
            </div>
           <span className='lg:pr-1'> Tech Talent!</span></button>
           <p className='text-xs lg:text-base mt-[20px] xs:mt-[30px] lg:mt-[60px] text-left text-[#130D08] font-semibold'>Top notch, 
            <span className=' block text-base lg:text-lg'>Reliable engineers!</span></p>
    </div>

  )
}

export const DevCard=({name,role,profileImg})=>{
    return(
        <>
        <div className='bg-[#FFFFFF] dark:bg-[#18183A] z-10 rounded-[5.7px] lg:rounded-[16px] w-[140px] lg:w-[205px] relative h-[53px] lg:h-[70px] flex flex-col '>
             <img className='h-10 lg:h-16 w-10 lg:w-[3.7rem] left-0 top-0 -translate-y-5 lg:-translate-y-7 -translate-x-2 absolute  object-contain' src={profileImg} alt='Dev 1'/>
            <p className='text-[#130D08] dark:text-[#fff] leading-5 font-medium font-sans text-sm lg:text-[17px] pt-2 lg:pt-4'>{name}
                 <span className='block text-[#616161] dark:text-[#EDEDED] text-sm lg:text-[15px] pt-0'>
                {role}</span></p>
        </div>
        </>
    )
}