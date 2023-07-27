import React from "react";

const FeactureComponent = ({ title, text }) => {
  return (
    <>
      <div className="my-3">
        <h6>{title}</h6>
        <p>{text}</p>
      </div>
    </>
  );
};

export default FeactureComponent;
