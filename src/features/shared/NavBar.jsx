import React, { useState } from 'react'
import { FLAG, LIGHTMODE, LOGO, NIGHTMODE } from '../../constants/assetexports'
import { navLinks } from '../../data'
import Button from './Button'
import FancyButton from './Buttons/FancyButton'
import { Icons } from '../../Icons'
import {motion, AnimatePresence} from 'framer-motion'
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
const NavBar = () => {
  const [darkMode,setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkmode = ()=>{
    document.documentElement.classList.toggle('dark');
   setDarkMode((prev) => !prev);
  }
  return (
    <div className="w-full h-[70px] bg-[#F1F0EC] z-[99999] dark:bg-[#070712] fixed top-0 left-0 ">
      <div className=" flex items-start justify-between py-4  xl:max-w-[1500px] w-full  mx-auto px-6 xl:px-14" >
        <div className="">
           <img src={LOGO} alt='logo'/>
        </div>
          <div className="hidden xl:flex gap-6">
            <ul className='flex items-center text-[#130D08]  dark:text-[#fff] font-medium text-base cursor-pointer font-sans gap-5 '>
          {
            navLinks.map((nav,idx)=>(
              <li className='flex items-center gap-2' key={idx}>{nav.title} <span> {nav.dropDown && (
               darkMode? <Icons.dropdownDarkMode/>  :   <Icons.dropdownLightMode/>
              )} </span></li>
            ))
             
          }
          
        <p className='text-[#130D08] dark:text-[#fff] flex items-center gap-[6px] font-medium text-base cursor-pointer font-sans'>
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
               initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className=" fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] 
                 bg-[#F1F0EC] dark:bg-[#070712] flex flex-col px-6  z-50
                    ">
                <ul className="flex xl:hidden flex-col mt-4 gap-6 text-[#130D08] dark:text-[#fff] font-medium text-base cursor-pointer font-sans">
                  {navLinks.map((nav, idx) => (
                    <li key={idx} className="flex items-center gap-2"
                      onClick={() => setMenuOpen(false)}  >
                      {nav.title}
                      {nav.dropDown && (
                        darkMode ?  <Icons.dropdownLightMode />  :<Icons.dropdownDarkMode />
                      )}
                    </li>
                  ))}
                  <li className="flex items-center gap-2 text-base" onClick={() => setMenuOpen(false)} >
                    <span><img  className="object-contain h-[21px] w-[32px]"  src={FLAG}alt="USA Flag"/> </span>
                    English
                  </li>
                  <li>
                    <FancyButton
                      text="Login"
                      bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
                      bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)"
                      textColor="#fff"
                      conicColor="rgba(255, 221, 0, 0.5)"
                      width="110px"
                      height="52px"
                      borderRadius="50px"
                      animationSpeed="5s"
                      onClick={() => {
                        alert("Clicked!");
                        setMenuOpen(false);
                      }}
                    />
                  </li>
                  <li><img onClick={toggleDarkmode} className="object-contain cursor-pointer px-2"  src={darkMode ? LIGHTMODE : NIGHTMODE}  alt="Night mode"/>
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