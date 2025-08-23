import React from 'react';
import { INTERSECTINGPINKCIRCLE, INTERSECTINGYELLOWCIRCLE } from '../../../../constants/assetexports';

const IntersectingCirclesAnimation = () => {
  return (
    <div className="intersecting-circles-container">
      <div className="intersecting-circles-wrapper">
        {/* Option A: CSS Circles (current) */}
        {/* <div className="intersecting-circle intersecting-yellow-circle"></div>
        <div className="intersecting-circle intersecting-pink-circle"></div> */}
        
        {/* Option B: Using Images (uncomment to use instead) */}
        
        <div className="intersecting-circle intersecting-yellow-circle">
          <img src={INTERSECTINGYELLOWCIRCLE} alt="Yellow Circle" />
        </div>
        <div className="intersecting-circle intersecting-pink-circle">
          <img src={INTERSECTINGPINKCIRCLE} alt="Pink Circle" />
        </div>
       
      </div>
      <style jsx>{`
        .intersecting-circles-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          box-sizing: border-box;
        }

        .intersecting-circles-wrapper {
          position: relative;
          width: 280px;
          height: 280px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .intersecting-circle {
          position: absolute;
          width: 180px;
          height: 180px;
          
        }

        /* Style for image tags if using images instead of CSS circles */
        .intersecting-circle img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 50%;
        }

        /* Yellow circle - static position at center */
        .intersecting-yellow-circle {
          border-color: #FFD700;
         
          top: 50px;  /* Centered vertically */
          left: 50px;
          /* No animation - stays in place */
        }

        /* Pink circle - animated with two-step movement */
        .intersecting-pink-circle {
          border-color: #FF8C69;
         
          top: 50px;   /* Same level as yellow circle when synced */
          left: 50px;
          animation: intersectingSyncAnimation 3s ease-in-out infinite;
        }

        @keyframes intersectingSyncAnimation {
          0% {
            /* Starting position - pink circle perfectly aligned with yellow */
            transform: translateY(0px);
          }
          
          25% {
            /* Hold aligned position briefly */
            transform: translateY(0px);
          }
          
          50% {
            /* Move down to create intersection - half circle down */
            transform: translateY(90px);
          }
          
          75% {
            /* Hold intersection position briefly */
            transform: translateY(90px);
          }
          
          100% {
            /* Return to aligned position */
            transform: translateY(0px);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .intersecting-circles-wrapper {
            width: 160px;
            height: 160px;
          }
          
          .intersecting-circle {
            width: 100px;
            height: 100px;
           
          }
          
          .intersecting-yellow-circle {
            top: 30px;  /* Adjusted for tablet */
            left: 30px;
          }
          
          .intersecting-pink-circle {
            top: 30px;   /* Adjusted for tablet */
            left: 30px;
          }
          
          @keyframes intersectingSyncAnimation {
            0% { transform: translateY(0px); }       /* Aligned position */
            25% { transform: translateY(0px); }      /* Hold alignment */
            50% { transform: translateY(50px); }     /* Move down to intersect */
            75% { transform: translateY(50px); }     /* Hold intersection */
            100% { transform: translateY(0px); }     /* Return to alignment */
          }
        }

        @media (max-width: 480px) {
          .intersecting-circles-wrapper {
            width: 180px;
            height: 180px;
          }
          
          .intersecting-circle {
            width: 100px;
            height: 100px;
           
          }
          
          .intersecting-yellow-circle {
            top: 40px;  /* Adjusted for mobile */
            left: 40px;
          }
          
          .intersecting-pink-circle {
            top: 40px;   /* Adjusted for mobile */
            left: 40px;
          }
          
          @keyframes intersectingSyncAnimation {
            0% { transform: translateY(0px); }       /* Aligned position */
            25% { transform: translateY(0px); }      /* Hold alignment */
            50% { transform: translateY(45px); }     /* Move down to intersect */
            75% { transform: translateY(45px); }     /* Hold intersection */
            100% { transform: translateY(0px); }     /* Return to alignment */
          }
        }
      `}</style>
    </div>
  );
};

export default IntersectingCirclesAnimation;