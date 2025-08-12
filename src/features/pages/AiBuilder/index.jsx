import React from 'react'
import NavBar from '../../shared/NavBar'
import Footer from '../Home/components/Footer'
import AiHeroSection from './components/AiHeroSection'
import KeyFeatures from './components/KeyFeatures'
import WebsitesTemplates from './components/WebsitesTemplates'
import WebsiteBuilderFaq from './components/WebsiteBuilderFaq'

const WebsiteBuilder = () => {
 return (
    <>
        <div className="bg-[#F1F0EC] dark:bg-[#070712] pb-40 min-h-screen transition-colors duration-500  w-full">
            <NavBar/>
            <AiHeroSection/>
            <KeyFeatures/>
            <WebsitesTemplates/>
            <WebsiteBuilderFaq/>
        </div>
        <Footer/>
        
        </>

    )
}

export default  WebsiteBuilder
