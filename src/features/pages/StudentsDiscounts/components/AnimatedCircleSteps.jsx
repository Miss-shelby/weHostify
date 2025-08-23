import React, { useState, useEffect } from 'react';

const AnimatedCircleSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Auto-animate in infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Responsive sizing based on viewport
  const getResponsiveSize = () => {
    if (typeof window !== 'undefined') {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      if (vw < 480) return 0.6; // Mobile - 70% size
      if (vw < 768) return 0.85; // Tablet - 85% size
      return 1; // Desktop - full size
    // Desktop - full size (192px)
    }
    return 1;
  };

//   if (vw < 480) return 80 / 192; // Mobile - 80px width (80/192 = ~0.42)
//       if (vw < 768) return 0.85; // Tablet - 85% size
//       return 1; 
  const [scale, setScale] = useState(getResponsiveSize());

  useEffect(() => {
    const handleResize = () => {
      setScale(getResponsiveSize());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define the 4 positions on the large circle border and yellow circle scales (responsive)
  const baseRadius = 96 * scale;
  const stepData = [
    { position: { x: 0, y: -baseRadius }, yellowScale: 90 * scale },    // Top - original size
    { position: { x: baseRadius, y: 0 }, yellowScale: 110 * scale },    // Right - scale to 110px
    { position: { x: 0, y: baseRadius }, yellowScale: 120 * scale },    // Bottom - scale to 120px
    { position: { x: -baseRadius, y: 0 }, yellowScale: 130 * scale }    // Left - scale to 130px
  ];

  const currentData = stepData[currentStep];

  return (
    <div className=" flex items-center justify-center ">
      <div className="relative">
        
        {/* Large Pink/Orange Circle - you can replace with image */}
        <div 
          className=" rounded-full border-[6px] border-[#FF6A004D] bg-transparent"
          style={{
            width: `${192 * scale}px`,
            height: `${192 * scale}px`,
            // Uncomment and add your image URL to use an image instead
            // backgroundImage: 'url("your-outer-circle-image.png")',
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            // border: 'none'
          }}
        ></div>
        
        {/* Smaller Yellow Circle (inner) - scales dynamically */}
        <div 
          className="absolute rounded-full border-4 border-[#FFDD0066] bg-transparent transition-all duration-1000 ease-in-out"
          style={{
            width: `${currentData.yellowScale}px`,
            height: `${currentData.yellowScale}px`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            // Uncomment and add your image URL to use an image instead
            // backgroundImage: 'url("your-inner-circle-image.png")',
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            // border: 'none'
          }}
        ></div>
        
        {/* Small Yellow Circle (animated) - positioned exactly on the large circle border */}
        <div 
          className="absolute w-6 h-6 border-4 border-[#FFDD00CC] bg-transparent rounded-full transition-all duration-1000 ease-in-out"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%) translate(${currentData.position.x}px, ${currentData.position.y}px)`,
            // Uncomment and add your image URL to use an image instead
            // backgroundImage: 'url("your-small-circle-image.png")',
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            // backgroundColor: 'transparent'
          }}
        ></div>

        {/* Debug info - remove this in production */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center hidden">
          <div className="text-yellow-400 text-sm">
            Step: {currentStep + 1} | Yellow Circle: {currentData.yellowScale}px
          </div>
        </div>

      </div>
    </div>
  );
};

export default AnimatedCircleSteps;