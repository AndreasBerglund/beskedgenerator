import React, { useContext } from "react";
import styled from "styled-components";
import { StateMainContext } from "../context/MainProvider";

const Textarea = () => {
  const { greeting } = useContext(StateMainContext);
  return (
    <STextarea>
      <textarea value={greeting} readOnly name="greeting" />
    </STextarea>
  );
};

const STextarea = styled.div`

  flex: 1;
  margin-bottom: 30px;
  
  textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none; /*remove the resize handle on the bottom right*/
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.lg};
    padding: 20px;
    font-size: 20px;
`;

export default Textarea;
