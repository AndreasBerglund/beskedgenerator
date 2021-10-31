import React, { useContext } from "react";
import styled from "styled-components";
import { StateMainContext } from "../context/MainProvider";

const Textarea = () => {
  const { message } = useContext(StateMainContext);
  return (
    <STextarea>
      <textarea value={message} readOnly name="message" />
    </STextarea>
  );
};

const STextarea = styled.div`
  background-color: red;
  textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none; /*remove the resize handle on the bottom right*/
    width: 100%;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.lg};
  }
`;

export default Textarea;
