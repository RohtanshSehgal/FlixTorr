import React, { useState, useEffect } from "react";

function useClickOutside({ ref, bannerRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
        bannerRef.current.style.display = "flex";
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen, ref, bannerRef]);
  return [isMenuOpen, setIsMenuOpen];
}
export default useClickOutside;
