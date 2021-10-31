import React, { useContext } from "react";
import styled from "styled-components";
import { DispatchMainContext, StateMainContext } from "../context/MainProvider";
import Textarea from "./Textarea";

const Main = () => {
  const { name, age, memory, message } = useContext(StateMainContext);
  const dispatch = useContext(DispatchMainContext);

  //update inputs
  const handleChange = (e) => {
      //hande input change
      dispatch({ type: "onchange", payload: [e.target.name, e.target.value] })
  }

  //copy text

  return (
    <SMain>
        <Textarea />
      <div>
        <div>
          <input type="text" placeholder="Navn" name="name" value={name} onChange={handleChange} />
          <input type="number" placeholder="Alder" name="age" value={age || ''} onChange={handleChange} />
        </div>
        <div>
          <input type="text" placeholder="Fælles minde" name='memory' value={memory} onChange={handleChange} />
        </div>
        <div>
          <button type="button">Generér besked 🎁 </button>
          <button type="button">Kopier</button>
        </div>
      </div>
    </SMain>
  );
};

const SMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  height: 100%;
`;

export default Main;
