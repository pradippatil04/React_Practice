import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter-slice";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.ctr.counter);
  const show = useSelector(state => state.ctr.showCounter,)

  const incrementHandler = () => {
    //dispatch({ type: "increment" }); //normal redux
    dispatch(counterActions.increment()); //redux-toolkit
  };
  const decrementHandler = () => {
    //dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  const incrementBy5Handler = () => {
    //dispatch({ type: "incrementby5", amount: 5 });
   // dispatch(counterActions.incrementby5({ amount : 5}));
    dispatch(counterActions.incrementby5(5)); //toolkit make it => { type:'UNIQUE_KEY' , payload: 5}
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show &&  <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementBy5Handler}>Increment By 5 </button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
