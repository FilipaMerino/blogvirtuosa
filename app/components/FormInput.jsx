import React from "react";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="flex flex-col">
    <div>

      <label>{label}</label>
    </div>
      <input {...otherProps}></input>
    </div>
  );
};

export default FormInput;
