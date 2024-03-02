import React from "react";
import ContactCard from "./ContactCard";

const ContactDetails = () => {
  return (
    <div className=" bg-gray-300">
      <div className="mockup-browser  border border-base-300 bg-red-500">
        <div className="mockup-browser-toolbar ">
          <div className="input border  border-base-300">
            https://medi-shiksha-2cdi.vercel.app/
          </div>
        </div>
        <div className="flex justify-center px-4 py-16 border-t border-base-300 bg-gray-300">
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
