const FormInput = ({ label, ...otherProps }) => {
  return (
    <>
      <span>{label}</span>
      <input {...otherProps} />
    </>
  );
};

export default FormInput;
