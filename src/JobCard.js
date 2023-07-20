/** Job Card
 *
 * will have job detail on card and a button to apply for job
 */
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";

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

const JobCard = ({ item }) => {
  const job = item;

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h5"
          component="a"
          color="secondary"
          sx={{ textDecoration: "none" }}
        >
          {job.title}
        </Typography>
        <br />
        <Typography
          component="a"
          href={`/companies/${job.companyHandle}`}
          sx={{ mb: 1.5, textDecoration: "none" }}
          color="text.secondary"
        >
          Company: {job.companyName}
        </Typography>
        <br />
        <Typography component="span" color="text.secondary">
          Salary: {job.salary ? `$${job.salary}` : "To be determined"}
        </Typography>
        <Typography component="span" sx={{ ml: 1.5 }} color="text.secondary">
          Equity: {job.equity ? job.equity : "0"}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "60%" }}>
        <Card variant="outlined" sx={{ backgroundColor: "rgb(225, 225, 225)" }}>
          {card}
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default JobCard;
