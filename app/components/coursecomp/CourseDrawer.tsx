import React from "react";
import FilterDrawer from "./FilterDrawer";
import DynaCard from "./DynaCard";
import coursesData from "./coursesData.json"; // Import the JSON data

const CourseDrawer = () => {
  return (
    <div className="mt-8 md:mt-16 flex flex-col items-center">
      <div className="pb-5 w-full max-w-screen-xl">
        <div className="mb-6 flex items-center justify-between w-full">
          <h1 className="ml-6 text-2xl md:text-4xl font-bold">Our Courses</h1>
          <FilterDrawer />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {coursesData.map((course, index) => (
            <div key={index} className="flex justify-center">
              <DynaCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDrawer;
