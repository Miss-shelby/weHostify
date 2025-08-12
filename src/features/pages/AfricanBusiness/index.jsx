import NavBar from "../../shared/NavBar"
import Footer from "../Home/components/Footer"
import AfricanBusinessFaq from "./components/AficanBusinessFaq"
import EmpowerAfricanBusiness from "./components/EmpowerAfricanBusiness"
import SpecialBenefits from "./components/SpecialBenefits"
import Support from "./components/Support"
import WhatYouGet from "./components/WhatYouget"

const AfricanBusiness = () => {
    return (
    <>
        <div className="bg-[#F1F0EC] dark:bg-[#070712] pb-40 min-h-screen transition-colors duration-500  w-full">
            <NavBar/>
            <EmpowerAfricanBusiness/>
            <SpecialBenefits/>
            <WhatYouGet/>
            <Support/>
            <AfricanBusinessFaq/>
        </div>
        <Footer/>
        
        </>

    )
}

export default AfricanBusiness