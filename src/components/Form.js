import React, { useContext} from "react";
import styled from "styled-components";
import { DispatchMainContext, StateMainContext } from "../context/MainProvider";
import { Button, InputWithLabel, SquareButton } from "./Inputs";
export const Form = () => {
    const { name, age, memory, greeting } = useContext(StateMainContext);
    const dispatch = useContext(DispatchMainContext);
  
    //update inputs
    const handleChange = (e) => {
      //hande input change
      dispatch({ type: "onchange", payload: [e.target.name, e.target.value] });
    
    };
  
    //copy text
    const copyToClipBoard = () =>{
      navigator.clipboard.writeText(greeting);
    }
  
  return (
    <SForm>
      <div>
        <InputWithLabel
          label="Inkluder navn"
          type="text"
          placeholder="Navn"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <InputWithLabel
          label="Inkluder alder"
          type="number"
          placeholder="Alder"
          name="age"
          value={age || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <InputWithLabel
          label="Inkluder fælles minde"
          type="text"
          placeholder="Fælles minde"
          name="memory"
          value={memory}
          onChange={handleChange}
        />
      </div>
      <div>
        <Button onClick={copyToClipBoard}>Kopier besked 🎁</Button>
        <SquareButton onClick={()=>dispatch({type:"updategreeting"})}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z"/></svg>
        </SquareButton>
      </div>
    </SForm>
  );
};

const SForm = styled.div`
    & > div {
        &:first-child {
            display :flex;
            > div:first-child {
                flex: 1;
                margin-right: 14px;
            }
            > div:last-child {
                width: 110px;
            }
        }
        &:last-child {
            display: flex;
            > button:first-child {
                margin-right: 14px;
                flex: 1;
            }
        }
    }
`;
