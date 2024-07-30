import React from "react";
import TrainerCard from "../common/TrainerCard";

/**
 * The Trainers component renders a list of trainer cards.
 * It uses the TrainerCard component to display each trainer's information.
 */
const Trainers = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center mt-10">Our Trainers</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-8">
        <TrainerCard img="/assets/img/newTrainer1.png" alt="Trainer Maham" name="Sarah" />
        <TrainerCard img="/assets/img/newTrainer2.png" alt="Trainer Aliyan" name="Stacy" />
        <TrainerCard img="/assets/img/newTrainer3.png" alt="Trainer Fatima" name="Sam" />
      </div>
    </div>
  );
};

export default Trainers;
