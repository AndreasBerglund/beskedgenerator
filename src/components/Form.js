import React, { useContext } from "react";
import styled from "styled-components";
import { DispatchMainContext, StateMainContext } from "../context/MainProvider";
import { getRandomCheckText } from "../generator";
import { Button, CheckBoxWithLabel, InputWithLabel, SquareButton } from "./Inputs";
export const Form = () => {
  const { name, age, memory, greeting, christmas, copied } = useContext(StateMainContext);
  const dispatch = useContext(DispatchMainContext);

  //update inputs
  const handleChange = (e) => {
    //hande input change
    dispatch({ type: "onchange", payload: [e.target.name, e.target.value] });
  };

  //copy text
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(greeting);
    dispatch({ type: "copy", payload: true });
    setTimeout(() => {
      dispatch({ type: "copy", payload: false });
    }, 2000);
  };

  return (
    <SForm>
      <div>
        <InputWithLabel
          label="Inkluder navn"
          type="text"
          placeholder="Navn"
          name="name"
          value={name}
          disabled={christmas}
          onChange={handleChange}
        />

        <InputWithLabel
          label="Inkluder alder"
          type="number"
          placeholder="Alder"
          name="age"
          disabled={christmas}
          value={age || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <CheckBoxWithLabel
          label="JUUUL!!"
          type="checkbox"
          name="christmas"
          checked={christmas}
          onChange={handleChange}
          checkmark={false}
        />
        <InputWithLabel
          label="Inkluder fælles minde"
          type="text"
          placeholder="Fælles minde"
          name="memory"
          disabled={christmas}
          value={memory}
          onChange={handleChange}
        />
      </div>
      <div>
        <Button onClick={copyToClipBoard}>
          <span>{copied ? `${getRandomCheckText()}` : christmas ? "Hohoho " : "Kopier besked "}</span>
          <span style={{ fontWeight: "normal"}}>{copied ? ` 👍` : christmas ? " 🎄" : " 🎁"}</span>

        </Button>
        <SquareButton onClick={() => dispatch({ type: "updategreeting" })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z" />
          </svg>
        </SquareButton>
      </div>
    </SForm>
  );
};

const SForm = styled.div`
  & > div {
    &:first-child {
      display: flex;
      > div:first-child {
        flex: 1;
        margin-right: 14px;
      }
      > div:last-child {
        width: 110px;
      }
    }
    &:nth-child(2) {
      display: flex;
      > div:first-child {
        width: 74px;
      }
      > div:last-child {
        flex: 1;
        margin-left: 14px;
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
