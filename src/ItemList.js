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
import React, { useEffect, useState, useContext } from "react";
import CompanyCard from "./CompanyCard";
import JobCard from "./JobCard";
import "./CompanyList.css";
import TokenContext from "./TokenContext";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const ItemList = ({ jobsOrCompanies }) => {
  const navigate = useNavigate();
  const token = useContext(TokenContext);
  if (token !== null) {
    console.log("logged in");
  } else {
    console.log("logged out");
    navigate("/login");
  }

  const [items, setItems] = useState([]);
  const [searched, setSearched] = useState(null);

  const searchItems = (searchTerm) => {
    console.log(items);
    const searchedItems = items.filter((item) => {
      // console.log(typeof searchTerm.searchTerm);
      // console.log(typeof item.name);
      // return item.name.toLowerCase().includes(searchTerm.searchTerm);
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
    console.log(searchedItems);
    setSearched(searchedItems);
  };

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
    console.log("DATA FETCHED!!");
  }, [jobsOrCompanies]);

  const companies = () => {
    return (
      <>
        <SearchBar searchItems={searchItems} companyOrJob="Company" />
        {searched
          ? searched.map((item) => (
              <CompanyCard key={item.handle} item={item} />
            ))
          : items.map((item) => <CompanyCard key={item.handle} item={item} />)}
      </>
    );
  };
  const jobs = () => {
    return (
      <>
        <SearchBar searchItems={searchItems} companyOrJob="Job" />

        {searched
          ? searched.map((item) => <JobCard key={item.handle} item={item} />)
          : items.map((item) => <JobCard key={item.handle} item={item} />)}
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
