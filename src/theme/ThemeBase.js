import React from "react";
import Container from "@mui/material/Container";
// import MenuLandingPage from "../../Menu/views/MenuLandingPage";
import ThemeProvider from "./ThemeProvider";


export default function ThemeBase({ children }) {

  return (
    <ThemeProvider>
      {/* <MenuLandingPage> */}
        <Container maxWidth="xl">
          {children}
        </Container>
      {/* </MenuLandingPage> */}
    </ThemeProvider>
  );
}
