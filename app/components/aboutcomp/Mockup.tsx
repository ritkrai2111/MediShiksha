import React from "react";

const Mockup = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mockup-phone w-4/5 border-primary">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <img
                  className="w-full h-full"
                  src="images\pic5.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">
              Made for professionals, by professionals
            </h1>
            <div className="py-6">
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl text-red-700 font-medium">
                  Our Story
                </div>
                <div className="collapse-content">
                  <p>
                    At Medishiksha, our story is rooted in a passion for
                    advancing medical education. Founded in 2024, our journey
                    began with a shared vision to revolutionize the way medical
                    professionals learn and grow. What started as a commitment
                    to excellence has evolved into a dynamic platform that
                    empowers healthcare practitioners worldwide.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl text-red-700 font-medium">
                  Mission and Vision
                </div>
                <div className="collapse-content">
                  <p>
                    Our mission is to provide unparalleled educational resources
                    tailored for medical professionals, by fostering a
                    community-driven approach to learning. We envision a world
                    where every healthcare practitioner has access to
                    cutting-edge courses that enhance their skills, enabling
                    them to deliver the best possible care.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl text-red-700 font-medium">
                  Team Introduction
                </div>
                <div className="collapse-content">
                  <p>
                    Meet the driving force behind Medishiksha - a dedicated team
                    of educators, industry experts, and innovators. Driven by a
                    collective goal to shape the future of medical education,
                    our team combines diverse expertise to curate courses that
                    meet the evolving needs of healthcare professionals.
                    Together, we are committed to excellence, innovation, and
                    your professional growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="btn btn-primary">Get Started Today!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mockup;
