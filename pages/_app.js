import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  p {
    margin-bottom: 24px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  form input {
    margin-bottom: 24px;
    background-color: transparent;
    border: 1px solid #333;
    height: 40px;
    border-radius: 4px;
    color: #FFFFFF;
    padding: 0 15px;
  }
  form input:focus {
    outline: none;
    border: 1px solid #8B0000;
  }
  form button {
    height: 40px;
    border-radius: 4px;
    color: #FFFFFF;
    letter-spacing: 1px;
    text-transform: uppercase;
    background-color: #8B0000;
    border: 1px solid #8B0000;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    font-weight: bold;
    letter-spacing: 1.25px;
  }
  form button:focus {
    outline: none;
  }
  form button:disabled {
    background-color: #8b0000b5;
    border-color: #8b0000b5;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
