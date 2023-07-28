import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import "./Forms.css";
import logo from "./img/jobly-logo.png";
import TokenContext from "./TokenContext";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#28282a",
      darker: "#28282a",
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

const LogIn = ({ signUp }) => {
  const navigate = useNavigate();
  const token = useContext(TokenContext);
  if (token !== null) {
    navigate("/");
  }

  const INITIAL_STATE = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    console.log(e);
    let { id, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    await signUp(formData);
    setFormData(INITIAL_STATE);
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <img src={logo} width="100em" alt="jobly logo" />
        <br />
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ fontSize: "x-large" }}
        >
          Create Account
        </Typography>
        <TextField
          fullWidth
          id="username"
          label="Username"
          variant="standard"
          value={formData.username}
          onChange={handleChange}
          sx={{ marginY: ".25em" }}
        />
        <br />
        <TextField
          fullWidth
          id="password"
          label="Password"
          variant="standard"
          value={formData.password}
          onChange={handleChange}
          sx={{ marginY: ".25em" }}
        />
        <br />
        <TextField
          fullWidth
          id="firstName"
          label="First Name"
          variant="standard"
          value={formData.firstName}
          onChange={handleChange}
          sx={{ marginY: ".25em" }}
        />
        <br />
        <TextField
          fullWidth
          id="lastName"
          label="Last Name"
          variant="standard"
          value={formData.lastName}
          onChange={handleChange}
          sx={{ marginY: ".25em" }}
        />
        <br />
        <TextField
          fullWidth
          id="email"
          label="Email"
          variant="standard"
          value={formData.email}
          onChange={handleChange}
          sx={{ marginY: ".25em" }}
        />
        <br />
        <Button
          color="secondary"
          variant="contained"
          onClick={() => handleSubmit()}
          sx={{ margin: "1em" }}
        >
          Sign Up
        </Button>
        <br />
        <Link className="change-form" to="/login">
          Have an account? Log in here
        </Link>
      </CardContent>
    </React.Fragment>
  );

  return (
    <div className="Forms">
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "50vw" }}>
          <Card
            variant="outlined"
            sx={{
              padding: "1.5em",
              backgroundColor: "rgb(225, 225, 225)",
            }}
          >
            {card}
          </Card>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default LogIn;
