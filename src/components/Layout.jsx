import React from "react";
import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";
import Nav from "./Nav";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;

export default function Layout({ children }) {
  return (
    <Theme>
      <GlobalStyle />
      <Nav />
      {children}
    </Theme>
  );
}
