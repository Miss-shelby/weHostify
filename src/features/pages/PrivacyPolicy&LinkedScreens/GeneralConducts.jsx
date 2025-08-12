import { Link, useLocation } from "react-router"
import NavBar from "../../shared/NavBar"
import Footer from "../Home/components/Footer"
import { privacyScreens } from "../../../data"
import { BGGRADIENT } from "../../../constants/assetexports"

const GeneralConduct = () => {
  
 return (
    <>
        <div className="bg-[#f5eaa4]   dark:bg-[#f5eaa4]   transition-colors duration-500 pb-20   w-full">
            <NavBar yellowBg={true}/>
            <Header/>
        </div>
         <div className="bg-[#F1F0EC] z-0 dark:bg-[#070712]  min-h-screen transition-colors duration-500  w-full">
            <Wrapper/>
         </div>
        <Footer/>
        
    </>
 )
}

export default GeneralConduct
const Header =()=>{
    return (
        <div className="xl:max-w-[1500px] z-0 pt-28 md:max-w-[52rem] lg:max-w-full    w-full  mx-auto flex flex-col items-center justify-center  relative  px-6 md:px-4  lg:px-16">
            <p className="text-4xl text-[#130D08]  font-semibold font-sans">General Conduct & Acceptable Use</p>
            <p className="text-lg text-[#130D08]  font-medium lg:pt-3 font-sans">Last Updated: <span className="text-[#616161]">16-06-2025</span></p>
            <p  className="text-base pt-14 text-[#130D08]  font-sans">This agreement contains important information regarding your legal rights and remedies. Please read carefully</p>
        </div>
    )
}
const Wrapper =()=>{
     const location = useLocation();
    return (
        <div className="relative w-full overflow-hidden pb-40">
        <div className="xl:max-w-[1500px] pt-6 lg:pt-10 md:max-w-[52rem] lg:max-w-full   w-full  mx-auto flex flex-col items-center justify-center  relative  px-6 md:px-4  lg:px-16">
            <img className=' object-contain  lg:block absolute z-0 top-24 -translate-y-24 lg:top-[0%] lg:w-[500px] lg:right-[34%] opacity-60' src={BGGRADIENT} alt='Yellow gradient'/>
            <div className="flex flex-col gap-5 lg:flex-row items-start w-full ">
                    <ul className="flex flex-col gap-5 lg:gap-5 lg:w-[30%]">
                    {
                        privacyScreens.map((screen,idx)=>(
                            <Link to={screen.path} key={idx}
                             className={` cursor-pointer ${location.pathname === screen.path?"text-[#130D08] font-semibold" :"text-[#616161] font-medium text-base"}  dark:text-[#FFFFFF]   font-sans`}>{screen.title}</Link>
                        ))
                    }
                </ul>
                <div className="w-full lg:w-[65%] z-10">
                    <p className="text-base lg:text-lg cursor-pointer text-[#130D08] dark:text-[#FFFFFF] lg:font-medium  font-sans">At WeHostify, our mission is to provide reliable, accessible, and human-friendly hosting services. These policies are designed to protect our customers, support team, and the WeHostify platform. By using our services, you agree to follow the policies outlined below.</p>

                    {/* section 1 */}
                    <div className="section1 pt-16">
                        <p className="text-xl lg:text-[28px]  text-[#130D08] dark:text-[#FFFFFF] lg:font-medium  font-sans">1. Information We Collect</p>
                        <p className="text-base lg:text-lg pt-6 text-[#130D08] dark:text-[#FFFFFF] font-medium  font-sans">We collect the following types of information:</p>
                        <div className="sub-section pt-6">
                            <p className="text-base lg:text-lg  text-[#130D08] dark:text-[#FFFFFF] font-medium  font-sans">a. Personal Information</p>
                            <p className="text-base lg:text-lg pt-6 text-[#616161]  dark:text-[#FFFFFF]  lg:font-medium  font-sans">  When you register or purchase a service, we may collect:</p>
                            <ul className="text-base lg:text-lg text-[#616161] pl-7 dark:text-[#EDEDED] list-disc lg:font-medium  font-sans">
                                <li>Your name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Billing address</li>
                                <li>Payment information</li>
                            </ul>
                        </div>
                         <div className="sub-section pt-6">
                            <p className="text-base lg:text-lg  text-[#130D08] dark:text-[#FFFFFF] font-medium  font-sans">b. Technical & Usage Information</p>
                            <p className="text-base lg:text-lg pt-6 text-[#616161]  dark:text-[#FFFFFF]  lg:font-medium  font-sans"> Automatically collected when you use our platform:</p>
                            <ul className="text-base lg:text-lg text-[#616161] pl-7 dark:text-[#EDEDED] list-disc lg:font-medium  font-sans">
                                <li>IP address</li>
                                <li>Browser type and version</li>
                                <li>Device type</li>
                                <li>Pages visited and time spent</li>
                                <li>Login timestamps</li>
                            </ul>
                        </div>
                        <div className="sub-section pt-6">
                            <p className="text-base lg:text-lg  text-[#130D08] dark:text-[#FFFFFF] font-medium  font-sans">c. Communications</p>
                            <p className="text-base lg:text-lg pt-6 text-[#616161]  dark:text-[#FFFFFF]  lg:font-medium  font-sans"> We may store messages or support conversations, including interactions with your assigned support agent.</p>
                        </div>
                    </div>
                    {/* section 2  */}
                    <div className="section2 pt-10">
                        <p className="text-xl lg:text-[28px]  text-[#130D08] dark:text-[#FFFFFF] lg:font-medium  font-sans">2. How We Use Your Information</p>
                        <p className="text-base lg:text-lg pt-6 text-[#130D08] dark:text-[#FFFFFF] font-medium  font-sans">We use your information to:</p>
                        <div className="sub-section pt-6">
                            <ul className="text-base lg:text-lg text-[#616161] pl-7 dark:text-[#EDEDED] list-disc lg:font-medium  font-sans">
                                <li>Provide and maintain your hosting services</li>
                                <li>Process payments and invoices</li>
                                <li>Offer technical and customer support</li>
                                <li>Improve our website, features, and services</li>
                                <li>Communicate service updates and promotional offers (you may opt-out anytime)</li>
                                <li>Enforce terms and protect against fraud or misuse</li>
                            </ul>
                        </div>
                        
                        
                    </div>
                    {/* section 3 */}
                     <div className="section3 pt-10">
                        <p className="text-xl lg:text-[28px]  text-[#130D08] dark:text-[#FFFFFF] lg:font-medium  font-sans">3. Sharing Your Information</p>
                        <div className="sub-section pt-6">
                             <p className="text-base lg:text-lg  text-[#616161]  dark:text-[#FFFFFF]  lg:font-medium  font-sans"> We do not sell your personal information. We may share your data only with:</p>
                            <ul className="text-base lg:text-lg text-[#616161] pl-7 dark:text-[#EDEDED] list-disc lg:font-medium  font-sans">
                                <li>Trusted third-party service providers (e.g. payment gateways, analytics tools)</li>
                                <li>Legal authorities if required by law or to protect our legal rights</li>
                                <li>Business partners with whom you engage through referrals or special offers (with consent)</li>
                            </ul>
                        </div>
                        
                        
                    </div>
                    {/* section 4*/}
                    <div className="section4 pt-10">
                        <p className="text-xl lg:text-[28px]  text-[#130D08] dark:text-[#FFFFFF] lg:font-medium  font-sans">4. Data Retention</p>
                        <div className="sub-section pt-6">
                             <p className="text-base lg:text-lg  text-[#616161]  dark:text-[#FFFFFF]  lg:font-medium  font-sans"> We retain your data for as long as your account is active or as needed to provide our services. You may request deletion of your data, subject to our legal and administrative obligations.</p>
                        </div>
                    </div>
                     {/* section 5*/}
                    <div className="section-5 pt-10">
                        <p className="text-xl lg:text-[28px]  text-[#130D08] dark:text-[#FFFFFF] lg:font-medium  font-sans">5. Cookies & Tracking Technologies</p>
                        <div className="sub-section pt-6">
                             <p className="text-base lg:text-lg  text-[#616161]  dark:text-[#FFFFFF]  lg:font-medium  font-sans"> We use cookies and similar technologies to:</p>
                            <ul className="text-base lg:text-lg text-[#616161] pl-7 dark:text-[#EDEDED] list-disc lg:font-medium  font-sans">
                                <li>Keep you logged in</li>
                                <li>Track site usage for analytics</li>
                                <li>Personalize your experience</li>
                            </ul>
                             <p className="text-base lg:text-lg  text-[#616161]  dark:text-[#FFFFFF]  lg:font-medium  font-sans">You can control or disable cookies in your browser settings, but some features may not function correctly.</p>
                        </div>
                        
                        
                    </div>

                     {/* section 6*/}
                    <div className="section-6 pt-10">
                        <p className="text-xl lg:text-[28px]  text-[#130D08] dark:text-[#FFFFFF] lg:font-medium  font-sans">6. Your Privacy Rights</p>
                        <div className="sub-section pt-6">
                             <p className="text-base lg:text-lg  text-[#616161]  dark:text-[#FFFFFF]  lg:font-medium  font-sans"> Depending on your location, you may have the right to:</p>
                            <ul className="text-base lg:text-lg text-[#616161] pl-7 dark:text-[#EDEDED] list-disc lg:font-medium  font-sans">
                                <li>Access, correct, or delete your personal data</li>
                                <li>Withdraw consent to data processing</li>
                                <li>Request data portability</li>
                                <li>Object to certain data uses</li>
                            </ul>
                             <p className="text-base lg:text-lg  text-[#616161]  dark:text-[#FFFFFF]  lg:font-medium  font-sans">To exercise any of these rights, contact us at <span className="text-[#130D08]"> privacy@wehostify.com.. </span></p>
                        </div>
                        
                        
                    </div>
                    
                      {/* section 7*/}
                    <div className="section-7 pt-10">
                        <p className="text-xl lg:text-[28px]  text-[#130D08] dark:text-[#FFFFFF] lg:font-medium  font-sans">7. Data Security</p>
                        <div className="sub-section pt-6">
                             <p className="text-base lg:text-lg  text-[#616161]  dark:text-[#FFFFFF]  lg:font-medium  font-sans"> We take your data seriously. Our servers use SSL encryption and secure infrastructure. We regularly monitor and update our systems to prevent unauthorized access or data breaches.</p>
                        </div>
                    </div>
                     {/* section 8*/}
                    <div className="section-8 pt-10">
                        <p className="text-xl lg:text-[28px]  text-[#130D08] dark:text-[#FFFFFF] lg:font-medium  font-sans">8. Children’s Privacy</p>
                        <div className="sub-section pt-6">
                             <p className="text-base lg:text-lg  text-[#616161]  dark:text-[#FFFFFF]  lg:font-medium  font-sans"> WeHostify’s services are not intended for children under the age of 13. We do not knowingly collect personal information from children..</p>
                        </div>
                    </div>
                     {/* section 9*/}
                    <div className="section-9 pt-10">
                        <p className="text-xl lg:text-[28px]  text-[#130D08] dark:text-[#FFFFFF] lg:font-medium  font-sans">9. Policy Updates</p>
                        <div className="sub-section pt-6">
                             <p className="text-base lg:text-lg  text-[#616161]  dark:text-[#FFFFFF]  lg:font-medium  font-sans"> We may update this Privacy Policy from time to time. We will notify you of any significant changes by email or via our website.</p>
                        </div>
                    </div>
                     {/* section 10*/}
                    <div className="section-10 pt-10">
                        <p className="text-xl lg:text-[28px]  text-[#130D08] dark:text-[#FFFFFF] lg:font-medium  font-sans">10. Contact Us</p>
                        <div className="sub-section pt-6">
                             <p className="text-base lg:text-lg  text-[#616161]  dark:text-[#FFFFFF]  lg:font-medium  font-sans"> If you have any questions or concerns about this policy, reach out to:</p>
                             <p className="text-base lg:text-lg  text-[#616161]  dark:text-[#FFFFFF]  lg:font-medium  font-sans"> Email: <span className="text-[#130D08]">privacy@wehostify.com </span></p> 
                             <p className="text-base lg:text-lg  text-[#616161]  dark:text-[#FFFFFF]  lg:font-medium  font-sans">Address: <span className="text-[#130D08]">Abuja Estate, Awka </span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
             <img className=' object-contain translate-x-[20%] w-[350px]  lg:block absolute z-0 top-[42%] right-0  -translate-y-24 lg:translate-x-[20%] lg:top-[23%] lg:w-[500px] lg:right-[0%] opacity-60' src={BGGRADIENT} alt='Yellow gradient'/>
             <img className=' object-contain  lg:block absolute left-1/4 z-0 w-[350px] top-[70%] -translate-y-24 lg:-translate-x-[20%] lg:top-[36%] lg:w-[500px] lg:left-[0%] opacity-60' src={BGGRADIENT} alt='Yellow gradient'/>
              <img className=' object-contain hidden  lg:block absolute z-0 top-24 -translate-y-24  lg:top-[74%] lg:w-[500px] lg:right-[20%] opacity-60' src={BGGRADIENT} alt='Yellow gradient'/>
              <img className=' object-contain hidden  lg:block absolute z-0 top-24  lg:-translate-x-[20%] lg:top-[90%]  lg:w-[500px] lg:left-[0%] opacity-60' src={BGGRADIENT} alt='Yellow gradient'/>
        </div>
    )
}