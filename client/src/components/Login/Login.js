import styles from "./Login.module.css";

import { useState } from "react";

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { useValidation } from "../../hooks/useValidation";

export const Login = () => {
  const [hasError, setHasError] = useState(false);

  const onErrorSubmit = () => {
    setHasError(true);
  };

  const { onLoginSubmit } = useAuthContext();
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    (values) => {
      onLoginSubmit(values, onErrorSubmit);
    }
  );

  const { validateEmail, isValid, onBlurHandler } = useValidation();

  return (
    <section className={styles.login}>
      <div className={styles.container}>
        <form onSubmit={onSubmit}>
          <h2>Login</h2>
          {hasError && (
            <div className={styles.loginError}>
              Invalid username or password
            </div>
          )}
          {!isValid && (
            <div className={styles.emailValidation}>Email is not valid</div>
          )}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={(e) => {
              changeHandler(e);
              validateEmail(e.target.value);
              setHasError(false);
            }}
            onBlur={(e) => onBlurHandler(e.target.value)}
            required
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
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};
