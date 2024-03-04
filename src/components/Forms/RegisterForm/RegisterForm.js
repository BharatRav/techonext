import React, { memo, useState } from "react";
import FormInput from "../../FormInput/FormInput";
import styles from "./Register.module.css";
import { type } from "@testing-library/user-event/dist/type";
const RegisterForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters long and shouldn't include any spacial character! and spaces before and after username!",
      label: "Username",
      required: true,
      //   pattern: "[a-zA-Z0-9_ ]{3,16}$",
      pattern: "^[a-zA-Z0-9_]{3,16}( [a-zA-Z0-9_]{3,16})*$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters long and include at least 1 number, 1 letter and i special character!",
      label: "Password",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match!",
      label: "Confirm Password",
      required: true,
      pattern: values.password,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()));
    console.log(values);
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Register Form</h1>
        {inputs.map((input, i) => (
          <FormInput
            key={i}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default memo(RegisterForm);
