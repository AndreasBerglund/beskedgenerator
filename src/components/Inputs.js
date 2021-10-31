import React from "react";
import styled, { css } from "styled-components";

export const InputWithLabel = ({ label, ...props }) => {
  return (
    <BasicInput>
      <label>{label}</label>
      <input {...props} />
    </BasicInput>
  );
};

export const BaseInputStyling = css`
  padding: 20px;
  border: 2px solid ${(props) => props.theme.colors.red};
  background-color: transparent;
  font-size: 20px;
  border-radius: 5px;
`;

export const DropShadow = css`
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  transition: box-shadow .25s;
  &:active { 
      transition: box-shadow .25s;
      box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.15);;
  }
`;

export const Button = styled.button`
  ${BaseInputStyling};
  ${DropShadow};
  background-color: ${(props) => props.theme.colors.red};
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  margin-top: 30px;
  cursor: pointer;
`;

export const SquareButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${BaseInputStyling};
  ${DropShadow};
  height: 74px;
  width: 74px;
  border-color: ${(props) => props.theme.colors.lg};
  background-color: ${(props) => props.theme.colors.lg};
  margin-top: 30px;
`;

export const BasicInput = styled.div`
  position: relative;
  margin-top: 30px;
  label {
    font-size: 14px;
    position: absolute;
    top: -24px;
  }
  input {
    width: 100%;
    color: ${(props) => props.theme.colors.dg};
    ::placeholder {
      color: ${(props) => props.theme.colors.mg};
    }
    ${BaseInputStyling};
  }
`;
