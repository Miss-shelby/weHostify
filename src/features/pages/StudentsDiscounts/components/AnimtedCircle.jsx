import React from 'react';
import { YELLOWCIRCLE1, YELLOWCIRCLE2, YELLOWCIRCLE3, YELLOWCIRCLE4, YELLOWCIRCLE5 } from '../../../../constants/assetexports';

const StackedCircleAnimationGrow = () => {
  return (
    <div className="container">
      <div className="circle-stack">
        {/* Using individual images for each circle */}
        <div className="circle circle-1">
          <img src={YELLOWCIRCLE1} alt="Circle 1" />
        </div>
        <div className="circle circle-2">
          <img src={YELLOWCIRCLE2} alt="Circle 2" />
        </div>
        <div className="circle circle-3">
          <img src={YELLOWCIRCLE3} alt="Circle 3" />
        </div>
        <div className="circle circle-4">
          <img src={YELLOWCIRCLE4} alt="Circle 4" />
        </div>
        <div className="circle circle-5">
          <img src={YELLOWCIRCLE5} alt="Circle 5" />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
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
          width: 200px;
          height: 200px;
          animation: stackExpand 3s ease-in-out infinite;
        }

        /* Style for individual images */
        .circle img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 50%; /* Makes the image circular if it's not already */
        }

        .circle-1 {
          width: 200px;
          height: 200px;
          animation-delay: 0s;
        }

        .circle-2 {
          width: 200px;
          height: 200px;
          animation-delay: 0s;
          opacity: 0;
        }

        .circle-3 {
          width: 200px;
          height: 200px;
          animation-delay: 0s;
          opacity: 0;
        }

        .circle-4 {
          width: 200px;
          height: 200px;
          animation-delay: 0s;
          opacity: 0;
        }

        .circle-5 {
          width: 200px;
          height: 200px;
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
          --offset-x: 20px;
          --offset-y: -10px;
        }

        .circle-3 {
          --offset-x: 40px;
          --offset-y: -20px;
        }

        .circle-4 {
          --offset-x: 60px;
          --offset-y: -30px;
        }

        .circle-5 {
          --offset-x: 80px;
          --offset-y: -40px;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .circle-stack {
            width: 150px;
            height: 150px;
          }
          
          .circle {
            width: 150px !important;
            height: 150px !important;
          }
            /* FIXED: Proportionally scaled offsets for tablet size (75% of desktop values) */
          .circle-2 { --offset-x: 15px; --offset-y: -7px; }   /* 75% of 20px/10px */
          .circle-3 { --offset-x: 30px; --offset-y: -15px; }  /* 75% of 40px/20px */
          .circle-4 { --offset-x: 45px; --offset-y: -22px; }  /* 75% of 60px/30px */
          .circle-5 { --offset-x: 60px; --offset-y: -30px; }  /* 75% of 80px/40px */
        }

        @media (max-width: 480px) {
          .circle-stack {
            width: 120px;
            height: 120px;
          }
          
          .circle {
            width: 120px !important;
            height: 120px !important;
            
          }
            /* FIXED: Proportionally scaled offsets for mobile size (60% of desktop values) */
          .circle-2 { --offset-x: 12px; --offset-y: -6px; }   /* 60% of 20px/10px */
          .circle-3 { --offset-x: 24px; --offset-y: -12px; }  /* 60% of 40px/20px */
          .circle-4 { --offset-x: 36px; --offset-y: -18px; }  /* 60% of 60px/30px */
          .circle-5 { --offset-x: 48px; --offset-y: -24px; }  /* 60% of 80px/40px */
        }
      `}</style>
    </div>
  );
};

export default StackedCircleAnimationGrow;