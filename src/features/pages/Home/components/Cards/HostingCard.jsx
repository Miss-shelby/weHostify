
import FancyButton from '../../../../shared/Buttons/FancyButton'
import { Icons } from '../../../../../Icons'
import Button from '../../../../shared/Button'

const HostingCard = ({name,desc,price,packages,isPopular}) => {
  // document.documentElement.classList.toggle('dark');

  const darkMode =  document.documentElement.classList
  console.log(darkMode,'mode here');
  
  return (
    <div className='flex flex-col  relative px-[22px] py-7 rounded-[20px] bg-[#FFFFFF] dark:bg-[#18183A]'>
      {
        isPopular && <div className="left-1/2 transform -translate-x-1/2  absolute top-[6px]">
          <Button title="Most Popular" textColor="text-[#130D08]" bgColor="bg-[#FFDD00]" extraClass="!font-semibold !text-sm font-sans !py-[10px] !px-[35px] text-center"/>
        </div>
      }
      <div className="w-full h-64 bg-container flex flex-col items-center  p-6 rounded-xl">
        <p className='text-[#130D08] dark:text-[#FFFFFF] font-bold text-xl  lg:text-2xl font-sans'>{name}</p>
        <p className='text-[#616161] dark:text-[#EDEDED] text-base lg:text-base font-medium font-sans pt-1 text-center'>{desc}</p>
        <p className='text-[#130D08] dark:text-[#EDEDED]  font-bold text-xl lg:text-2xl font-sans pt-2 text-center'>{price} <span className='font-medium text-sm'> Annually</span></p>
        <div className="mt-6">
            <FancyButton
                text="Choose Plan"
                bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)"
                textColor="#fff"
                conicColor="rgba(255, 221, 0, 0.5)"
                width="250px"
                height="48px"
                borderRadius="50px"
                animationSpeed="5s"
                onClick={() => console.log("Clicked!")}
            />
        </div>
      </div>
      <div className="pt-10 flex flex-col gap-6 ">
       {
        packages.map((p,idx)=>(
           <p key={idx} className='flex items-center text-[#130D08] dark:text-[#fff] text-sm lg:text-base font-sans gap-2'> 
           <span><Icons.checkMark/> </span>{p}</p>
        ))
       }
      </div>

    
    </div>
  )
}

export default HostingCard
