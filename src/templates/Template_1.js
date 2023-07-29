const Template_1 = () => {
  return (
    <div className="flex justify-center  ">
      <div className="resume-container bg-slate-100 w-[85%] h-[1050px]  mt-5 md:h-[900px] md:w-[55%] lg:w-[50%]">
        <div className="resume-header relative h-[80px] bg-purple-200 ">
          <div className="name-sec flex justify-around w-[65%] pt-3 pl-3 md:w-[67%] md:ml-7 lg:w-[55%]">
            <span className=" text-xl font-light tracking-widest md:text-3xl">DANI</span>
            <span className="text-xl font-semibold tracking-widest md:text-3xl">
              SCHWAIGER
            </span>
          </div>
          <span className="text-xs pl-5 tracking-widest md:pl-16">WEB DEVELOPER</span>
          <div className="profile-sec absolute right-6 top-8 bg-slate-600 w-16 h-16 rounded-full">
            <img className="rounded-full" src="https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg?w=2000" alt="" />
          </div>
        </div>
        <div className="main-sec-1 flex justify-between w-[100%] md:px-5">
          <div className="box-1 w-[35%] pl-2 mt-2">
            <div className="phone-number">
              <i class="fa-sharp fa-solid fa-phone text-xs"></i>{" "}
              <span className="text-xs ml-1">9118880845</span>
            </div>
            <div className="e-mail-add">
              <i class="fa-solid fa-envelope text-xs"></i>
              <span className="text-xs ml-1">xyz@gmail.com</span>
            </div>
            <div className="address">
              <i class="fa-solid fa-map-location text-xs"></i>
              <span className="text-xs ml-1">delhi, sadar, hno-111</span>
            </div>
          </div>
          <div className="box-2 w-[60%] mt-5">
            <h1 className="font-semibold mb-2 tracking-widest">PROFILE</h1>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam illum eveniet reiciendis reprehenderit commodi, necessitatibus
              explicabo optio cupiditate dolorum.
            </p>
          </div>
        </div>
        <hr className="w-[90%] ml-3 mt-5 h-[2px] bg-black" />
        {/* -------------------------------------------> */}

        <div className="main-sec-3 pl-2 mt-3 w-[100%] md:px-8">
        <h1 className="font-semibold tracking-widest mb-2">EXPERIENCE</h1>

          <div className="sec-box-1">
            <h2 className="mb-1 text-xs font-bold tracking-widest">APPLICATION DEVELOPER</h2>
            <p className="text-xs">Really Great Company</p>
            <span className="text-xs font-semibold">2016-Present</span>
            <li className="text-xs ml-4 mt-2">Database administartion and website design</li>
            <li className="text-xs ml-4">Built the logic for a streamlined ad-serving platform that scaled</li>
            <li className="text-xs ml-4">Educational institutions and online classroom management</li>
          </div>
          <div className="sec-box-2 mt-5">
            <h2 className="mb-1 text-xs font-bold tracking-widest">WEB CONTENT MANAGER</h2>
            <p className="text-xs">Really Great Company</p>
            <span className="text-xs font-semibold">2016-Present</span>
            <li className="text-xs ml-4 mt-2">Database administartion and website design</li>
            <li className="text-xs ml-4">Built the logic for a streamlined ad-serving platform that scaled</li>
            <li className="text-xs ml-4">Educational institutions and online classroom management</li>
          </div>
          <div className="sec-box-3 mt-5">
            <h2 className="mb-1 text-xs font-bold tracking-widest">ANALYSIS CONTENT</h2>
            <p className="text-xs">Really Great Company</p>
            <span className="text-xs font-semibold">2016-Present</span>
            <li className="text-xs ml-4 mt-2">Database administartion and website design</li>
            <li className="text-xs ml-4">Built the logic for a streamlined ad-serving platform that scaled</li>
            <li className="text-xs ml-4">Educational institutions and online classroom management</li>
          </div>
        </div>
        <hr className="w-[90%] ml-3 mt-5 h-[2px] bg-black" />


        {/* -----------------------------------------------> */}

        <div className="main-sec-2 mt-3 flex justify-between w-[100%] md:px-5">
          <div className="box-1 pl-2 w-[35%]">
            <h1 className="font-semibold tracking-widest mb-2">SKILLS</h1>

            <li className="ml-3 text-xs">Web Design</li>
            <li className="ml-3 text-xs">Design Thinking</li>
            <li className="ml-3 text-xs">Frontend Coding</li>
            <li className="ml-3 text-xs">Problem-Solving</li>
            <li className="ml-3 text-xs">Project Management Tools</li>
            <li className="ml-3 text-xs">Strong Communication</li>
          </div>
          <div className="box-2 w-[60%]">
            <h1 className="font-semibold tracking-widest mb-2">EDUCATION</h1>
            <div>
              <h3 className="text-sm pb-1 tracking-widest">SECONDARY SCHOOL</h3>
              <p className="text-xs">Really Great High School</p>
              <span className="text-xs font-bold">2014 - 2016</span>
            </div>
            <div>
              <h3 className="text-sm pb-1 tracking-widest mt-3">BACHELOR OF TECHNOLOGY</h3>
              <p className="text-xs">Really Great University</p>
              <span className="text-xs font-bold">2016 - 2019</span>
            </div>
          </div>
        </div>
        <hr className="w-[90%] ml-3 mt-5 h-[2px] bg-black" />



      
      </div>
    </div>
  );
};

export default Template_1;
