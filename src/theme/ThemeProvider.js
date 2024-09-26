import PropTypes from 'prop-types';
import React, { useState } from 'react';
// @mui
import { CssBaseline, IconButton } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import { alpha } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import getSignUpTheme from './getSignUpTheme';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {
    if (localStorage.getItem("theme") === 'light')
      localStorage.setItem('theme', 'dark');
    else
      localStorage.setItem('theme', 'light');
  }
});

export const DarkToggle = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <IconButton
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon color="action" />
      ) : (
        <Brightness4Icon color="action" />
      )}
    </IconButton>
  );
}

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "light")
  const theme = createTheme(getSignUpTheme(mode));
  const DarkToggle = () => {
    // const theme = useTheme();
    // const colorMode = React.useContext(ColorModeContext);

    return (
      <IconButton
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon color="action" />
        ) : (
          <Brightness4Icon color="action" />
        )}
      </IconButton>
    );
  }
  const ColorModeContext = React.createContext({
    toggleColorMode: () => {
      if (localStorage.getItem("theme") === 'light') {
        setMode('dark')
        localStorage.setItem('theme', 'dark');
      }

      else {
        localStorage.setItem('theme', 'light');
        setMode('light')
      }

    }
  });
  const colorMode = React.useContext(ColorModeContext);

  //   theme.components = componentsOverride(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <StyledEngineProvider injectFirst>
        <MUIThemeProvider theme={theme}>
          <CssBaseline />
          {/* This is the dark toggle displayed in top left cornor of the application */}
          {/* <DarkToggle /> */}
          {/* <GlobalStyles /> */}
          {children}
        </MUIThemeProvider>
      </StyledEngineProvider>
    </ColorModeContext.Provider>
  );
}
