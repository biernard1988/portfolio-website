import React from "react";

function TabButton({ active, selectTab, children }) {
  const buttonClasses = active ? "border-b border-cyan-500" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className="mr-3 font-semibold text-[#ADB7BE] border-b border-cyan-500">
        {children}
      </p>
    </button>
  );
}

export default TabButton;
