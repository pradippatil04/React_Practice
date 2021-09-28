import React, { useState , useRef } from "react";
// import Wrapper from "../Helper/Wrapper";
import Buttom from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
   const username = nameInputRef.current.value;
   const userage = ageInputRef.current.value;
    if (username.trim().length === 0 || userage.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid username and age (non empty values)",
      });
      return;
    }

    if (+userage < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter valid  age (>0)",
      });
      return;
    }
    props.onAddUser(username, userage);
    //below not recommmede you shoud not manipuate DOM without react; use State / handler conmbination
    // use refs mostly when you just read the value
    nameInputRef.current.value = ''; 
    ageInputRef.current.value = ''; 
  };

  const errorHandler =() => {
    setError(null);
  };

  return (
      <>  
        {/* <React.Fragment> 2nd approch */}
        {/* <Wrapper>  3rd approach*/}
        {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input ref={nameInputRef}  type="text"  id="username"  />
            <label htmlFor="age">Age (Years)</label>
            <input ref={ageInputRef} type="number" id="age"  />
            <Buttom type="submit">Add User</Buttom>
          </form>
        </Card>
        {/* </Wrapper> */}
        {/* </React.Fragment> */}
      </>
  );
};

export default AddUser;
