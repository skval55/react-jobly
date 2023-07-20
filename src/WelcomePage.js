/** Welcome page if logged in welcomes user
 * if not logged in will promt user to login or sign up
 *
 */

import React from "react";
import { Button, Typography, ThemeProvider } from "@mui/material/";
import { createTheme } from "@mui/material/styles";

import "./WelcomePage.css";

const loggedIn = false;

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#28282a",
      darker: "#053e85",
    },
    secondary: {
      main: "#ff3366",
    },
    neutral: {
      main: "#fff",
      contrastText: "#fff",
    },
  },
});

const WelcomePage = () => {
  const loggedOutPage = () => {
    return (
      <>
        <Button variant="contained" color="secondary" size="large">
          register{" "}
        </Button>
        <p>Enjoy the experience</p>
      </>
    );
  };
  const loggedInPage = () => {
    return (
      <Typography
        variant="h4"
        noWrap
        component="h4"
        sx={{
          mr: 2,
          display: { xs: "relative", md: "relative" },

          fontWeight: 400,
          letterSpacing: ".3rem",
          color: "white",
          textDecoration: "none",
        }}
      >
        Welcome Back user
      </Typography>
    );
  };

  return (
    <div className="WelcomePage">
      <ThemeProvider theme={theme}>
        <Typography
          variant="h4"
          noWrap
          component="h4"
          sx={{
            mr: 2,
            display: { xs: "relative", md: "relative" },

            fontWeight: 600,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          FIND YOUR DREAM JOB
        </Typography>

        <p className="p-large">All jobs in one place</p>
        {loggedIn ? loggedInPage() : loggedOutPage()}
      </ThemeProvider>
    </div>
  );
};

export default WelcomePage;
