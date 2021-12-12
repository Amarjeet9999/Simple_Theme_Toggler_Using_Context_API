import React from "react";
import styled from "styled-components";
import { ThemeContext } from "../Context/ThemeContext";

export const Home = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const setThemeFunc = () => {
    if (theme === "black") {
      setTheme("white");
    } else {
      setTheme("black");
    }
  };
  return (
    <>
      <Button theme={theme}>
        <button onClick={setThemeFunc}>Change Color</button>
      </Button>
      <Main theme={theme}>
        <P theme={theme}>This is a Simple Context API learning App</P>
      </Main>
    </>
  );
};

const Main = styled.div`
  height: 400px;
  width: 400px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: ${(props) => props.theme};
  border: ${(props) =>
    props.theme === "white" ? "2px solid black" : "2px solid white"};
`;

const P = styled.p`
  position: absolute;
  height: 200px;
  width: 200px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 20px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-weight: 800;
  border: ${(props) =>
    props.theme === "white" ? "2px solid black" : "2px solid white"};
  color: ${(props) => (props.theme === "white" ? " black" : "white")};
`;

const Button = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  position: absolute;

  & button {
    padding: 0 10px;
    height: 50px;
    border: none;
    outline: none;
    font-size: 20px;
    font-weight: 800;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
    background-color: ${(props) => props.theme};
    border: ${(props) =>
      props.theme === "white" ? "2px solid black" : "2px solid white"};
    color: ${(props) => (props.theme === "white" ? "black" : "white")};
  }
`;
