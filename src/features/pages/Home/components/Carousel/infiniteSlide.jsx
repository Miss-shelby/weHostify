// CarouselHero.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "../../../../../data";
import { IMAGEONE, IMAGETWO } from "../../../../../constants/assetexports";
import FancyButton from "../../../../shared/Buttons/FancyButton";
import useIsMobile from "../../../../shared/utils/isMobile";

// const bgVariants = {
//   enter: { opacity: 0 },
//   center: { opacity: 1 },
//   exit: { opacity: 0 },
// };


export default function CarouselHero() {
   const isMobile = useIsMobile();
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  

  const handleNext = (i) => {
    setIndex(i);
  };

  return (
    <div className="relative w-full h-[500px] lg:h-[750px] pb-4 lg:pb-10  mt-[32px] rounded-[30px] pl-3 md:pl-10 overflow-hidden  flex flex-col justify-end">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 via-60% to-black to-85% z-10"></div>
      {/* Background Image */}
     <div className="absolute inset-0 z-0">
      {slides.map((s, i) => (
        <motion.div
          key={s.id}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: url(${s.bg}) }}
          initial={false}
          animate={{
            opacity: index === i ? 1 : 0,
            zIndex: index === i ? 1 : 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.42, 0, 0.58, 1], // smooth ease-in-out
          }}
        />
      ))}
    </div>


      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40 z-10" /> */}

      {/* Content */}
       <div className="relative z-20 p-0 gap-3 lg:gap-0 lg:p-4 text-white flex  w-full justify-between items-end">
            <div className="w-full max-w-[150px] lg:max-w-lg">
             <motion.h2 key={slide.title}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -40 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
             className="text-xl lg:text-4xl font-bold lg:mb-2">{slide.title}</motion.h2>

                <div className="relative h-[100px] lg:h-[110px] overflow-hidden"> {/* Adjust height to fit your content */}
                    <AnimatePresence mode="sync">
                    <motion.p
                      key={slide.description}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, ease: 'easeInOut' }}
                      className="absolute top-0 left-0 w-full font-light sm:font-medium font-sans text-sm lg:text-lg lg:leading-[23px] lg:pt-0"
                    >
                      {slide.description}
                    </motion.p>
                  </AnimatePresence>
              </div>

        {/* <AnimatePresence mode="wait">
          <motion.p
            key={slide.description}  // Ensures AnimatePresence recognizes it's changing
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }} // Smooth bezier
            className="font-light sm:font-medium font-sans text-sm lg:text-lg lg:leading-[23px] lg:pt-4"
          >
            {slide.description}
          </motion.p>
        </AnimatePresence> */}

            <div className="mt-6">
              <FancyButton
              text="Apply Now"
              bgLinear="linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))"
              bgRadial="radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)"
              textColor="#fff"
              conicColor="rgba(255, 221, 0, 0.5)"
               width={isMobile ? "150px" : "250px"}
              height="48px"
              borderRadius="50px"
              animationSpeed="5s"
              onClick={() => console.log("Clicked!")}/>
            </div>
            </div>
            <div className="flex  items-end gap-3 sm:gap-6 z-30 overflow-hidden ">
              <AnimatePresence initial={false} mode="popLayout">
                {[index, (index + 1) % slides.length].map((i,) => {
                  const s = slides[i];
                  const isActive = i === index;
                  return (
                    <motion.img
                      key={s.id}
                      src={s.thumb}
                      alt="carousel image"
                      onClick={() => handleNext(i)}
                      // initial={{ opacity: 0, x: 40 }}
                      // animate={{
                      //   opacity: 1,
                      //   x: 0,
                      //   // scale: isActive ? 1.1 : 0.85,
                      //   zIndex: isActive ? 2 : 1,
                      // }}
                      // exit={{ opacity: 0, x: -840, }}
                      transition={{ duration: 0.8}}
                      className={`cursor-pointer object-cover rounded-xl shadow-xl transition-all duration-500 ease-in-out ${
                        isActive ? "border-4 border-white lg:w-full w-[100px] md:w-[320px] md:h-[400px] " : "w-[70px] lg:w-[250px] lg:h-[259px] opacity-70"
                      }`}
                      // style={{
                      //   width: isActive ? 320 : 250,
                      //   height: isActive ? 400 : 308,
                      // }}
                    />
                  );
                })}
              </AnimatePresence>
            </div>
       </div>
      {/* Dot indicators */}
      <div className=" flex justify-center mt-10 space-x-3 z-30">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => handleNext(i)}
            className={`h-2 w-2 lg:h-3 lg:w-3 rounded-full ${
              index === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}