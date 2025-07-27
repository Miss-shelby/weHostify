import "./carouse.css"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "../../../../../data";
import { IMAGEONE, IMAGETWO } from "../../../../../constants/assetexports";
import FancyButton from "../../../../shared/Buttons/FancyButton";
import useIsMobile from "../../../../shared/utils/isMobile";


export default function CarouselHero() {
   const isMobile = useIsMobile();
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const handleNext = (i) => {
    setIndex(i);
  };

  // Calculate three visible slides for infinite loop: previous, current, next
const visibleSlides = [
  slides[index % slides.length],                       // Current slide (first)
  slides[(index + 1) % slides.length],                 // Next slide
  slides[(index + 2) % slides.length],                 // Next+1 slide
];

 const shift = () => {
    let s = 0;
    for (let i = 0; i < index; i++) {
      s += i === 0 ? 220 : 200;
    }
    return s;
  };
  

  return (
    <div className="relative w-full h-[350px] sm:h-[500px] lg:h-[750px] pb-4  lg:pb-10 mt-6 lg:mt-[32px] rounded-[30px] pl-3 md:pl-10 overflow-hidden  flex flex-col justify-end">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 via-60% to-black to-85% z-10"></div>
      {/* Background Image */}
     <div className="absolute inset-0 z-0">
      {slides.map((s, i) => (
        <motion.div
          key={s.id}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${s.bg})` }}
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
                onClick={() => console.log("Clicked!")}
              />
            </div>
           </div>

           {/* Infinite Loop Thumbnails Carousel */}
            <div className="relative w-[700px] overflow-hidden">
                <div
                  key={`carousel-${index}`}
                  className="flex  items-end gap-3 sm:gap-6 "
                //  style={{ transform: `translateX(-${shift()}px)` }}
                >
                  {visibleSlides.map((s, iRel) => {
                    const isActive = iRel === 0; // center slide
                    // Find the absolute index for click handler
                    const originalIndex = slides.findIndex((sl) => sl.id === s.id);
                    console.log(originalIndex,'orginal index');
                    
                    return (
                      <img
                        key={s.id}
                        src={s.thumb}
                        alt="carousel thumbnail"
                        onClick={() => handleNext(originalIndex)}
                         
                        className={`cursor-pointer object-cover flex-shrink-0 rounded-xl shadow-xl transition-all duration-500 ease-in-out ${
                          isActive
                            ? "border-4 border-white z-[2] w-[100px] md:w-[320px] md:h-[400px]"
                            : "w-[70px] opacity-80 lg:w-[250px] lg:h-[259px]"
                        }`}
                        
                      />
                    );
                  })}
                </div>
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