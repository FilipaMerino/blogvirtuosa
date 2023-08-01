

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="flex flex-col">

      <label>{label}</label>
      <input {...otherProps}></input>
    </div>
  );
};

export default FormInput;
