import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    twilightLavender: "#7c526a",
    shadowBlue: "#7593b0",
    naplesYellow: " #ffe66d",
    darkSeaGreen: "#7eba94",
    madderLake: "#c33b40",
  },
  fonts: ["sans-serif", "Roboto"],
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
