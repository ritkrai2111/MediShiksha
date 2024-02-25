// CardDrawer.tsx
import React from "react";
import Cards from "../mainpagecomp/Cards";
import FilterDrawer from "../coursecomp/FilterDrawer";
import Divider from "../sharedcomps/Divider";

const CardDrawer = () => {
  // Array of image sources for each card
  const cardImages = [
    "/images/cardImages/c1.jpg",
    "/images/cardImages/c2.jpg",
    "/images/cardImages/c3.jpg",
    "/images/cardImages/c4.jpg",
    "/images/cardImages/c5.jpg",
    "/images/cardImages/c6.jpg",
  ];

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
          {cardImages.map((imageSrc, index) => (
            <div key={index} className="flex justify-center">
              <Cards imageSrc={imageSrc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardDrawer;
