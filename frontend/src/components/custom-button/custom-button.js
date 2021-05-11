import React from "react";
import "./custom-button.scss";

const customButton = ({ children, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""}
      custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default customButton;
