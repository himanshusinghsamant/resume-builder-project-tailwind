import React from "react";
import { NavLink } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";


const Details_filling = () => {
  return (
      <div>
        <div className="form-container w-[100%] h-[auto]  bg-slate-100 mt-[13%] pt-4 md:mt-16 lg:mt-0 md:py-5 md:flex">
        <header className="bg-white mx-3 border-2 rounded-full md:w-[250px] md:rounded md:border-none md:h-[200px]">
            <ul className="mx-10 px-4 space-y-2 py-4 font-semibold md:mx-3">
              <li className="border-b tracking-widest">
                <NavLink to={"personal-info"}>Personal Info</NavLink>
              </li>
              <li className="border-b tracking-widest">
                <NavLink to={"work-exp"}>Work Experience</NavLink>
              </li>
              <li className="border-b tracking-widest">
                <NavLink to={"education"}>Education</NavLink>
              </li>
              <li className="border-b tracking-widest">
                <NavLink to={"key-skills"}>Key Skills</NavLink>
              </li>
            </ul>
          </header>

          {/* ----------------------> */}
          <main className="mt-10 mx-5 px-4 bg-white md:w-[70vw] md:mt-1">
            <PersonalInfo/>
          </main>
          {/* ---------------------------> */}
        </div>
      </div>
  );
};

export default Details_filling;
