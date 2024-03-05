import React from "react";
import FilterDrawer from "../coursecomp/FilterDrawer";
import Divider from "../sharedcomps/Divider";
import UserCourseCard from "./UserCourseCard";
import coursesUserData from "./coursesUserData.json";

const CardDrawer = () => {
  return (
    <div className="mt-8 md:mt-16 flex flex-col items-center">
      <div className="pb-5 w-full max-w-screen-xl">
        <div className="mb-4">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Your Purchased Courses
          </h1>
        </div>
        <Divider />
        <div className="mb-6 flex flex-col md:flex-row items-center justify-between w-full py-2 bg-slate-300">
          <div className="flex items-center mb-4 ml-4 md:mb-0">
            <input
              type="text"
              placeholder="Search for my courses"
              className="p-2 w-64 mr-4 border border-gray-300 rounded-xl"
            />
          </div>
          <FilterDrawer />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {coursesUserData.map((course, index) => (
            <div key={index} className="flex justify-center">
              <UserCourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardDrawer;
