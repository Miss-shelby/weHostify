
import { BGGRADIENT,GIFTBOX, } from '../../../../constants/assetexports'
import FancyButton from '../../../shared/Buttons/FancyButton'
import { Icons } from '../../../../Icons'

const HowItWorks = () => {
  return (
    <div className="relative overflow-hidden">
        <div className='xl:max-w-[1500px] lg:max-w-full md:max-w-3xl   mx-auto flex flex-col items-center justify-center pt-20 lg:pt-20 relative  px-6 lg:px-16'>
             <img className=' object-contain hidden lg:block absolute opacity-65 w-[300px] 
             lg:w-[500px] lg:opacity-70 z-[0] right-0  
              lg:right-0 transform lg:translate-x-[30%] top-0 lg:top-0 translate-y-36' src={BGGRADIENT} alt='Yellow gradient'/>
            <div className="w-full z-20">
                <p className="text-base sm:text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">How It Works</p>
                <p className="text-2xl leading-tight lg:text-3xl font-bold font-sans text-[#130D08] dark:text-[#fff] pt-1 text-center">From Idea to Launch — In Just Three Steps</p>
                <div className="">
                    <p className="text-lg leading-tight sm:text-xl lg:max-w-3xl mx-auto font-sans font-medium text-[#616161] dark:text-[#EDEDED] pt-3 sm:pt-2 text-center">We’ve simplified the process to get your idea off the ground fast. Whether it’s a website, 
                        <span className=''> app, or digital platform, you’ll move from vision to reality with clarity and support every step of the way.</span> </p>
                  <div className="grid relative lg:grid-cols-5 mt-6 lg:mt-10">
                    <div className="flex flex-col items-center justify-center">
                        <Icons.vision/>
                        <p className='text-xl md:text-center font-sans py-3 dark:text-[#FFFFFF] font-bold text-[#130D08] '>Share Your Vision</p>
                        <p className='text-lg text-[#616161] dark:text-[#EDEDED] text-center  font-sans font-medium'>Tell us what digital product you want to build using a quick form.<span className='sm:block'> </span></p>
                          <div className="block lg:hidden my-2">
                             <Icons.curveArrowMobile/>
                         </div>
                    </div>
                    <div className="hidden lg:block">
                        <Icons.curveArrow/>
                    </div>
                     <div className="flex flex-col items-center justify-center">
                        <Icons.quote/>
                        <p className='text-xl md:text-center font-sans py-3 font-bold text-[#130D08] dark:text-[#FFFFFF] '>Get a Custom Quote</p>
                        <p className='text-lg text-[#616161] text-center dark:text-[#EDEDED]  font-sans font-medium'>We review your needs, offer solutions, and provide pricing. <span className='sm:block'>  </span></p>
                        <div className="lg:hidden block my-2">
                         <Icons.curverrowMobile2/>
                    </div>
                    </div>
                    <img className=' object-contain hidden absolute opacity-50 sm:hidden z-[0] left-1/3 transform -translate-x-1/2 top-[450px]' src={BGGRADIENT} alt='Yellow gradient'/>
                    <div className="hidden lg:block">
                         <Icons.curveArrow2/>
                    </div>
                     
                     <div className="flex flex-col items-center relative justify-center">
                       
                        <Icons.build/>
                        <p className='text-xl font-sans py-3 md:text-center font-bold text-[#130D08] dark:text-[#FFFFFF]'>We Build & Deliver</p>
                        <p className='text-lg text-[#616161] text-center dark:text-[#EDEDED]  font-sans font-medium'>Our expert team handles the entire process, from design to deployment.  <span className='sm:block'>   </span></p>
                    </div>
                  </div>
                   <div className="mt-6 lg:mt-10 flex flex-col items-center justify-center">
                        <FancyButton
                        text="Fill Out Project Form"
                        bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                        bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)"
                        textColor="#fff"
                        conicColor="rgba(255, 221, 0, 0.5)"
                        width="400px"
                        height="52px"
                        borderRadius="50px"
                        animationSpeed="5s"
                        onClick={() => console.log("Clicked!")}/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default HowItWorks