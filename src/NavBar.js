/** Nav Bar
 *
 * link to welcome page with Jobly logo
 *
 * link to companies, jobs, profile, logout
 */

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import TokenContext from "./TokenContext";

import "./NavBar.css";

const pages = ["Companies", "Jobs"];

const NavBar = ({ logOut, username }) => {
  const navigate = useNavigate();
  const token = useContext(TokenContext);
  let loggedIn = true;
  if (token === null) {
    loggedIn = false;
  } else {
    loggedIn = true;
  }

  const logOutAndNav = () => {
    logOut();
    navigate("/");
  };

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
        <Link className="NavBar-auth logout" to="/profile">
          Profile
        </Link>
        <Link
          className="NavBar-auth logout"
          onClick={() => logOutAndNav()}
          to="/"
        >
          Log out {username}
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
    </div>
  );
};

export default NavBar;
