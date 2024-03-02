import React from "react";

const ContactCard = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row items-center">
          {/* Adjusted layout for smaller screens */}
          <div className="mockup-phone  border-primary  mb-8 lg:mb-0">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <img
                  className="w-full h-full"
                  src="images/mail.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">
              If in need of support, Contact us!
            </h1>
            <div className="py-6">
              <div className="collapse collapse-plus bg-gray-300">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl text-red-700 font-medium">
                  We are here to help
                </div>
                <div className="collapse-content">
                  <p>
                    Our support team is dedicated to providing timely and
                    helpful assistance for any inquiries or issues you may
                    encounter.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-gray-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl text-red-700 font-medium">
                  Our Contact Details
                </div>
                <div className="collapse-content">
                  <p>
                    Feel free to reach out to us via email at
                    info@medishiksha.com or give us a call at +91-.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-gray-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl text-red-700 font-medium">
                  Our promise to resolve all queries
                </div>
                <div className="collapse-content">
                  <p>
                    We promise to diligently work towards resolving all your
                    queries and concerns, ensuring your satisfaction.
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

export default ContactCard;
