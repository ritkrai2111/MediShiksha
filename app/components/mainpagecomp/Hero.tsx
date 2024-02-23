import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Start your learning journey today by enrolling in our online
              courses!
            </h1>
            <p className="mb-5 mt-6">
              Embark on your medical education journey with MediShiksha.
              Discover a diverse array of online courses covering all aspects of
              medicinal practices, designed to empower aspiring healthcare
              professionals. Enroll today and advance your knowledge in the
              medical field.
            </p>
            <button className="btn btn-primary bg-red-700 mt-6">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
