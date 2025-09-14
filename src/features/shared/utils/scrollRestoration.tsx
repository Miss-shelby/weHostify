import { useEffect } from "react";
import { useLocation } from "react-router";

function ManualScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0); // Always start at top
  }, [location]);

  return null;
}

export default ManualScrollRestoration;
