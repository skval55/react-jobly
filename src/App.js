// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Navigate, json } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import WelcomePage from "./WelcomePage";
import ItemList from "./ItemList";
import CompanyPage from "./CompanyPage";
import UserInfoPage from "./UserInfoPage";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import JoblyApi from "./api";
import React, { useEffect, useState } from "react";
import TokenContext from "./TokenContext";
import { createTheme, ThemeProvider } from "@mui/material";

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

function App() {
  const [userToken, setUserToken] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  const [jobsApplied, setJobsApplied] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo);
    console.log("*********userinfo************");
    if (userInfo) {
      setJobsApplied(userInfo.user.applications);
    }
  }, []);

  const fetchUserData = async () => {
    const data = await JoblyApi.getUser(username);
    setUserInfo(data);
    const userInfoJson = JSON.stringify(data);
    localStorage.setItem("userInfo", userInfoJson);
  };

  useEffect(() => {
    const fetchData = async () => {
      const companiesData = await JoblyApi.getCompanys();
      setCompanies(companiesData.companies);
      const jobsData = await JoblyApi.getJobs();
      setJobs(jobsData.jobs);
    };

    fetchData();
  }, []);

  const updateUser = async (data) => {
    const response = await JoblyApi.updateUser(username, data);
    setUserInfo(response);
    fetchUserData();
  };

  const login = async (data) => {
    const token = await JoblyApi.login(data);
    setUserToken(token.token);
    setUsername(data.username);
    localStorage.setItem("token", token.token);
    localStorage.setItem("username", data.username);
    fetchUserData();
  };
  const signUp = (data) => {
    const token = JoblyApi.signUp(data);
    setUserToken(token.token);
    setUsername(data.username);
    localStorage.setItem("token", token.token);
    localStorage.setItem("username", data.username);
    fetchUserData();
  };
  const logOut = () => {
    setUserToken(null);
    localStorage.clear();
  };
  return (
    <div className="App">
      <div className="layer">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <TokenContext.Provider value={userToken}>
              <NavBar logOut={logOut} username={username} />
              <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={<LogIn login={login} />} />
                <Route path="/signup" element={<SignUp signUp={signUp} />} />
                <Route
                  path="/companies"
                  element={
                    <ItemList jobsOrCompanies="companies" items={companies} />
                  }
                />
                <Route
                  path="/jobs"
                  element={
                    <ItemList
                      jobsOrCompanies="jobs"
                      items={jobs}
                      jobsApplied={jobsApplied}
                    />
                  }
                />
                <Route
                  path="/companies/:handle"
                  element={<CompanyPage jobsApplied={jobsApplied} />}
                />
                <Route
                  path="/profile"
                  element={
                    <UserInfoPage userInfo={userInfo} updateUser={updateUser} />
                  }
                />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </TokenContext.Provider>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
