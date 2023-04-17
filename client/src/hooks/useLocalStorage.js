import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    //this is a synchronous operation
    const persistedStateSerialized = localStorage.getItem(key);

    if (persistedStateSerialized) {
      const persistedState = JSON.parse(persistedStateSerialized);
      //return the new state with return persistedState
      return persistedState;
    }
    return initialValue;
  });

  const setLocalStorageState = (value) => {
    setState(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [state, setLocalStorageState];
};
