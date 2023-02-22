import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
// import ReactGA from "react-ga";

// const TRACKING_ID ="";
// ReactGA.initialize(TRACKING_ID);

let theme = createTheme({
  typography: {
    fontFamily: ["Roboto"].join(","),
  },
  palette: {
    type: "light",
    primary: {
      main: "#861DDD",
    },
    primaryLight: {
      main: "#EDDDF6",
    },
    secondary: {
      main: "#665A6F",
    },
    error: {
      main: "#ba1b1b",
    },
    charcoal: {
      main: "#333333",
    },
    background: {
      default: "#f9f9f9",
    },
  },
});

theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
