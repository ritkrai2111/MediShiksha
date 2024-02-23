import React from "react";

const ProvideScreen = () => {
  return (
    <div className="py-16">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="px-4 w-full h-full">
          <img src="../images/pic5.jpg" alt="Album" />
        </figure>
        <div className="card-body mb-4">
          <h2 className="text-red-700">What we provide</h2>
          <h1 className="card-title">Medical-Shiksha!</h1>
          <h3>We here at MediShiksha provide our users with</h3>
          <div className="collapse bg-white">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Online Courses
            </div>
            <div className="collapse-content">
              <p>
                Explore MediShiksha's online courses, offering a diverse array
                of expert-led content in medicinal practices. Start your
                educational journey with us and advance your career in
                healthcare.
              </p>
            </div>
          </div>
          <div className="collapse bg-white">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Detailed Notes
            </div>
            <div className="collapse-content">
              <p>
                Enhance your learning experience with detailed notes
                accompanying our courses. Gain in-depth insights into complex
                medical concepts, reinforcing your understanding and knowledge
                retention.
              </p>
            </div>
          </div>
          <div className="collapse bg-white">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Practice Quizzes and Assignments
            </div>
            <div className="collapse-content">
              <p>
                Reinforce your medical knowledge with interactive practice
                quizzes and assignments on MediShiksha. Engage in hands-on
                assessments to sharpen your skills and prepare for real-world
                healthcare scenarios.
              </p>
            </div>
          </div>
          <div className="collapse bg-white">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Experienced Teachers
            </div>
            <div className="collapse-content">
              <p>
                Learn from the best at MediShiksha. Our courses are led by
                seasoned professionals with vast experience in the medical
                field. Benefit from their practical insights and clinical
                expertise, ensuring an experience that propels you towards
                medical excellence.
              </p>
            </div>
          </div>
          <div className="collapse bg-white">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Certifications
            </div>
            <div className="collapse-content">
              <p>
                Achieve professional recognition with MediShiksha
                certifications. Complete our courses and receive recognized
                credentials, validating your expertise and opening doors to new
                opportunities in the medical field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvideScreen;
