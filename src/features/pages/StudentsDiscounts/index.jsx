import React from 'react'
import NavBar from '../../shared/NavBar'
import Footer from '../Home/components/Footer'
import { StudentDiscountProgram } from './components'
import WhatYouNeed from './components/WhatYouNeed'
import Steps from './components/Steps'
import WhyChooseUsAsStudent from './components/WhyChooseUsAsStudent'
import Faq from '../Home/components/Faq'
import StudentDiscountFaq from './components/StudentDiscountFaq'
import CircleAnimation from './components/AnimateCricleTest'
import StackedCircleAnimation from './components/AnimateCricleTest'
import StackedCircleAnimationWithImage from './components/AnimatedCircleWithImage'
import StackedCircleAnimationGrow from './components/AnimtedCircle'
import IntersectingCirclesAnimation from './components/IntersectingCircleAnimation'
import AnimatedCircleSteps from './components/AnimatedCircleSteps'

const StudentDiscount = () => {
   return (
    <>
       <div className="bg-[#F1F0EC] dark:bg-[#070712] pb-40 min-h-screen transition-colors duration-500  w-full">
         <NavBar/>
         <StudentDiscountProgram/>
         <WhatYouNeed/>
         {/* <AnimatedCircleSteps/> */}
         <Steps/>
         <WhyChooseUsAsStudent/>
         <StudentDiscountFaq/>
       </div>
       <Footer/>
       
    </>
  )
}

export default StudentDiscount