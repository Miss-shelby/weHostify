import React from 'react'
import { BGGRADIENT } from '../../../../constants/assetexports'
import useIsMobile from '../../../shared/utils/isMobile';
import FancyButton from '../../../shared/Buttons/FancyButton';
import { Icons } from '../../../../Icons';

const ContactUs = () => {
   return (
    <div className='relative overflow-x-clip'>
        <img className=' object-contain hidden lg:block w-[550px] absolute z-[0] 
                     right-0 translate-x-[10%] top-1/2  opacity-80' src={BGGRADIENT} alt='Yellow gradient'/>
        <img className=' object-contain hidden  lg:block absolute z-[0]   lg:-translate-x-[20%] lg:top-[99%] 
                       w-[500px] lg:left-[40%] bottom-0  opacity-60' src={BGGRADIENT} alt='Yellow gradient'/>
     <div className='xl:max-w-[1500px] pt-28 md:max-w-[52rem] lg:max-w-full    w-full  mx-auto flex flex-col items-center justify-center  relative  px-6 md:px-4  lg:px-16'>
         <div>
             <p className="text-base text-[#616161] text-center  dark:text-[#EDEDED] font-sans ">Contact Us</p>
             <p className="text-2xl leading-tight lg:text-3xl font-bold text-center font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0">Get in Touch with Us </p> 
             <p className="text-lg leading-tight lg:text-xl xl:max-w-4xl  text-center  mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2">At WeHostify, your questions, feedback, and ideas matter. Our customer support team is friendly, fast, and always ready to assist you 24/7. </p>
         </div>
         <img className=' object-contain hidden lg:block w-[550px] absolute z-[0] right-[30%] top-60  opacity-80' 
         src={BGGRADIENT} alt='Yellow gradient'/>
          <img className=' object-contain block lg:hidden w-[350px] absolute z-[0] right-[10%] top-[50%]  opacity-70' src={BGGRADIENT} alt='Yellow gradient'/>
         <div className='grid grid-cols md:grid-cols-3 w-full items-stretch gap-4 md:gap-6 lg:gap-8 mt-6 lg:mt-10'>
            <ContactCard Icon={Icons.phoneCall} tel="+2348123456789" title="Call us" desc="Mon-Fri from 8am to 5pm"/>
            <ContactCard Icon={Icons.mail} tel="support@wehostify.com" title="Send email" desc="We’re here to help"/>
            <ContactCard Icon={Icons.chat} tel="Available 24/7" title="Live chat" desc="Speak to our friendly team"/>
         </div>
          
          <MessageUs/>
         
     </div>

    </div>
   )
}

export default ContactUs
 const ContactCard =({Icon,title,desc,tel})=>{
    return (
        <div className="bg-[#FFFFFF] z-10 dark:bg-[#18183A] py-5 px-4 lg:py-6  lg:px-5 rounded-[16px] lg:rounded-[30px]  xl:w-full ">
            {/* <img className='h-9 w-8 ' src={iconSrc} alt='icon'/> */}
       
          {
            Icon &&  <Icon/>
          }
       
            <p className='text-2xl lg:text-2xl dark:text-[#FFFFFF] pt-3 lg:pt-6 font-sans font-semibold text-[#130D08]'>{title}</p>
            <p className='text-lg lg:text-lg dark:text-[#EDEDED] pt-4 lg:pt-3 font-sans font-medium text-[#616161]'>{desc}</p>
            <p className='text-lg underline dark:text-[#FFFFFF] cursor-pointer pt-2 lg:pt-3 font-sans font-medium text-[#130D08]'>{tel}</p>
                
        </div>
    )
}

const MessageUs=()=>{
    const isMobile = useIsMobile();
    return (
        <div className='pt-20 w-full relative '>
            <p className="text-base text-[#616161] z-10 text-center  dark:text-[#EDEDED] font-sans ">Send Us a Message</p>
             <p className="text-2xl z-10 leading-tight lg:text-3xl font-bold text-center font-sans text-[#130D08] dark:text-[#fff] pt-1 lg:pt-0">We’d Love to Hear From You </p> 
             <p className="text-lg z-10 leading-tight lg:text-xl xl:max-w-4xl  text-center  mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 lg:pt-2">Fill out the contact form below, and one of our support agents will get back to you shortly. </p>
             <div className='flex flex-col gap-4 lg:gap-10 mt-6 lg:mt-10 w-full'>
                <div className='flex w-full gap-3 lg:gap-9 justify-between'>
                   <div className='flex-1'>
                       <InputField title="First Name"/>
                   </div>
                   <div className='flex-1'>
                       <InputField title="Last Name"/>
                   </div>
                </div>
                <div className='w-full'>
                       <InputField title="Email Address"/>
                   </div>
                    
                <div className='w-full'>
                    <InputField title="Subject"/>
                </div>
                <div className='w-full'>
                    <TextField title="Message"/>
                </div>
             </div>
             <img className=' object-contain hidden lg:block w-[500px] translate-y-52 absolute z-[0] left-0 
             translate-x-[-40%] bottom-0  opacity-60' src={BGGRADIENT} alt='Yellow gradient'/>
             <div className='flex justify-center md:justify-end mt-8 lg:mt-14'>
             <FancyButton extraClass="" 
              text="Send Message" bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                 bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)" textColor="#fff"
                 conicColor="rgba(255, 221, 0, 0.5)" width={isMobile?"300px":"350px"}
                 height="55px" borderRadius="50px" animationSpeed="5s" onClick={() => alert("Clicked!")}/>
          </div>
        </div>
    )
}

const InputField =({title})=>{
    return(
        <label className='block text-[#130D08] z-10 text-lg font-sans font-medium dark:text-[#FFFFFF]'>
            {title}
            <input className='w-full bg-transparent outline-none border-[1.55px] lg:mt-4 border-[#909090] h-[45px] sm:h-[65px] rounded-[16px] lg:rounded-[20px]' type='text'/>
        </label>
    )
}

const TextField =({title})=>{
    return(
        <label className='block text-[#130D08] text-lg font-sans font-medium dark:text-[#FFFFFF]'>
            {title}
            <textarea rows="8" className='w-full hidden sm:block bg-transparent outline-none border-[1.55px] lg:mt-4 border-[#909090]  rounded-[16px] lg:rounded-[20px]'></textarea>
             <textarea rows="4" className='w-full block sm:hidden bg-transparent outline-none border-[1.55px] lg:mt-4 border-[#909090]  rounded-[16px] lg:rounded-[20px]'></textarea>
        </label>
    )
}