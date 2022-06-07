import React from "react";
import "./SidebarOptions.css";

function SidebarOptions({ active, Icon, text }) {
  return (
    <div className={`sidebarOptions ${active && "sidebarOptions--active"}`}>
      <Icon />
      
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOptions;
