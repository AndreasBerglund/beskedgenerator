import React from "react";
import styled from "styled-components";
import githubLogo from "./github.png";

const Footer = () => {
  return (
    <SFooter>
      <a href="https://www.github.com/AndreasBerglund" target="_blank"  rel="noreferrer" >
        <img alt="github mark" src={githubLogo} /> Github
      </a>
    </SFooter>
  );
};

export default Footer;

const SFooter = styled.div`
    padding-top: 30px;
    display: flex;
    justify-content: center;
    a {
        display: flex;
        color: black;
        text-decoration: none;
        justify-content: flex-start;
        align-items: center;
        font-weight: 700;
        opacity: .25;
        img {
            margin-right: 10px;
            width: 24px;
        }
    }
`;
