import { useEffect, useState } from "react";

const getFlags = (width) => ({
  isXs: width < 430,
  isSm: width >= 430 && width < 640,
  isMd: width >= 640 && width < 1024,
  isLg: width >= 1024,
});

const useScreenFlags = () => {
  const [screenFlags, setScreenFlags] = useState(() => getFlags(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setScreenFlags(getFlags(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenFlags;
};

export default useScreenFlags;
