import React , { useState} from 'react';

const useInput = (validateFn) => {

    
  const [value , setValue] = useState('');
  const [isTouched , setIsTouched] = useState(false);

 
   const isValid = validateFn(value);
   const hasError = !isValid && isTouched;

  const ChangeHandler = event => {
    setValue(event.target.value);
  }

  const BlurHandler = event =>{
      setIsTouched(true);
  }

  const reset = ()=>{
      setValue('');
      setIsTouched(false);
  }

  return {
      value,
      isValid,
      hasError,
      ChangeHandler,
      BlurHandler,
      reset
  }
};

export default useInput;