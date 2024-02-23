"use client";
import React from "react";
import styles from "./Testimonial.module.css";

const Testimonial = () => {
  return (
    <div>
      <div className={`card w-96 ${styles.card}`}>
        <div className="card-body">
          <div className="avatar">
            {/* <div className="w-24 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div> */}
            <h2 className=" card-title text-2xl text-red-500">
              Dr. Sarah Thompson
            </h2>
          </div>
          <p className="text-black">
            "Enrolling in courses on MediShiksha has been a game-changer for my
            medical career. The variety of courses offered allowed me to
            specialize in my area of interest, and the experienced instructors
            provided invaluable insights. The platform's user-friendly interface
            and engaging content make learning enjoyable. I highly recommend
            MediShiksha to every medical professional looking to enhance their
            skills and knowledge."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

//backend implementation
// import React, { useState } from "react";

// interface TestimonialProps {
//   name: string;
//   content: string;
// }

// const Testimonial: React.FC<TestimonialProps> = ({ name, content }) => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <div>
//       <div className={`card w-96 bg-base-100 shadow-xl ${expanded ? 'h-auto' : 'h-64'}`}>
//         <div className="card-body">
//           <div className="avatar">
//             <div className="w-24 rounded-full">
//               <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt={name} />
//             </div>
//             <h2 className="ml-4 card-title">{name}</h2>
//           </div>
//           <p className={expanded ? 'overflow-auto' : 'overflow-hidden'}>
//             {content}
//           </p>
//           {!expanded && (
//             <button className="text-blue-500 underline" onClick={() => setExpanded(true)}>
//               Read More
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
