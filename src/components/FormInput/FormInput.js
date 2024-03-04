import React, { useState } from "react";
import styles from "./FormInput.module.css";

const FormInput = (props) => {
  const { label, onChange, id, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className={styles.formInput}>
      {label && <label>{label}</label>}
      <input
        {...inputProps}
        onChange={onChange}
        focused={focused.toString()}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
      />
      {errorMessage && <span className={styles.errorBox}>{errorMessage}</span>}
    </div>
  );
};

export default FormInput;
