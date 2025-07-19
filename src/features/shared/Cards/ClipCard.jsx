import { Icons } from "../../../Icons"
import "./clipcard.css"

const ClipCard = () => {
  return (
    <div className=" flex  gap-8 items-center w-full">
      {/* <Icons.card/> */}
       <div className="card-ring dark:bg-[#18183A]">
          <div className="card" >
          <p className="text-[#FF6A00] font-semibold font-sans text-[41px]">01</p>
          <h3 className="text-[#130D08] dark:text-[#FFFFFF] font-semibold text-3xl font-sans ">Personal Agent</h3>
          <p className="font-medium text-[#616161] dark:text-[#EDEDED] font-sans text-xl pt-3">Get 24/7 direct and uninterrupted access to your personal agent</p>
          </div>
       </div>
      <div className="relative">
          <div className="ticket-card dark:bg-[#18183A]">
              <div className="card" >
              <h3 className="text-[#130D08] dark:text-[#FFFFFF]  font-semibold text-[32px] font-sans ">No Tickets</h3>
              <p className="font-medium text-[#616161] dark:text-[#EDEDED]  font-sans text-xl pt-3">No more endless ticket queues. Receive real-time support</p>
              <p className="text-[#FF6A00] font-semibold font-sans text-[41px]">02</p>
              </div>
            </div>
            <div className="fragment dark:bg-[#18183A] mt-4">
              
            </div>
      </div>
        {/* <div className="border-4 border-red-950">
            < img alt="w3schools" src="src/assets/cardBg.jpg" width="100" height="140"/>
        </div> */}
        {/* <div className="border-4 border-blue-500 h-64 w-80">
            <div className="box1 bg-[#1ca6f4] w-full h-full"></div>
        </div> */}
        {/* <div className="border-4 border-yellow-700 h-64 w-80 mt-4">
             <div className="box2 bg-[#91206f] w-full h-full "></div>
        </div> */}
         {/* <div className="border-4 border-black h-[200px] w-[200px] mt-4">
             <div className="box3 bg-[#912020] w-full h-full ">test</div>
        </div> */}
    </div>
  )
}

export default ClipCard