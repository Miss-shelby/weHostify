
import { BGGRADIENT, HOSTINGAGENT } from '../../../../constants/assetexports'
import FancyButton from '../../../shared/Buttons/FancyButton'
import ClipCard from '../../../shared/Cards/ClipCard'

const HostingAgents = () => {
  return (
    <div className='xl:max-w-[1500px]  mx-auto flex flex-col items-center justify-center pt-32 relative pb-10 px-6 lg:px-16'>
        <img className=' object-contain absolute z-[0] top-0 opacity-45' src={BGGRADIENT} alt='Yellow gardient'/>
        <div className="w-full z-20">
            <p className="text-base text-[#616161] dark:text-[#EDEDED] font-sans text-center">More Hosting, More Care.</p>
            <p className="text-xl lg:text-3xl font-bold text-[#130D08] dark:text-[#fff] pt-2 text-center">Your 24/7 Personal Hosting Agent</p>
            <p className="text-xl font-sans  font-medium text-[#616161] dark:text-[#EDEDED] pt-3 text-center"> Once you subscribe to more than one hosting plan, or upgrade to the <span className="lg:block">Platinum Plan, you can skip the ticket system. Get assigned to a </span> <span className='lg:block'>dedicated WeHostify agent.</span></p>
            <div className="flex flex-col lg:flex-row w-full pt-10 items-start justify-between">
                <div className="w-full">
                    <img className=' object-contain  w-full lg:w-[546px]' src={HOSTINGAGENT} alt='Hosting/customer care agent'/>
                </div>
                <ClipCard/>
            </div>
            <div className="mt-10 flex flex-col items-center justify-center">
                <FancyButton
                text="Upgrade to Platinum"
                bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)"
                textColor="#fff"
                conicColor="rgba(255, 221, 0, 0.5)"
                width="400px"
                height="48px"
                borderRadius="50px"
                animationSpeed="5s"
                onClick={() => console.log("Clicked!")}/>
            </div>
        </div>
    </div>
  )
}

export default HostingAgents