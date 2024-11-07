import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active 
    ? "text-white"
    : "text-[#ADB7BE]";

  return (
    <button
      onClick={selectTab}
      aria-selected={active}  // Added for accessibility
      role="tab"               // Specifies this element as a tab in a tablist
    >
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
