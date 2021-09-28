import { useRef, useState } from "react";
import useInput from "./hooks/use-input";

const SimpleInput = (props) => {
  //  const inputRef = useRef();

  const { value,isValid, hasError, ChangeHandler, BlurHandler ,reset } = useInput((value) => value.trim() !== "");

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);
  
   let isFormValid = false;

     if(isValid){
       isFormValid = true;
     }
  // const nameInputBlurHandler = (event) => {
  //   setInputTouched(true);
  //   if (enteredName.trim() === "") {
  //     setEnteredNameIsValid(false);
  //     return;
  //   }
  // };

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  //   if (event.target.value.trim() !== "") {
  //     setEnteredNameIsValid(true);
  //     return;
  //   }
  //   setInputTouched(true);
  // };

  const submitHandler = (event) => {
     event.preventDefault();
    // setInputTouched(true);
    // if (enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    //   return;
    // }
    // setEnteredNameIsValid(false);
    // console.log(enteredName);
    // console.log(inputRef.current.value);
 
    if(!isValid)
    {
      return;
    }

     reset();
    //setEnteredName("");
  };

  // const isInputValid = !enteredNameIsValid && inputTouched;
  // const nameInputClasses = isInputValid
  //   ? "form-control invalid"
  //   : "form-control";
   
   const nameInputClasses = hasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        {/* ref={inputRef} */}
        <input
          value={value}
          type="text"
          id="name"
          onBlur={BlurHandler}
          onChange={ChangeHandler}
        />
      </div>
      {hasError && <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button style={{
          cursor : isFormValid ? 'pointer' : 'no-drop'
        }} disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
