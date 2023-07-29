import React from "react";
import { Link } from "react-router-dom";

const MyResumes = () => {
  return (
    <div>
      <div className="null-message text-center mt-[30%] md:mt-[5%]">
        <h1 className="mb-7 text-red-600 text-3xl md:tracking-widest md:font-extrabold md:text-5xl">
          No resume is created yet
        </h1>

        <Link className="text-blue-500 " to={"/"}>
          Please select templates and built resume. <br />
          Click here ?
        </Link>
        <div className=" mt-7 temp-img w-[100%] flex justify-center">
          <img
            src="https://resume.supply/build/images/perfect-resume.434c8769.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MyResumes;
