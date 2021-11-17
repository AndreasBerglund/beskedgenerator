import React, { useContext } from "react";
import styled from "styled-components";
import { StateMainContext } from "../context/MainProvider";
import Snow from "./Snow";

const Header = () => {
  const { christmas } = useContext(StateMainContext);
  return <SHeader>
      <h3 style={{ fontWeight: "normal"}}>{ christmas ? "🎅" : "❤" }</h3>
      <h3>{ !christmas ? "Fødselsdagsbeskedgenerator" : "Julehilsengenerator"}<sup>™</sup></h3>
      { christmas && <Snow /> }
  </SHeader>;
};

const SHeader = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 20px 20px;
  min-height: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`;

export default Header;
