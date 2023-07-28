import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ companyOrJob, searchItems }) => {
  const INITIAL_STATE = { searchTerm: "" };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchItems(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        backgroundColor: "rgb(225, 225, 225)",
      }}
    >
      <InputBase
        value={formData.searchTerm}
        name="searchTerm"
        onChange={handleChange}
        sx={{ ml: 1, flex: 1 }}
        placeholder={`Search ${companyOrJob}`}
        inputProps={{ "aria-label": `Search ${companyOrJob}` }}
      />
      <IconButton
        type="button"
        onClick={handleSubmit}
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
