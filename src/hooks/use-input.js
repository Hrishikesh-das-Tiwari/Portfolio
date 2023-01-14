import { useState } from 'react';

const useInput = (valueValidator) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = valueValidator(value);
  const hasError = !valueIsValid && isTouched;

  const valueInputHandler = (event) => {
    setValue(event.target.value);
  };
  const touchInputHandler = (event) => {
    setIsTouched(true);
  };
  const reset = () => {
    setValue('');
    setIsTouched(false);
  };
  return {
    value,
    valueIsValid,
    hasError,
    valueInputHandler,
    touchInputHandler,
    reset,
  };
};

export default useInput;
