import { useState } from "react";

export const useValidation = () => {
  const [isValid, setIsValid] = useState(true);
  const [isActivated, setIsActivated] = useState(false);
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmail = (email) => {
    if (isActivated) {
      setIsValid(regex.test(email));
    }
  };

  const onBlurHandler = (email) => {
    setIsActivated(true);
    setIsValid(regex.test(email));
  };

  return {
    validateEmail,
    isValid,
    onBlurHandler,
  };
};
