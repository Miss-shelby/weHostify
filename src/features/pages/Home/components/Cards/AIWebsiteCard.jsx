/* eslint-disable no-unused-vars */
import React from 'react'
import { FancyClipCard, FancyClipCardTwo } from '../../../../shared/Cards/ClipCard'
import { GLOW } from '../../../../../constants/assetexports'
import {motion} from "framer-motion"
const AIWebsiteCard = () => {
  return (
    <>
    <div className='hidden md:block'>
    <div className='flex md:flex-row   gap-8 items-center w-full'>
        <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        whileInView={{ clipPath: "inset(0 0 0 0)" }}
        transition={{ duration: 1,delay:0 }}
        viewport={{ once: true}}
         className="">
        <FancyClipCard number="01"
            title="Prompt Design"
            description="Describe your business, and our AI handles layout, color, and content"
            clipPath="M164.404 26.9795C164.404 41.8799 176.483 53.959 191.384 53.959H332.595C347.73 53.959 360 66.2285 360 81.3638V253.595C360 268.73 347.73 281 332.595 281H27.4048C12.2695 281 0 268.73 0 253.595V27.4048C0 12.2696 12.2696 0 27.4048 0H137.425C152.325 0 164.404 12.0791 164.404 26.9795V26.9795Z"/>
        </motion.div>
        <motion.div 
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0 0)" }}
        transition={{ duration: 1,delay:0.3 }}
         viewport={{ once: true}}
        className="">
            <FancyClipCardTwo 
            fragmentPath="M38.8164 1.87207H176.056C183.757 1.87233 190 8.11581 190 15.8174V47.9756C190 55.677 183.757 61.9206 176.056 61.9209H15.4326C4.036 61.9209 -2.54801 48.9919 4.1543 39.7744L27.5371 7.61621C30.0792 4.12016 34.0934 2.00659 38.3984 1.87793L38.8164 1.87207Z"
            number="02"
            title="Customizable"
            description="Customize your design text, change colors, and swap images with ease"
            clipPath="M360 165.254C360 180.386 347.733 192.653 332.6 192.653H200.344C191.93 192.653 183.982 196.519 178.788 203.139L125.921 270.514C120.727 277.134 112.779 281 104.365 281H27.3996C12.2672 281 0 268.733 0 253.6V27.3996C0 12.2672 12.2672 0 27.3996 0H332.6C347.733 0 360 12.2672 360 27.3996V165.254Z"/>
        </motion.div>
    </div>
    <div className='flex gap-8 mt-10 items-center w-full'>
        <motion.div
         initial={{ clipPath: "inset(100% 0 0 0)" }}
        whileInView={{ clipPath: "inset(0 0 0 0)" }}
        transition={{ duration: 1,delay:0.6 }}
        viewport={{ once: true}}
         className="relative">
         <FancyClipCard number=""
            title="Instant Preview"
            description="Preview and see your AI design results instantly and in real time"
            clipPath="M360 253.215C360 268.56 347.56 281 332.215 281H135.486C120.14 281 107.7 268.56 107.7 253.215V220.77C107.7 205.424 95.2602 192.984 79.9147 192.984H27.7854C12.44 192.984 0 180.544 0 165.199V27.7854C0 12.44 12.44 0 27.7855 0H332.215C347.56 0 360 12.44 360 27.7854V253.215Z"/>
            <div className="absolute bottom-0 left-5">
                 <p className="text-[#FF6A00] mt-20 font-semibold font-sans text-[41px]">  03</p>
            </div>
        </motion.div>
         <motion.div
         initial={{ clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0 0)" }}
        transition={{ duration: 1,delay:0.9 }}
         viewport={{ once: true}}
          className="">
        <FancyClipCard number="04"
            title="Built with HTML"
            description="SEO-friendly, responsive static pages, bring your visions to life "
            clipPath="M164.404 26.9795C164.404 41.8799 176.483 53.959 191.384 53.959H332.595C347.73 53.959 360 66.2285 360 81.3638V253.595C360 268.73 347.73 281 332.595 281H27.4048C12.2695 281 0 268.73 0 253.595V27.4048C0 12.2696 12.2696 0 27.4048 0H137.425C152.325 0 164.404 12.0791 164.404 26.9795V26.9795Z"/>
        </motion.div>
    </div>
    </div>
    {/* mobile cards here  */}
    <div className="block md:hidden">
        <div className="flex flex-col  xs:gap-6 items-center justify-center">
             <motion.div 
             initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 1,delay:0 }}
             viewport={{ once: true}}
             className=" scale-[0.6] smx:scale-[0.86] xs:scale-[1]">
                <FancyClipCard extraClass="pb-10" width='350px' height='180px' number="01"
                title="Prompt Design"
                description="Describe your business, and our AI handles layout, color, and content"
                clipPath="M159.837 18.0605C159.837 27.6053 167.574 35.3428 177.119 35.3428H323.356C338.071 35.3428 350 47.2715 350 61.9864V154.135C350 168.85 338.071 180.778 323.356 180.778H26.6436C11.9287 180.778 0 168.85 0 154.135V27.4219C0 12.7071 11.9287 0.77832 26.6436 0.77832H142.555C152.099 0.77832 159.837 8.51584 159.837 18.0605Z"/>
             </motion.div>
            <motion.div 
            className="scale-[0.6] smx:scale-[0.86] xs:scale-[1]">
                <div className="absolute bottom-0  md:hidden  left-0   z-0 pointer-events-none opacity-55   ">
                    <img src={GLOW} alt="left-gradient glow"
                    className=" object-cover w-full h-full   translate-x-[-30%] translate-y-[40%]"/>
                </div>
                <FancyClipCardTwo width='350px' height='180px' top='140px' right='0px'
                fragmentHeight='41px' fragmentWidth='177px'
                fragmentPath="M27.248 1.26074H162.471C169.958 1.26076 176.028 7.33057 176.028 14.8184V25.5039C176.028 32.9917 169.958 39.0625 162.471 39.0625H15.4541C3.051 39.0624 -2.84058 23.7853 6.35059 15.457L18.1436 4.77148C20.6372 2.51193 23.8829 1.26074 27.248 1.26074Z"
                number="02"
                title="Customizable"
                description="Customize your design text, change colors, and swap images with ease"
                clipPath="M350 96.8542C350 111.566 338.074 123.493 323.362 123.493H191.521C185.255 123.493 179.19 125.702 174.391 129.731L121.853 173.847C117.054 177.877 110.989 180.085 104.723 180.085H26.6385C11.9264 180.085 0 168.159 0 153.447V26.7239C0 12.0119 11.9264 0.0854492 26.6385 0.0854492H323.362C338.074 0.0854492 350 12.0119 350 26.7239V96.8542Z"/>
            </motion.div>
        <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        whileInView={{ clipPath: "inset(0 0 0 0)" }}
        transition={{ duration: 1,delay:0.6 }}
         viewport={{ once: true}}
         className="relative scale-[0.6] smx:scale-[0.86] xs:scale-[1]">
         <FancyClipCard number=""
         height='181px' width='350px'
            title="Instant Preview"
            description="Preview and see your AI design results instantly and in real time"
            clipPath="M350 153.072C350 167.991 337.906 180.085 322.986 180.085H131.723C116.803 180.085 104.709 167.991 104.709 153.072V150.719C104.709 135.8 92.6146 123.706 77.6954 123.706H27.0136C12.0944 123.706 0 111.611 0 96.6919V27.0991C0 12.1799 12.0944 0.0854492 27.0136 0.0854492H322.986C337.906 0.0854492 350 12.1799 350 27.0991V153.072Z"/>
            <div className="absolute bottom-0 left-5">
                 <p className="text-[#FF6A00] mt-20 font-semibold font-sans text-3xl lg:text-[41px]">  03</p>
            </div>
        </motion.div>
         <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0 0)" }}
        transition={{ duration: 1,delay:0.9 }}
         viewport={{ once: true}}
          className="scale-[0.6] smx:scale-[0.86] xs:scale-[1]">
            <FancyClipCard extraClass="pb-10" width='350px' height='180px' number="04"
            title="Built with HTML"
            description="SEO-friendly, responsive static pages, bring your visions to life "
            clipPath="M159.837 18.0605C159.837 27.6053 167.574 35.3428 177.119 35.3428H323.356C338.071 35.3428 350 47.2715 350 61.9864V154.135C350 168.85 338.071 180.778 323.356 180.778H26.6436C11.9287 180.778 0 168.85 0 154.135V27.4219C0 12.7071 11.9287 0.77832 26.6436 0.77832H142.555C152.099 0.77832 159.837 8.51584 159.837 18.0605Z"/>
        </motion.div>
        </div>
    </div>
    </>
  )
}

export default AIWebsiteCard
