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
  Button,
} from "@mui/material";
import JoblyApi from "./api";

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

const JobCard = ({ item, jobsApplied }) => {
  console.log(item.id);
  console.log(jobsApplied);
  const job = item;

  const apply = async () => {
    const username = localStorage.getItem("username");
    const data = await JoblyApi.apply(username, item.id);
    console.log(data);
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h5"
          component="a"
          color="secondary"
          sx={{
            textDecoration: "none",
            fontSize: "1.5em",
          }}
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
        <br />
        <Button
          disabled={jobsApplied.includes(job.id) ? true : false}
          variant="outlined"
          color="secondary"
          onClick={() => apply(job.id)}
        >
          {jobsApplied.includes(job.id) ? " APPLIED " : "APPLY"}
        </Button>
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
