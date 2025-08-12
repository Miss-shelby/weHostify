import React from 'react'
import NavBar from '../../shared/NavBar'
import Footer from '../Home/components/Footer'
import ContactUs from './components/ContactUs'

const Contact = () => {
   return (
    <>
        <div className="bg-[#F1F0EC] dark:bg-[#070712]
         pb-40 min-h-screen transition-colors duration-500  w-full">
            <NavBar/>
           <ContactUs/>
        </div>
        <Footer/>
        
    </>

    )
}

export default Contact
