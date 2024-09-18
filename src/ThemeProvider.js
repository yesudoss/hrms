import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
// @mui
import { CssBaseline, IconButton } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
// import { ERROR, GREY, INFO, PRIMARY, SECONDARY, SUCCESS, WARNING, DARK, ROOT } from './palette';
// import GlobalStyles from './globalStyles';
import { alpha } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import getSignUpTheme from './theme/getSignUpTheme';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export const ColorModeContext = React.createContext({ toggleColorMode: () => {
  const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
  localStorage.setItem('themeMode', newMode);
 } });

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
//   const [mode, setMode] = useState(sessionStorage.getItem("theme") || "light")

const colorMode = React.useContext(ColorModeContext);
  const theme = createTheme(getSignUpTheme(sessionStorage.getItem("theme") || "light"));
//   theme.components = componentsOverride(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <StyledEngineProvider injectFirst>
        <MUIThemeProvider theme={theme}>
          <CssBaseline />
          <DarkToggle />
          {/* <GlobalStyles /> */}
          {children}
        </MUIThemeProvider>
      </StyledEngineProvider>
    </ColorModeContext.Provider>
  );
}
