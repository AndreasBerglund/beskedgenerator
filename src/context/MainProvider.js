import React, { createContext, useReducer } from "react";

export const StateMainContext = createContext();
export const DispatchMainContext = createContext();

const mainReducer = (state, action) => {
  switch (action.type) {
    case "onchange": {
      const [name, value] = action.payload;
      console.log(name, value)
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
    message : "Tillykke min ven! Vi ses snart!",
    name : "Jens",
    age : null,
    memory: ""
  };

  const [state, dispatch] = useReducer(mainReducer, mainInitialState);
  
  return (
    <DispatchMainContext.Provider value={dispatch}>
      <StateMainContext.Provider value={state}>
        {children}
      </StateMainContext.Provider>
    </DispatchMainContext.Provider>
  );
};