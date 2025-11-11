import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export const ScrollRestoration = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only scroll to top if navigation is a PUSH (i.e., Link click)
    if (navigationType === "PUSH") {
      window.scrollTo({ top: 0, left: 0 });
    }
    // Do not scroll on POP (back/forward) – browser handles it
  }, [location.key]); // location.key changes on every navigation

  return null;
};
