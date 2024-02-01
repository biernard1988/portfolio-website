import React from "react";

function TabButton({ active, selectTab, children }) {
  const buttonClasses = active ? "border-b border-green-700" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
}

export default TabButton;
