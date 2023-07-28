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
import logo from "./img/jobly-logo.png";
import "./Forms.css";
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

const LogIn = ({ login }) => {
  const navigate = useNavigate();
  const token = useContext(TokenContext);
  if (token !== null) {
    navigate("/");
  }
  const INITIAL_STATE = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    let { id, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    await login(formData);
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
          Log In to Jobly
        </Typography>
        <br />
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
          type="password"
          variant="standard"
          value={formData.password}
          onChange={handleChange}
          sx={{ marginY: ".25em" }}
        />
        <br />
        <Button
          color="secondary"
          variant="contained"
          sx={{ margin: "2em" }}
          onClick={() => handleSubmit()}
        >
          Log In
        </Button>
        <br />
        <Link className="change-form" to="/signup">
          No account? Sign up here
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
            sx={{ padding: "1.5em", backgroundColor: "rgb(225, 225, 225)" }}
          >
            {card}
          </Card>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default LogIn;
