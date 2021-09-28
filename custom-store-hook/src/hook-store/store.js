import { useState, useEffect, useReducer } from 'react';

let globalState={};
let listeners = [];
let actions = {};


export const useStore = () => {
    const setStore = useState(globalState)[1];
 
    const dispatch = (actionIdentifier,payload )=> {
        const newState = actions[actionIdentifier](globalState,payload);
        globalState = { ...globalState , ...newState};
        
        for (const listener of listeners) {
            listener(globalState);
        }
    }

    useEffect(()=>{
        listeners.push(setStore);
        return () => {
            listeners = listeners.filter(li => li !== setStore);
        }
    },[setStore]);

    return [globalState,dispatch];

}


export const initStore = (userActions, initialState) => {
   if(initialState){
       globalState = {...globalState,...initialState};
   }

   actions = {...actions,...userActions};
}