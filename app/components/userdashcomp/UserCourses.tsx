// CardDrawer.tsx
import React from "react";
import Cards from "../mainpagecomp/Cards";
import FilterDrawer from "../coursecomp/FilterDrawer";

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
        <div className="mb-6 flex items-center justify-between w-full bg-yellow-300  p-4">
          <h1 className="ml-6 text-2xl md:text-4xl font-bold">
            Your Purchased Courses
          </h1>
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
