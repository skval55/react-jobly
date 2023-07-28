// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import WelcomePage from "./WelcomePage";
import ItemList from "./ItemList";
import CompanyPage from "./CompanyPage";
import UserInfoPage from "./UserInfoPage";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import JoblyApi from "./api";
import React, { useState } from "react";
import TokenContext from "./TokenContext";

function App() {
  const [userToken, setUserToken] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const updateToken = (token) => {
    setUserToken(token);
  };

  const login = async (data) => {
    const token = await JoblyApi.login(data);
    setUserToken(token.token);
    setUsername(data.username);
    localStorage.setItem("token", token.token);
    localStorage.setItem("username", data.username);
    console.log(userToken);
    console.log("************usertoken**************");
  };
  const signUp = (data) => {
    const token = JoblyApi.signUp(data);
    setUserToken(token.token);
    setUsername(data.username);
    localStorage.setItem("token", token.token);
    localStorage.setItem("usename", data.username);
    console.log(userToken);
    console.log("************newusertoken**************");
  };
  const logOut = () => {
    setUserToken(null);
    localStorage.clear();
    console.log(userToken);
    console.log("**************logoutuser**************");
  };
  return (
    <div className="App">
      <div className="layer">
        <BrowserRouter>
          <TokenContext.Provider value={userToken}>
            <NavBar logOut={logOut} />
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/login" element={<LogIn login={login} />} />
              <Route path="/signup" element={<SignUp signUp={signUp} />} />
              <Route
                path="/companies"
                element={<ItemList jobsOrCompanies="companies" />}
              />
              <Route
                path="/jobs"
                element={<ItemList jobsOrCompanies="jobs" />}
              />
              <Route path="/companies/:handle" element={<CompanyPage />} />
              {/* <Route path="/profile" element={<UserInfoPage />} /> */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </TokenContext.Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
