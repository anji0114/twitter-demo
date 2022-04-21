import React from "react";
import "./SidebarOption.css"

export const SidebarOption = (props) => {
  const { text, Icon } = props;
  return (
    <div className="sidebarOption">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};
