// Banner.tsx

import React from "react";
import styles from "./Banner.module.css";

const Banner: React.FC = () => {
  return (
    <div className="relative">
      {/* Image Background */}
      <img
        src="../images/ban.jpg"
        alt="Banner Background"
        className="w-full h-auto object-cover object-bottom"
      />

      {/* Form Field */}
      <div
        className={`join absolute inset-x-0 bottom-0 p-4 ${styles.formFieldContainer}`}
      >
        <div
          className={` w-full mx-auto flex items-center ${styles.roundedContainer}`}
        >
          <label className="input input-bordered bg-white flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              className="input bg-white input-bordered join-item"
              placeholder="Email"
            />
          </label>
          <button className="btn join-item rounded-r-full bg-yellow-300">
            Join Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
