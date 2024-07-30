import React from "react";
import PlansCard from "../common/PlansCard";

/**
 * The Plans component renders the different membership plans available at the gym.
 * It uses the PlansCard component to display each plan.
 */
const Plans = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center">Gym Membership</h1>
      <div className="flex flex-col md:flex-row justify-between mt-10 gap-8">
        <PlansCard title="Trial Plan" price="30" />
        <PlansCard title="Gold Plan" price="60" />
        <PlansCard title="Platinum Plan" price="100" />
      </div>
    </div>
  );
};

export default Plans;
