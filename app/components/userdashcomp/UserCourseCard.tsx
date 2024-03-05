"use client";
import React, { useState } from "react";

interface CardsProps {
  imageSrc: string;
  courseTags: string[];
  courseName: string;
  courseDescription: string;
  price: number;
}

const UserCourseCard: React.FC<CardsProps> = ({
  imageSrc,
  courseTags,
  courseName,
  courseDescription,
  price,
}) => {
  const [showAllTags, setShowAllTags] = useState(false);

  const displayedTags = showAllTags ? courseTags : courseTags.slice(0, 2);
  const hiddenTags = showAllTags ? [] : courseTags.slice(2);

  return (
    <div className="flex justify-center relative">
      <div className="card w-96 bg-white relative">
        <figure>
          <img
            src={imageSrc}
            alt="course"
            className="w-full h-60 object-cover"
          />
        </figure>
        <div className="card-body h-80 text-black">
          <div className="flex flex-wrap">
            {displayedTags.map((tag, index) => (
              <span key={index} className="mr-2 mb-2">
                <span className="inline-block border border-red-700 rounded text-red-700 px-2 py-1">
                  {tag}
                </span>
              </span>
            ))}
            {courseTags.length > 2 && (
              <span
                className="cursor-pointer ml-2"
                onClick={() => setShowAllTags(!showAllTags)}
              >
                {showAllTags ? (
                  <span className="inline-block border border-red-700 rounded text-red-700 px-2 py-1">
                    -
                  </span>
                ) : (
                  <span className="inline-block border border-red-700 rounded text-red-700 px-2 py-1">
                    +
                  </span>
                )}
              </span>
            )}
          </div>
          <h2 className="text-black text-xl card-title">{courseName}</h2>
          <p className="text-black">{courseDescription}</p>
          <div className="card-actions justify-center">
            <button className="btn bg-red-700 text-white">View Course</button>
          </div>
          {showAllTags && hiddenTags.length > 0 && (
            <div className="mt-2">
              {hiddenTags.map((tag, index) => (
                <span key={index} className="mr-2 mb-2">
                  <span className="inline-block border border-red-700 rounded text-red-700 px-2 py-1">
                    {tag}
                  </span>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCourseCard;
