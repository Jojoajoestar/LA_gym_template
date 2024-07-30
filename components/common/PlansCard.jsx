import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import Button from "./Button";
import { motion } from "framer-motion";

/**
 * The PlansCard component renders a card with details about a gym membership plan.
 * @param {object} props - The properties passed to the component.
 * @param {string} props.title - The title of the plan.
 * @param {string} props.price - The price of the plan.
 */
const PlansCard = (props) => {
  const features = [
    "Unlimited access to all gym equipment.",
    "Free fitness assessment and personalized workout plan.",
    "Complimentary access to group fitness classes.",
    "Priority booking for personal training sessions."
  ];

  // Render a check or cross icon based on plan features
  const renderCircle = (index) => {
    if (props.title === "Trial Plan") {
      return index === 0 ? (
        <AiFillCheckCircle className="mr-2 mt-1 text-green-500" size={24} />
      ) : (
        <AiFillCloseCircle className="mr-2 mt-1 text-red-500" size={25} />
      );
    } else if (props.title === "Gold Plan") {
      return index < features.length / 2 ? (
        <AiFillCheckCircle className="mr-2 mt-1 text-green-500" size={25} />
      ) : (
        <AiFillCloseCircle className="mr-2 mt-1 text-red-500" size={25} />
      );
    } else {
      return props.price > 0 ? (
        <AiFillCheckCircle className="mr-2 mt-1 text-green-500" size={25} />
      ) : (
        <AiFillCloseCircle className="mr-2 mt-1 text-red-500" size={25} />
      );
    }
  };

  // Render the plan card based on the props passed in
  return (
    <motion.div 
      className="flex flex-col bg-gray-950 w-full md:w-1/3 p-8 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    > 
      <h2 className="font-semibold text-lg text-center text-white mb-4">
        {props.title}
      </h2>

      <div className="flex items-center justify-center">
        <MdOutlineAttachMoney className="text-white mr-2" size={24} />
        <h3 className="font-semibold text-lg text-white">{props.price}</h3>
      </div>

      <div className="flex flex-col items-start mt-6 text-white">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start mb-3">
            {renderCircle(index)}
            <p className="text-sm">{feature}</p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-6">
        <Button title="Buy Plan" />
      </div>
    </motion.div>
  );
};

export default PlansCard;
