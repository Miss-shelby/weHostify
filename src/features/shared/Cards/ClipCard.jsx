import { Icons } from "../../../Icons"
import "./clipcard.css"


export const FancyClipCard =({title,number,description,clipPath,width = "360px",height = "281px",extraClass})=>{
     const cardStyleVars = {
    "--card-path": `path("${clipPath}")`,
    "--card-width": width,
    "--card-height": height,
  };

  return (
    <div className={`relative card-wrapper w-full ${extraClass}`}style={cardStyleVars}>
      <div className="card-ring dark:bg-[#18183A]"></div>
      <div className="card-inner dark:bg-[#18183A]">
        <p className="text-[#FF6A00] font-semibold font-sans text-3xl lg:text-[41px] ">
          {number}
        </p>
        <h3 className="text-[#130D08] dark:text-[#FFFFFF] font-semibold text-xl lg:text-3xl font-sans mt-3 lg:mt-6">
          {title}
        </h3>
        <p className="font-medium text-[#616161] dark:text-[#EDEDED] font-sans text-sm lg:text-xl pt-3">
          {description}
        </p>
      </div>
    </div>
  );
}
export const FancyClipCardTwo =({title,number,description,clipPath,width = "360px",height = "281px",extraClass,fragmentPath,fragmentWidth="204px",fragmentHeight="62px",top="220px",right="-10px"})=>{
     const cardStyleVars = {
    "--card-path": `path("${clipPath}")`,
    "--card-width": width,
    "--card-height": height,
  };
    const fragmentCardStyleVars = {
    "--fragment-card-path": `path("${fragmentPath}")`,
    "--fragment-card-width": fragmentWidth,
    "--fragment-card-height": fragmentHeight,
  };

  return (
    <div className="relative wrapper w-full">
      <div className={`card-wrapper w-full ${extraClass}`}style={cardStyleVars}>
        <div className="card-ring-two dark:bg-[#18183A]"></div>
        <div className="card-inner flex flex-col dark:bg-[#18183A]">
          <h3 className="text-[#130D08] dark:text-[#FFFFFF]  font-semibold text-xl lg:text-3xl  font-sans ">{title}</h3>
          <p className="font-medium text-[#616161] dark:text-[#EDEDED]  font-sans text-sm lg:text-xl pt-3">{description}</p>
          <p className="text-[#FF6A00] mt-10 lg:mt-20 font-semibold font-sans text-3xl lg:text-[41px] ">
            {number}
          </p>
        </div>
      </div>
       <div  style={{ top: top, right: right }} className={`absolute  p-0`}>
          <div className="fragment-wrapper relative w-full" style={fragmentCardStyleVars}>
          <div className="fragment dark:bg-[#18183A] "></div>
          <div className="fragment-inner dark:bg-[#18183A]">
            <p></p>
          </div>
      </div>
       </div>
    </div>
  );
}
const TestClipCard = () => {

  
  return (
    <>
    <div className=" flex gap-8 items-center w-full">
      {/* <Icons.card/> */}
      
     
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

      {/* original before reusbale component  */}
      <div className="relative card-wrapper w-full">
       <div className="card-ring dark:bg-[#18183A]">
          </div>
          <div className="card-inner dark:bg-[#18183A]" >
          <p className="text-[#FF6A00] font-semibold font-sans text-[41px]">01</p>
          <h3 className="text-[#130D08] dark:text-[#FFFFFF] font-semibold text-3xl font-sans ">Personal Agent</h3>
          <p className="font-medium text-[#616161] dark:text-[#EDEDED] font-sans text-xl pt-3">Get 24/7 direct and uninterrupted access to your personal agent</p>
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
    </>
  )
}

export default TestClipCard