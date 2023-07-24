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

function App() {
  return (
    <div className="App">
      <div className="layer">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/companies"
              element={<ItemList jobsOrCompanies="companies" />}
            />
            <Route path="/jobs" element={<ItemList jobsOrCompanies="jobs" />} />
            {/* <Route path="/companies/:handle" element={<CompanyPage />} /> */}
            {/* <Route path="/profile" element={<UserInfoPage />} /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
