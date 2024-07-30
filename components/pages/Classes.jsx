import React from "react";
import BigCalendar from "../calendar/BigCalendar"; // Import BigCalendar component

const Classes = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center mt-10 mb-8">Our Classes</h1>
      <div className="mt-8 text-center mb-8">
        <p className="text-lg">
          Join our classes to experience a new level of fitness. From Yoga to
          HIIT, we have classes that cater to all fitness levels.
        </p>
      </div>
      <BigCalendar />
    </div>
  );
};

export default Classes;
