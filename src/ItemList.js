/** List of all the companies using the CompanyCard component
 * it will also use the SearchBar component to search through the companies
 *
 * Api call for all the companies a
 * with Searchbar Form use arr.findall or .filter() kinda meathod to  filter though data
 * pass that function to searchbar for reuse
 *
 * option as well to make general list component to use for jobs as well.
 *  */

import React, { useEffect, useState, useContext } from "react";
import CompanyCard from "./CompanyCard";
import JobCard from "./JobCard";
import "./CompanyList.css";
import TokenContext from "./TokenContext";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Typography } from "@mui/material/";

const ItemList = ({ jobsOrCompanies, items, jobsApplied = [] }) => {
  const navigate = useNavigate();
  const token = useContext(TokenContext);
  if (token !== null) {
  } else {
    navigate("/login");
  }

  const [searched, setSearched] = useState(null);

  useEffect(() => {
    setSearched(null);
  }, [items]);

  const searchItems = (searchTerm) => {
    const searchedItems = items.filter((item) => {
      if (item.title) {
        return item.title
          .toLowerCase()
          .includes(searchTerm.searchTerm.toLowerCase());
      } else if (item.name) {
        return item.name
          .toLowerCase()
          .includes(searchTerm.searchTerm.toLowerCase());
      }
    });

    setSearched(searchedItems);
  };

  const companies = () => {
    return (
      <>
        <SearchBar searchItems={searchItems} companyOrJob="Company" />
        {searched ? (
          searched.length > 0 ? (
            searched.map((item) => (
              <CompanyCard key={item.handle} item={item} />
            ))
          ) : (
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
              No search results
            </Typography>
          )
        ) : (
          items.map((item) => <CompanyCard key={item.handle} item={item} />)
        )}
      </>
    );
  };
  const jobs = () => {
    return (
      <>
        <SearchBar searchItems={searchItems} companyOrJob="Job" />

        {searched ? (
          searched.length > 0 ? (
            searched.map((item) => (
              <JobCard
                key={item.handle}
                item={item}
                jobsApplied={jobsApplied}
              />
            ))
          ) : (
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
              No search results
            </Typography>
          )
        ) : (
          items.map((item) => (
            <JobCard key={item.handle} item={item} jobsApplied={jobsApplied} />
          ))
        )}
      </>
    );
  };

  return (
    <div className="companies">
      {jobsOrCompanies === "companies" ? companies() : jobs()}
    </div>
  );
};

export default ItemList;
