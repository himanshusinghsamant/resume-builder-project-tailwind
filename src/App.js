import React from "react";
// import Template_1 from './templates/Template_1';
// import Template_2 from './templates/Template_2';
// import Template_3 from './templates/Template_3';
// import Template_4 from './templates/Template_4';
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import MyResumes from "./components/MyResumes";
import AboutUs from "./components/AboutUs";
import Details_filling from "./form-components/Details_filling";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonalInfo from "./form-components/PersonalInfo";
import WorkExperience from "./form-components/WorkExp";
import Education from "./form-components/Education";
import KeySkills from "./form-components/KeySkills";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <Template_1/> */}
        <Routes>
          <Route exact path="/" Component={Dashboard} />
          <Route path="my-resumes" Component={MyResumes} />
          <Route path="about-us" Component={AboutUs} />
          <Route path="details-filling" Component={Details_filling} />

          <Route path="personal-info" Component={PersonalInfo} />
          <Route path="work-exp" Component={WorkExperience} />
          <Route path="education" Component={Education} />
          <Route path="key-skills" Component={KeySkills} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
