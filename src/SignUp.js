import React from "react";
import { Link } from "react-router-dom";
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

const LogIn = () => {
  const card = (
    <React.Fragment>
      <CardContent>
        <TextField id="standard-basic" label="Username" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Password" variant="standard" />
        <br />
        <TextField id="standard-basic" label="First Name" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Last Name" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Email" variant="standard" />
        <br />
        <Button color="secondary">Sign Up</Button>
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
        <Box>
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
