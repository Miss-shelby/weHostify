export const FeaturesCard =({iconSrc,title,desc})=>{
    return (
        <div className="bg-[#FFFFFF] dark:bg-[#18183A] px-5 rounded-[30px] py-6 xl:w-[340px] lg:min-h-[250px]">
            <img className='h-9 w-8 ' src={iconSrc} alt='icon'/>
            <p className='text-2xl lg:text-2xl dark:text-[#FFFFFF] pt-5 lg:pt-2 font-sans font-semibold text-[#130D08]'>{title}</p>
            <p className='text-lg lg:text-lg dark:text-[#EDEDED] pt-2 font-sans font-medium text-[#616161]'>{desc}</p>
        </div>
    )
}