import React from "react";
import styled from "styled-components";

const Header = () => {
  return <SHeader>
      <h3>❤</h3>
      <h3>Fødselsdagsbeskedgenerator<sup>™</sup></h3>
  </SHeader>;
};

const SHeader = styled.div`
  background-color: ${(props) => props.theme.colors.red};
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
