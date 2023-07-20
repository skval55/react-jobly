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
import Button from "@mui/material/Button";
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
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
          {pages.map((page) => (
            // <Button
            //   key={page}
            //   href={`/${page.toLowerCase()}`}
            //   sx={{ my: 2, color: "white", display: "block" }}
            // >
            //   {page}
            // </Button>
            <Link to={`/${page}`}>{page}</Link>
          ))}
        </Box>
        <Typography
          textAlign="center"
          color="secondary"
          sx={{ fontWeight: 700 }}
        >
          Log Out
        </Typography>
      </>
    );
  };

  const loggedOutNav = () => {
    return (
      <div className="loggedOutNav">
        <Typography
          textAlign="center"
          component="a"
          href="/login"
          sx={{ fontWeight: 700, color: "inherit", textDecoration: "none" }}
        >
          Log In
        </Typography>
        <Typography
          component="a"
          href="/signup"
          textAlign="center"
          color="secondary"
          sx={{ fontWeight: 700, textDecoration: "none" }}
        >
          Sign up
        </Typography>
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
                <Typography
                  variant="h4"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "flex" },

                    fontWeight: 400,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Jobly
                </Typography>
                {loggedIn ? loggedInNav() : loggedOutNav()}
              </div>
              {/* </MenuItem> */}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default NavBar;
