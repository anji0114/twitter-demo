import React from "react";

export const SidebarOption = (props) => {
  const { text, Icon } = props;
  return (
    <div>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};
