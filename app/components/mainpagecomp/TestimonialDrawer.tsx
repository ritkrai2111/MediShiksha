import React from "react";
import Testimonial from "./Testimonial";

const TestimonialDrawer = () => {
  return (
    <div className="mb-12 mx-4">
      <div className="flex items-center justify-center relative">
        <img src="../images/quotation.png" className="h-16 w-18" />
        <h1 className="my-12 text-4xl font-bold pl-2">
          What our users say about us
        </h1>
      </div>
      <div className="carousel w-full overflow-x-auto">
        <div id="item1" className="carousel-item flex space-x-4">
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
        <div id="item2" className="carousel-item ml-4 flex space-x-4">
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
      <div className="flex justify-center mt-4 w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
      </div>
    </div>
  );
};

export default TestimonialDrawer;
