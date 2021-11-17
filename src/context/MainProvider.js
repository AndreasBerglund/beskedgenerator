import React, { useEffect, createContext, useReducer } from "react";
import { generateGreeting } from "../generator";

export const StateMainContext = createContext();
export const DispatchMainContext = createContext();

const mainReducer = (state, action) => {
  switch (action.type) {
    case "updategreeting" : {
      return {
        ...state,
        greeting : generateGreeting(state.name, state.age, state.memory, state.christmas)
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
      if ( name === "christmas" ) {
        return {
          ...state,
          age : state.christmas ? state.age : 2021,
          name : state.christmas ? state.name : "JULEVEN",
          memory : state.christmas ? state.memory :"JULEAFTEN",
          christmas: !state.christmas
        }
      } else {
        return {
          ...state,
          [name] : value
        };
      }
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
    christmas : false,
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