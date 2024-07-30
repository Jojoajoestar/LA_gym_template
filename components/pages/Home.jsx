import React from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";

/**
 * The Home component renders the hero section with a background image and a call-to-action button.
 */
const Home = () => {
  return (
    // Apply Framer Motion animation to the hero section
    <motion.div
      className="hero"
      style={{ backgroundImage: "url('/assets/img/newHero2.png')" }} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h1 className="text-8xl font-semibold">Discover your strength!</h1>
        <div className="mt-5">
          <Button title="Get Started" />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
