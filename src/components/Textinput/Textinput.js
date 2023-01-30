import "./Textinput.css";

const Textinput = ({
  type = "text",
  name,
  className,
  placeholder,
  required = false,
  labelName = "",
  errorMessege = "",
  inputIcon = "",
  value,
  onChange,
}) => {
  
  return (
    <>
        {labelName !== "" && <div className="label-wrap">
       <label>{labelName}</label>
        {labelName && required && <span>*</span>}
      </div>
      }
      <div className="input-wrap">
        <span className="input-icon">
          <i className={inputIcon} aria-hidden="true"></i>
        </span>
        <input
          type={type}
          name={name}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      {errorMessege !== "" && <span>{errorMessege}</span>}
    </>
  );
};

export default Textinput;
