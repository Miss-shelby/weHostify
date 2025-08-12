import React from 'react'
import NavBar from '../../shared/NavBar'
import AboutHeroSection from '../About/components/AboutHeroSection'
import OurServices from '../About/components/OurServices'
import OurReviews from '../About/components/OurReview'
import JoinUs from '../About/components/HowtoJoin'
import Footer from '../Home/components/Footer'
import HireHeroSection from './components/HireHero'
import HowItWorks from './components/HowItWorks'
import WhatWeBuild from './components/WhatWeBuild'
import SpecialDiscounts from './SpecialDiscountMarquee'
import { WhyHireUs } from './components/WhyHireUs'

const HireExperts = () => {
  return (
    <>
       <div className="bg-[#F1F0EC] dark:bg-[#070712] pb-40 min-h-screen transition-colors duration-500  w-full">
         <NavBar/>
         <HireHeroSection/>
         <HowItWorks/>
         <WhatWeBuild/>
         <WhyHireUs/>
         <SpecialDiscounts/>
       </div>
       <Footer/>
       
    </>
  )
}

export default HireExperts