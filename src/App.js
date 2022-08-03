import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import Grid from './Components/Grid';
import Navbar from './Components/Navbar';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {

  const [theme, setTheme] = useState("light");
  const [toggle, setToggle] = useState(false)

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    toggle === false ? setToggle(true) : setToggle(false)
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <StyledApp>
    <Navbar themeToggler = {themeToggler} toggle = {toggle} />
    <Grid />
    </StyledApp>
    </ThemeProvider>
  );
}

export default App;