/** Welcome page if logged in welcomes user
 * if not logged in will promt user to login or sign up
 *
 */

import React, { useContext } from "react";
import { Button, Typography } from "@mui/material/";
import { useNavigate } from "react-router-dom";
import TokenContext from "./TokenContext";

import "./WelcomePage.css";

const WelcomePage = () => {
  const navigate = useNavigate();
  const token = useContext(TokenContext);
  let loggedIn = true;
  if (token === null) {
    loggedIn = false;
  } else {
    loggedIn = true;
  }

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const loggedOutPage = () => {
    return (
      <>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={(e) => handleClick(e)}
        >
          register{" "}
        </Button>
        <p>Enjoy the experience</p>
      </>
    );
  };
  const loggedInPage = () => {
    let username = localStorage.getItem("username");
    username = username.charAt(0).toUpperCase() + username.slice(1);
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
        Welcome Back {username}
      </Typography>
    );
  };

  return (
    <div className="WelcomePage">
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
    </div>
  );
};

export default WelcomePage;
