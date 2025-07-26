import ClipCard from "../../shared/Cards/ClipCard"
import NavBar from "../../shared/NavBar"
import AIWebsiteBuilder from "./components/AiWebsiteBuilder"
import Empowerment from "./components/Empowerment"
import Faq from "./components/Faq"
import Features from "./components/Features"
import FlexiblePayment from "./components/FlexiblePayment"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import HostingAgents from "./components/HostingAgents"
import HostingPlans from "./components/HostingPlans"
import ReferralProgram from "./components/Referral"
import Reviews from "./components/Reviews"

const HomePage = () => {
  return (
    <>
    <div className="bg-[#F1F0EC] dark:bg-[#070712] pb-40 min-h-screen transition-colors duration-500  w-full">
      <NavBar/>
      <HeroSection/>
      <HostingPlans/>
     <HostingAgents/>
     <Empowerment/>
     {/* <Hero/> */}
     <FlexiblePayment/>
     <ReferralProgram/>
     <AIWebsiteBuilder/>
     <Features/>
     <Reviews/>
     <Faq/>
    </div>
    <Footer/>
    </>
  )
}

export default HomePage