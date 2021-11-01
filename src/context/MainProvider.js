import React, { useEffect, createContext, useReducer } from "react";
import { generateGreeting } from "../generator";

export const StateMainContext = createContext();
export const DispatchMainContext = createContext();

const mainReducer = (state, action) => {
  switch (action.type) {
    case "updategreeting" : {
      return {
        ...state,
        greeting : generateGreeting(state.name, state.age, state.memory)
      }
    }
    case "copy" : {
      const copied = action.payload
      return {
        ...state,
        copied : copied
      }
    }
    case "onchange": {
      const [name, value] = action.payload;
      return {
        ...state,
        [name] : value
      };
    }
    default : {
      return { ...state }
    }
  }
};

export const MainProvider = ({ children }) => {
  const mainInitialState = {
    greeting : "Tillykke min ven! Vi ses snart!",
    name : "",
    age : null,
    memory: "",
    copied: false
  };

  const [state, dispatch] = useReducer(mainReducer, mainInitialState);
  
useEffect(() => {
  dispatch({type: "updategreeting"})
}, [state.name, state.age, state.memory])

  return (
    <DispatchMainContext.Provider value={dispatch}>
      <StateMainContext.Provider value={state}>
        {children}
      </StateMainContext.Provider>
    </DispatchMainContext.Provider>
  );
};