import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UrlChanger = () => {
  const location = useLocation(); 

  useEffect(() => {
    console.log("URL changed to:", location.pathname);

    window.scrollTo(0, 0);
  }, [location]); // Re-run this effect every time `location` changes

  return (
    <div>
      <h1>Current Path: {location.pathname}</h1>
    </div>
  );
};

export default UrlChanger;
