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
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CompanyCard = ({ item }) => {
  const navigate = useNavigate();
  const company = item;

  const card = (
    <React.Fragment>
      <CardContent>
        <Button
          size="large"
          variant="text"
          onClick={() => navigate(`/companies/${company.handle}`)}
          color="secondary"
          sx={{ textDecoration: "none", fontSize: "1.25em" }}
        >
          {company.name}
        </Button>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Employees: {company.numEmployees}
        </Typography>
        <Typography variant="body2">{company.description}</Typography>
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

export default CompanyCard;
