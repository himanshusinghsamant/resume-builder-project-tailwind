import React from "react";

const PersonalInfo = () => {
  return (
    <div>
      <form action="" className="py-5 space-y-10">
        <div className="name-sec space-y-4 md:flex md:items-center md:space-y-0 md:justify-between">
          <div className="last-name-inp flex flex-col md:w-[45%]">
            <label
              className="text-purple-600 font-semibold tracking-widest"
              htmlFor=""
            >
              First name *
            </label>
            <input
              className="px-1 py-2 border-blue-200 border-2 rounded-lg hover:bg-purple-800 hover:text-white"
              type="text"
              placeholder="Enter you first name"
            />
          </div>
          <div className="last-name-inp flex flex-col md:w-[45%]">
            <label
              className="text-purple-600 font-semibold tracking-widest"
              htmlFor=""
            >
              Last name *
            </label>
            <input
              className="px-1 py-2 border-blue-200 border-2 rounded-lg hover:bg-purple-800 hover:text-white"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        {/* --------------------------------------> */}
        <div className="email-mob-sec space-y-4  md:flex  md:items-center md:space-y-0 md:justify-between">
          <div className="email-inp flex flex-col md:w-[45%]">
            <label
              className="text-purple-600 font-semibold tracking-widest"
              htmlFor=""
            >
              Email *
            </label>
            <input
              className="px-1 py-2 border-blue-200 border-2 rounded-lg hover:bg-purple-800 hover:text-white"
              type="text"
              placeholder="Enter you email"
            />
          </div>
          <div className="mob-num-inp flex flex-col md:w-[45%]">
            <label
              className="text-purple-600 font-semibold tracking-widest"
              htmlFor=""
            >
              Mobile No *
            </label>
            <input
              className="px-1 py-2 border-blue-200 border-2 rounded-lg hover:bg-purple-800 hover:text-white"
              type="number"
              placeholder="Enter your number"
            />
          </div>
        </div>
        {/* -----------------------------------------> */}
        <div className="address-sec">
          <div className="address-inp flex flex-col">
            <label
              className="text-purple-600 font-semibold tracking-widest"
              htmlFor=""
            >
              Address *
            </label>
            <input
              className="px-1 py-2 border-blue-200 border-2 rounded-lg hover:bg-purple-800 hover:text-white"
              type="text"
              placeholder="Enter you address"
            />
          </div>
        </div>
        {/* --------------------------------------------> */}
        <div className="city-state-sec space-y-4  md:flex md:items-center md:space-y-0 md:justify-between">
          <div className="city-name-inp flex flex-col md:w-[45%]">
            <label
              className="text-purple-600 font-semibold tracking-widest"
              htmlFor=""
            >
              City *
            </label>
            <input
              className="px-1 py-2 border-blue-200 border-2 rounded-lg hover:bg-purple-800 hover:text-white"
              type="text"
              placeholder="Enter you city"
            />
          </div>
          <div className="state-name-inp flex flex-col md:w-[45%]">
            <label
              className="text-purple-600 font-semibold tracking-widest"
              htmlFor=""
            >
              State *
            </label>
            <input
              className="px-1 py-2 border-blue-200 border-2 rounded-lg hover:bg-purple-800 hover:text-white"
              type="text"
              placeholder="Enter your state"
            />
          </div>
        </div>
        {/* -------------------------------------------------> */}
        <div className="pin-code-sec">
          <div className="pin-code-inp flex flex-col">
            <label
              className="text-purple-600 font-semibold tracking-widest"
              htmlFor=""
            >
              Pincode *
            </label>
            <input
              className="px-1 py-2 border-blue-200 border-2 rounded-lg hover:bg-purple-800 hover:text-white"
              type="number"
              placeholder="Enter pincode"
            />
          </div>
        </div>

        <div className="button-sec flex space-x-3 mt-8">
          <button className="back-btn font-semibold rounded-md bg-black text-white px-3 py-1 cursor-pointer hover:border-2 hover:border-purple-950 hover:bg-white hover:text-purple-950 duration-700 border-2 border-black">
            Back
          </button>
          <button className="next-btn font-semibold rounded-md bg-black text-white px-3 py-1 cursor-pointer hover:border-2 hover:border-purple-950 hover:bg-white hover:text-purple-950 duration-700 border-2 border-black">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
