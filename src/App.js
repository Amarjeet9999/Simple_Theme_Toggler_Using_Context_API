import "./styles.css";
import React from "react";
import { Home } from "./Components/HomePage";
import styled from "styled-components";
import { ThemeContext } from "./Context/ThemeContext";

export default function App() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <AppDiv theme={theme}>
      <Home />
    </AppDiv>
  );
}

const AppDiv = styled.div`
  text-align: center;
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme};
`;
