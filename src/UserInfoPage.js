import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import "./Forms.css";
import logo from "./img/jobly-logo.png";

const UserInfoPage = ({ userInfo, updateUser }) => {
  const [open, setOpen] = React.useState(false);

  const INITIAL_STATE = {
    firstName: userInfo.user.firstName,
    lastName: userInfo.user.lastName,
    email: userInfo.user.email,
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
    await updateUser(formData);
    setOpen(true);
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
          Edit Account
        </Typography>

        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Changes saved!
          </Alert>
        </Collapse>

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
          Save Changes
        </Button>
      </CardContent>
    </React.Fragment>
  );

  return (
    <div className="Forms">
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
    </div>
  );
};

export default UserInfoPage;
