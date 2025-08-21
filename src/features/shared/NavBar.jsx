/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { BGGRADIENT, FLAG, LIGHTMODE, LOGO, NIGHTMODE } from '../../constants/assetexports'
import { navLinks } from '../../data'
import Button from './Button'
import FancyButton from './Buttons/FancyButton'
import { Icons } from '../../Icons'
import {motion, AnimatePresence} from 'framer-motion'
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link,useLocation } from 'react-router'
import useIsMobile from './utils/isMobile'


const NavBar = ({yellowBg=false}) => {
  const [darkMode,setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);
const isMobile = useIsMobile()

const menuRef = useRef(null);

  useEffect(() => {
    if (!menuRef.current) return;

    let scrollTimeout;
    const menu = menuRef.current;

    const handleScroll = () => {
      menu.classList.add("scrolling");
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        menu.classList.remove("scrolling");
      }, 1000); // hide after 1 second of no scroll
    };

    menu.addEventListener("scroll", handleScroll);
    return () => menu.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkmode = ()=>{
    document.documentElement.classList.toggle('dark');
   setDarkMode((prev) => !prev);
  }
  const location = useLocation();


  return (
    <div className={`w-full h-[70px] ${yellowBg?"bg-[#f5eaa4] dark:bg-[#f5eaa4] " :"bg-[#F1F0EC] dark:bg-[#070712]"}  z-[99999]  fixed top-0 left-0 `}>
      <div className=" flex items-start justify-between py-4  xl:max-w-[1500px] w-full  mx-auto px-6 xl:px-14" >
        <Link to="/" className="">
           <img src={LOGO} alt='logo'/>
        </Link>
        
          <div className="hidden xl:flex gap-6">
            <ul className=' flex items-center  font-medium text-xs cursor-pointer font-sans gap-3 '>
                {
                  navLinks.map((nav,idx)=>(
                    <li className='navMenu' key={idx}>
                        <Link to={nav.path} className={` ${location.pathname == nav.path ?"active":"" } 
                        flex menu group items-center gap-2 text-[#130D08] ${yellowBg ? "dark:text-[#130D08]":"dark:text-[#fff]"}  `}
                        key={idx}>{nav.title} <span className=''> {nav.dropDown && (
                        darkMode? <Icons.dropdownDarkMode className={`${yellowBg?"fill-[#130D08]" :"fill-white"}`}/>  : 
                          <Icons.dropdownLightMode className="fill-[#130D08] "/>
                        )} </span></Link>
                         <div className={`dot ${location.pathname === nav.path ? "dot-active" : ""}`}></div>
                      </li>
                      
                  ))
                }
               
         
            <p className={`text-[#130D08] ${yellowBg?"dark:text-[#130D08]":"dark:text-[#fff]"}  flex items-center gap-[6px] font-medium text-base cursor-pointer font-sans`}>
              <span><img className='object-contain h-[21px] w-[32px]' src={FLAG} alt='USA Flag'/></span>
              English</p>
            </ul>
              <img onClick={toggleDarkmode} className='object-contain cursor-pointer px-2'
               src={ darkMode ? LIGHTMODE :  NIGHTMODE } alt='Night mode'/>
            <div >
              <FancyButton
                text="Login"
                bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)"
                textColor="#fff"
                conicColor="rgba(255, 221, 0, 0.5)"
                width="100px"
                height="48px"
                borderRadius="50px"
                animationSpeed="5s"
                onClick={() => alert("Clicked!")}
              />
            </div>
          </div>

          {/* medium and mobile screen  */}
          <div className="cursor-pointer block xl:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    {menuOpen ? <IoCloseOutline className='dark:text-white' size={25}/> : <RxHamburgerMenu className='dark:text-white' size={25}/>}
          </div>
          <AnimatePresence>
            
          {/* on open menu  */}
            {menuOpen && (
              <motion.div
               ref={menuRef}

               initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className=" fixed top-[70px] left-0 w-full mobile-menu  h-[calc(100vh-70px)]  overflow-y-auto
                 bg-[#F1F0EC] dark:bg-[#070712] flex flex-col px-6  z-50
                    ">
                <ul className="flex xl:hidden flex-col  mt-4 gap-6 text-[#130D08] dark:text-[#fff] font-medium text-base cursor-pointer font-sans">
                  {navLinks.map((nav, idx) => (
                    <>
                      <Link to={nav.path} key={idx} className={` ${location.pathname == nav.path ?"active":"" } 
                        flex items-center w-full justify-between `}
                        onClick={() => setMenuOpen(false)}  >
                        {nav.title}
                        <div>
                          { darkMode?<Icons.moreIconDarkMode className={`${location.pathname == nav.path?"text-orange-500 ":"text-white"}`} />
                           :<Icons.moreIcon className={`${location.pathname == nav.path?"text-orange-500 ":"text-[#130D08] "}`}/>}
                        </div>
                      </Link>
                    </>
                  ))}
                   <img className=' object-contain w-[300px]  absolute z-[0] top-40 opacity-50' src={BGGRADIENT} alt='Yellow gradient'/>
                  <li className="flex items-center gap-2 text-base" onClick={() => setMenuOpen(false)} >
                    <span><img  className="object-contain h-[21px] w-[32px]"  src={FLAG}alt="USA Flag"/> </span>
                    English
                  </li>
                    <li className='flex items-center gap-2'>
                      <img onClick={toggleDarkmode} className="object-contain h-10 w-10  cursor-pointer px-2"  src={darkMode ? LIGHTMODE : NIGHTMODE}  alt="Night mode"/> 
                        <span className='text-[#130D08] font-medium font-sans text-base dark:text-[#FFFFFF]'>
                       {darkMode? "Light Mode":" Dark Mode"}</span>

                  </li>
                  <li className='flex flex-col items-center md:items-start mt-10 pb-4'>
                    <FancyButton
                      text="Login"
                      bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                      bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)"
                      textColor="#fff"
                      conicColor="rgba(255, 221, 0, 0.5)"
                      // width="110px"
                       width={isMobile ? "350px" : "170px"}
                      height="52px"
                      borderRadius="50px"
                      animationSpeed="5s"
                      onClick={() => {
                        alert("Clicked!");
                        setMenuOpen(false);
                      }}
                    />
                  </li>
                
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
          
      </div>
    </div>
  )
}

export default NavBar