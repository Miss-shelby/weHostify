import React from 'react'
import NavBar from '../../shared/NavBar'
import Footer from '../Home/components/Footer'
import Faq from '../Home/components/Faq'
import AboutHeroSection from './components/AboutHeroSection'
import OurServices from './components/OurServices'
import OurReviews from './components/OurReview'
import JoinUs from './components/HowtoJoin'

const AboutPage = () => {
  return (
    <>
    <div className="bg-[#F1F0EC] dark:bg-[#070712] pb-40 xl:pb-72 min-h-screen transition-colors duration-500  w-full">
      <NavBar/>
      <AboutHeroSection/>
     <OurServices/>
     <OurReviews/>
     <JoinUs/>
    </div>
    <Footer/>
    
    </>
  )
}

export default AboutPage