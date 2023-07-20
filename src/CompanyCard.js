/** Company Card
 *
 * list some details about company on company card that can be used of a list of all the
 * companies on a their own cards
 *
 * link to specific company page
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

const CompanyCard = ({ item }) => {
  const company = item;

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h5"
          component="a"
          href={`/companies/${company.handle}`}
          color="secondary"
          sx={{ textDecoration: "none" }}
        >
          {company.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Employees: {company.numEmployees}
        </Typography>
        <Typography variant="body2">{company.description}</Typography>
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

export default CompanyCard;