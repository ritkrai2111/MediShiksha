import React from "react";
import Footer from "../components/sharedcomps/Footer";
import CourseBar from "../components/coursecomp/CourseBar";
import FilterDrawer from "../components/coursecomp/FilterDrawer";

const Courses: React.FC = () => {
  return (
    <div>
      <CourseBar />
      {/* <Filter /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Courses;
