import React from 'react';

const StackedCircleAnimationWithImage = () => {
  return (
    <div className="container">
      <div className="circle-stack">
        {/* Option A: Using background-image (uncomment and add your image URL above) */}
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-5"></div>
        <div className="circle circle-6"></div>
        
        {/* Option B: Using <img> tags (uncomment to use this instead) */}
        {/*
        <div className="circle circle-1">
          <img src="your-circle-icon.png" alt="Circle" />
        </div>
        <div className="circle circle-2">
          <img src="your-circle-icon.png" alt="Circle" />
        </div>
        <div className="circle circle-3">
          <img src="your-circle-icon.png" alt="Circle" />
        </div>
        <div className="circle circle-4">
          <img src="your-circle-icon.png" alt="Circle" />
        </div>
        <div className="circle circle-5">
          <img src="your-circle-icon.png" alt="Circle" />
        </div>
        <div className="circle circle-6">
          <img src="your-circle-icon.png" alt="Circle" />
        </div>
        */}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #f5f5f5;
          margin: 0;
          padding: 20px;
          box-sizing: border-box;
        }

        .circle-stack {
          position: relative;
          width: 200px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .circle {
          position: absolute;
          width: 80px;
          height: 80px;
          /* Option 1: Use background image */
          background-image: url('/circle-1.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          
          
          animation: stackExpand 3s ease-in-out infinite;
        }
        .circle-2 {
          width: 80px;
          height: 80px;
          animation-delay: 0s;
          opacity: 0;
        }

        .circle-3 {
          width: 80px;
          height: 80px;
          animation-delay: 0s;
          opacity: 0;
        }

        .circle-4 {
          width: 80px;
          height: 80px;
          animation-delay: 0s;
          opacity: 0;
        }

        .circle-5 {
          width: 80px;
          height: 80px;
          animation-delay: 0s;
          opacity: 0;
        }

        .circle-6 {
          width: 80px;
          height: 80px;
          animation-delay: 0s;
          opacity: 0;
        }

        @keyframes stackExpand {
          0% {
            transform: scale(1) translate(0, 0);
            opacity: 1;
          }
          
          50% {
            transform: scale(1) translate(var(--offset-x), var(--offset-y));
            opacity: 0.9;
          }
          
          100% {
            transform: scale(1) translate(0, 0);
            opacity: 1;
          }
        }

        .circle-1 {
          --offset-x: 0px;
          --offset-y: 0px;
        }

        .circle-2 {
          --offset-x: 8px;
          --offset-y: -4px;
        }

        .circle-3 {
          --offset-x: 16px;
          --offset-y: -8px;
        }

        .circle-4 {
          --offset-x: 24px;
          --offset-y: -12px;
        }

        .circle-5 {
          --offset-x: 32px;
          --offset-y: -16px;
        }

        .circle-6 {
          --offset-x: 40px;
          --offset-y: -20px;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .circle-stack {
            width: 150px;
            height: 150px;
          }
          
          .circle {
            width: 60px !important;
            height: 60px !important;
            border-width: 2px;
          }
        }

        @media (max-width: 480px) {
          .circle-stack {
            width: 120px;
            height: 120px;
          }
          
          .circle {
            width: 50px !important;
            height: 50px !important;
            border-width: 2px;
          }
        }
      `}</style>
    </div>
  );
};

export default StackedCircleAnimationWithImage;