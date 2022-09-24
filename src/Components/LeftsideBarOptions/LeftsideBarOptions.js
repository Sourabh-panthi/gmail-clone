import React from "react";
import "./LeftsideBarOptions.css";
const LeftsideBarOptions = ({ Icon, title, number, selected }) => {
  return (
    <div className={`sidebar__Options ${selected && "sidebar--active"}`}>
      <Icon className="sidebar__optionIcon" />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default LeftsideBarOptions;
