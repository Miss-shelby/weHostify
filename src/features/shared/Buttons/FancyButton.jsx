import React from "react";
import PropTypes from "prop-types";

const FancyButton = ({
  text,
  bgLinear,
  bgRadial,
  textColor,
  conicColor,
  width,
  height,
  borderRadius,
  animationSpeed,
  onClick,
}) => {
  // Set CSS custom properties dynamically
  const fancyStyle = {
    "--bg-linear": bgLinear,
    "--bg-radial": bgRadial,
    "--text-color": textColor,
    "--conic-color": conicColor,
    "--width": width,
    "--height": height,
    "--radius": borderRadius,
    "--duration": animationSpeed,
  };

  return (
    <div className="fancy" style={fancyStyle}>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

FancyButton.propTypes = {
  text: PropTypes.string,
  bgLinear: PropTypes.string,
  bgRadial: PropTypes.string,
  textColor: PropTypes.string,
  conicColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  animationSpeed: PropTypes.string,
  onClick: PropTypes.func,
};

FancyButton.defaultProps = {
  text: "Login",
  bgLinear: "linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1))",
  bgRadial: "radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)",
  textColor: "white",
  conicColor: "rgba(255, 221, 0, 0.5)",
  width: "200px",
  height: "75px",
  borderRadius: "50px",
  animationSpeed: "8s",
};

export default FancyButton;
