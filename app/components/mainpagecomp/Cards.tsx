// Cards.tsx
import React from "react";
import Divider from "../sharedcomps/Divider";

interface CardsProps {
  imageSrc: string;
}

const Cards: React.FC<CardsProps> = ({ imageSrc }) => {
  return (
    <div className="flex justify-center">
      {" "}
      {/* Ensure consistent container style */}
      <div className="card w-96 bg-white">
        <figure>
          <img
            src={imageSrc}
            alt="course"
            className="w-full h-60 object-cover"
          />
        </figure>
        <div className="card-body h-80 text-black">
          {" "}
          {/* Set text color to black */}
          <h1 className="text-red-700">Course Tag</h1>
          <h2 className="text-black text-xl card-title">
            Course Name
            <div className="badge badge-primary">NEW</div>
          </h2>
          <Divider />
          <p className="text-black">Course Description</p>
          <div className="card-actions justify-center">
            <button className="btn bg-red-700 text-white">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
