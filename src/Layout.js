import React, { useContext } from 'react'
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import { StateMainContext } from './context/MainProvider';
import { blueTheme, redTheme } from "./theme";

export const Layout = () => {
    const { christmas } = useContext(StateMainContext);
    return (
        <ThemeProvider theme={christmas ? blueTheme : redTheme }>
        <div className="App">
          <Header />
          <Main />
        </div>
      </ThemeProvider>
    )
}
