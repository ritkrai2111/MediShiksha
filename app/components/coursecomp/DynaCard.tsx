import React from "react";
import Divider from "../sharedcomps/Divider";

interface CardsProps {
  imageSrc: string;
  courseTags: string[];
  courseName: string;
  courseDescription: string;
}

const DynaCard: React.FC<CardsProps> = ({
  imageSrc,
  courseTags,
  courseName,
  courseDescription,
}) => {
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-white">
        <figure>
          <img
            src={imageSrc}
            alt="course"
            className="w-full h-60 object-cover"
          />
        </figure>
        <div className="card-body h-80 text-black">
          <div className="flex">
            {courseTags.map((tag, index) => (
              <span key={index} className="mr-2 text-red-700">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-black text-xl card-title">{courseName}</h2>
          <Divider />
          <p className="text-black">{courseDescription}</p>
          <div className="card-actions justify-center">
            <button className="btn bg-red-700 text-white">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynaCard;
