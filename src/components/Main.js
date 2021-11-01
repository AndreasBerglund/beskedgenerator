import React from "react";
import styled from "styled-components";

import { Form } from "./Form";

import Textarea from "./Textarea";

const Main = () => {

  return (
    <SMain>
      <Textarea />
      <Form />
    </SMain>
  );
};

const SMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  width: 100%;
  max-width: 500px;
  height: 100%;
`;

export default Main;
