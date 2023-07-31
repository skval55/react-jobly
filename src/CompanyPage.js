/** Company page that will have a list of all associated jobs to this company
 *
 * Option to also use general list component to list all associated jobs
 *
 */

import React, { useEffect, useState } from "react";
import JoblyApi from "./api";
import { useParams } from "react-router-dom";
import JobCard from "./JobCard";
import "./CompanyPage.css";

const CompanyPage = ({ jobsApplied }) => {
  const [company, setCompany] = useState({});
  const { handle } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await JoblyApi.getCompany(handle);
      setCompany(data);
    };
    fetchData();
  }, []);

  const jobs = () => {
    if (company.jobs) {
      return (
        <>
          {company.jobs.map((job) => (
            <JobCard key={job.handle} item={job} jobsApplied={jobsApplied} />
          ))}
        </>
      );
    } else return;
  };

  return (
    <div className="CompanyPage">
      {company ? (
        <div>
          <h1>{company.name}</h1>
          <p>{company.description}</p>
          <div className="CompanyPage-jobs">{jobs()}</div>
        </div>
      ) : (
        <h1> Loading... </h1>
      )}
    </div>
  );
};

export default CompanyPage;
