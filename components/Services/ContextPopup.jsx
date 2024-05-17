"use client"
import React, { createContext, useState } from "react";
export const showPopupContext = createContext();
const ContextPopup = ({children}) => {
      const [showPopup, setShowPoup] = useState(false);
  return (
    <>
      <showPopupContext.Provider value={{ showPopup,setShowPoup }}>
        {children}
      </showPopupContext.Provider>
    </>
  );
};

export default ContextPopup;
