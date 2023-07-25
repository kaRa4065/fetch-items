import React from "react";

const Button = ({ buttonText, setReqType, reqType }) => {
  return (
    <button type="button" onClick={() => setReqType(buttonText)}>
      {buttonText}
    </button>
  );
};

export default Button;
