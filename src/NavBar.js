/** Nav Bar
 *
 * link to welcome page with Jobly logo
 *
 * link to companies, jobs, profile, logout
 */

import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
// import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

import "./NavBar.css";

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

const pages = ["Companies", "Jobs"];
const loggedIn = true;

const NavBar = () => {
  const loggedInNav = () => {
    return (
      <>
        <Box
          sx={{
            flexGrow: 1,
            gap: 2,
            margin: "1em",
            display: { xs: "flex", md: "flex" },
          }}
        >
          {pages.map((page) => (
            <Link className="NavBar-pages" to={`/${page}`}>
              {page}
            </Link>
          ))}
        </Box>
        <Link className="NavBar-auth logout" to={`/signup`}>
          Log out
        </Link>
      </>
    );
  };

  const loggedOutNav = () => {
    return (
      <div className="loggedOutNav">
        <Link className="NavBar-auth login" to={`/login`}>
          Log in
        </Link>

        <Link className="NavBar-auth signup" to={`/signup`}>
          Sign up
        </Link>
      </div>
    );
  };

  return (
    <div style={{ zIndex: 10, position: "absolute", top: 0, width: "100vw" }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <Container maxWidth="xl" className="container">
            <Toolbar disableGutters className="toolBar">
              {/* <MenuItem className="menuItems"> */}
              <div className="menuItems">
                {loggedIn ? null : <div className="otherSide"></div>}

                <Link className="NavBar-title" to={`/`}>
                  Jobly
                </Link>
                {loggedIn ? loggedInNav() : loggedOutNav()}
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default NavBar;
