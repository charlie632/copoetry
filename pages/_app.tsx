import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { FirebaseContext, Firebase } from "../src/Firebase";
import {
  ThemeProvider as ThemeStyled,
  createGlobalStyle
} from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    
    font-family: 'Fira Mono', monospace !important;
  }
`;

const themeStyled = {
  main: "#000",
  background: "#fff"
};
class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      if (jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>copoetry</title>
        </Head>
        <FirebaseContext.Provider value={new Firebase()}>
          <ThemeStyled theme={themeStyled}>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <GlobalStyles />
              <Component {...pageProps} />
            </ThemeProvider>
          </ThemeStyled>
        </FirebaseContext.Provider>
      </Container>
    );
  }
}

export default MyApp;
