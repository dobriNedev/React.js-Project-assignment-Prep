import styles from "./Register.module.css";

import { useContext, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useValidation } from "../../hooks/useValidation";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
  const [hasError, setHasError] = useState(false);

  const onErrorSubmit = () => {
    setHasError(true);
  };

  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
      confirmPassword: "",
    },
    (values) => {
      onRegisterSubmit(values, onErrorSubmit);
    }
  );

  const { validateEmail, isValid, onBlurHandler } = useValidation();

  return (
    <section className={styles.register}>
      <form method="POST" onSubmit={onSubmit}>
        <h2>Register</h2>
        {hasError && (
          <div className={styles.registerError}>Password mismatch</div>
        )}
        {!isValid && (
          <div className={styles.emailValidation}>Email is not valid</div>
        )}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={values.email}
          onChange={(e) => {
            changeHandler(e);
            validateEmail(e.target.value);
          }}
          onBlur={(e) => onBlurHandler(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={(e) => {
            changeHandler(e);
            setHasError(false);
          }}
          required
        />

        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={(e) => {
            changeHandler(e);
            setHasError(false);
          }}
          required
        />
        <button type="submit">Register</button>
      </form>
    </section>
  );
};
