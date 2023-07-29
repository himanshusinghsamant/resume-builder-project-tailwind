import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <div className="about-us-container mt-[15%] md:flex md:flex-row-reverse md:justify-between w-[100% md:mt-[7%]">
        <div className="about-img-box-2 mb-[10%] px-5 md:w-[35%]">
          <img
            src="https://img.freepik.com/premium-vector/resume-concept-woman-makes-resume-vector-illustration-flat_186332-971.jpg"
            alt=""
          />
        </div>
        <div className="about-box-1 px-5 md:w-[60%] md:pl-10">
          <div className="res-builder-txt mb-8 flex md:flex-col">
            <h1 className="mr-3 text-xl font-semibold md:tracking-widest">
              RESUME{" "}
            </h1>
            <h1 className=" text-xl font-semibold md:tracking-widest">
              BUILDER{" "}
            </h1>
            <div className="underline md:w-[90px] md:h-1 md:rounded-full bg-blue-700"></div>
          </div>

          <p>
            The most common thing we get asked for is resume help. We are happy
            to check (and recheck) your resume for free. However, please read
            through this first so it’s in the best shape it can be. If we see
            these errors, we are just going to redirect you here. If you don’t
            have these errors, send it to us in a Google doc, so we can redline
            it and add comments for you. <br /> We will help you edit your resumes
            until they’re perfect, but we’re trying to teach you how to do this
            yourself, not just do it for you. We don’t think you should have
            someone else write your resume for you because a resume is just an
            extension of your personality and should highlight the experiences
            you value. A great place to start is Microsoft Word, which has some
            pretty good templates. We’ve also included some templates on this
            page to help you out
          </p>

          <div className="social-icons mt-10 flex mb-5 space-x-4 justify-center">
            <Link
              to={
                "https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569900%7Cb%7Cfb%20login%27%7C&placement=&creative=589460569900&keyword=fb%20login%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-370844460174%26loc_physical_ms%3D9298894%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw5f2lBhCkARIsAHeTvliGPf_BeXeunox-cRTncRTVUQf7U4XqXcB_al-OQMGlnq4Xwa2-pjQaAgttEALw_wcB"
              }
            >
              <div className="fb-icon cursor-pointer w-10">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/673/694/original/glossy-facebook-3d-render-icon-free-png.png"
                  alt=""
                />
              </div>
            </Link>
            <Link
              to={
                "https://twitter.com/i/flow/login?redirect_after_login=%2Flogin"
              }
            >
              <div className="twitter-icon cursor-pointer w-10">
                <img
                  src="https://img.freepik.com/free-photo/3d-realistic-isolated-isometric-twitter-icon_125540-2044.jpg?w=2000"
                  alt=""
                />
              </div>
            </Link>
            <Link to={"https://www.whatsapp.com/"}>
              <div className="whats-app-icon cursor-pointer w-10">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/022/493/583/original/3d-render-whatsapp-logo-icon-with-new-notification-isolated-on-transparent-background-free-png.png"
                  alt=""
                />
              </div>
            </Link>
            <Link to={"https://www.linkedin.com/feed/"}>
              <div className="linked-in-icon cursor-pointer w-10">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJhRwm6LvccVfu4lry_WW8krGd0p63iflNg&usqp=CAU"
                  alt=""
                />
              </div>
            </Link>
            <Link to={"https://mail.google.com/mail/u/0/#inbox"}>
              <div className="email-icon cursor-pointer w-10">
                <img
                  src="https://img.freepik.com/premium-photo/email-app-icon-3d-rendering-illustration-white-background-mail-icon_408995-13.jpg?w=2000"
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
