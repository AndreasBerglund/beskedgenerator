import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as ChristmasTree }  from "../icons/christmas-tree.svg";

export const InputWithLabel = ({ label, ...props }) => {
  return (
    <BasicInput>
      <label>{label}</label>
      <input {...props} />
    </BasicInput>
  );
};

export const IconContainer = ({children, ...props}) => {
  return (
    <SIconContainer {...props} >
      {children}
    </SIconContainer>
  )
}

const SIconContainer = styled.div`
  
  svg {
    width :40px;
    height: 40px;
    
    ${props=>!props.checked && `
    filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(1); /* Google Chrome & Safari 6+ */
    -webkit-transition: all .5s;
    `}
  }

`;

export const CheckBoxWithLabel = ({ label, checkmark, ...props }) => {
  return (
    <BasicInput>
      <p>{label}</p>
      <BasicCheckBox checkmark={checkmark}>
        <label>
          <input {...props} />
          <span className="checkmark">
            <IconContainer {...props}>
              <ChristmasTree />
            </IconContainer>
          </span>
        </label>
      </BasicCheckBox>
    </BasicInput>
  );
};

export const BaseInputStyling = css`
  padding: 20px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  background-color: transparent;
  font-size: 20px;
  border-radius: 5px;
`;

export const DropShadow = css`
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.25s;
  &:active {
    transition: box-shadow 0.25s;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.15);
  }
`;

export const Button = styled.button`
  ${BaseInputStyling};
  ${DropShadow};
  background-color: ${(props) => props.theme.colors.primary};
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

export const BasicCheckBox = styled.div`
  border: none !important;
  padding: 24px 0 0 0 !important;
  label {
    display: block;
    position: relative !important;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
    &:hover input ~ .checkmark {
      background-color: #ccc;
    }
    input:checked ~ .checkmark {
      background-color: #0d1757;
      &:after {
        display: block;
      }
    }
    .checkmark:after {
      ${props=>props.checkmark && `
      left: 30px;
      top: 20px;
      width: 14px;
      height: 29px;
      border: solid #fff;
      border-width: 0 7px 7px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      `}
    }
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    ${DropShadow};
    height: 74px;
    width: 74px;
    border-radius: 5px;
    background-color: #eee;
    display : flex;
    align-items: center;
    justify-content: center;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export const BasicInput = styled.div`
  position: relative;
  margin-top: 30px;
  label,
  p {
    font-size: 14px;
    position: absolute;
    top: -24px;
  }
  input,
  ${BasicCheckBox} {
    width: 100%;
    color: ${(props) => props.theme.colors.dg};
    ::placeholder {
      color: ${(props) => props.theme.colors.mg};
    }
    &:disabled {
      background-color: ${props=>props.theme.colors.lg};
      color: ${props=>props.theme.colors.mg};
      border-color: ${props=>props.theme.colors.mg};
      cursor: not-allowed;
    }
    ${BaseInputStyling};
  }
`;
