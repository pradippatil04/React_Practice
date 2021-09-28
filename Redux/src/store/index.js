import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter-slice';
import authReducer from './auth-slice';

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }

//   if (action.type === "incrementby5") {
//     return {
//       ...state,
//       counter: state.counter + action.amount,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

//const store = createStore(counterSlice.reducer);



const store = configureStore({
    reducer : { ctr : counterReducer , auth : authReducer} //can be add more with keys if have multiple reducers
   // reducer : counterSlice.reducer
});

export default store;
