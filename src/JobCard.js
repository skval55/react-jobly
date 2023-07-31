/** Job Card
 *
 * will have job detail on card and a button to apply for job
 */
import React, { useState } from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import JoblyApi from "./api";

const JobCard = ({ item, jobsApplied }) => {
  const job = item;

  const [applied, setApplied] = useState(false);

  const apply = async () => {
    const username = localStorage.getItem("username");
    const data = await JoblyApi.apply(username, item.id);
    setApplied(true);
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
          disabled={jobsApplied.includes(job.id) || applied ? true : false}
          variant="outlined"
          color="secondary"
          onClick={() => apply(job.id)}
        >
          {jobsApplied.includes(job.id) || applied ? " APPLIED " : "APPLY"}
        </Button>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ width: "60%" }}>
      <Card variant="outlined" sx={{ backgroundColor: "rgb(225, 225, 225)" }}>
        {card}
      </Card>
    </Box>
  );
};

export default JobCard;
