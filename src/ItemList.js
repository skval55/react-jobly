/** List of all the companies using the CompanyCard component
 * it will also use the SearchBar component to search through the companies
 *
 * Api call for all the companies a
 * with Searchbar Form use arr.findall or .filter() kinda meathod to  filter though data
 * pass that function to searchbar for reuse
 *
 * option as well to make general list component to use for jobs as well.
 *  */

import JoblyApi from "./api";
import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import JobCard from "./JobCard";
import "./CompanyList.css";

const ItemList = ({ jobsOrCompanies }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (jobsOrCompanies === "companies") {
        const data = await JoblyApi.getCompanys();
        setItems(data.companies);
      } else {
        const data = await JoblyApi.getJobs();
        setItems(data.jobs);
      }
    };

    fetchData();
  }, []);

  const companies = () => {
    return (
      <>
        {items.map((item) => (
          <CompanyCard key={item.handle} item={item} />
        ))}
      </>
    );
  };
  const jobs = () => {
    return (
      <>
        {items.map((item) => (
          <JobCard key={item.handle} item={item} />
        ))}
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
