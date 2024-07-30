import React from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";

const About = () => {
  return (
    <div className="about-section md:flex-row flex-col-reverse flex">
      <motion.div
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>About Us</h1>
        <p>
          Welcome to Levels Gym, your ultimate fitness destination. Our mission is to help you achieve your fitness goals with our state-of-the-art facilities and expert trainers.
        </p>
        <p>
          Whether you're just starting out or are a seasoned athlete, we offer a range of classes and personal training options to suit your needs.
        </p>
        <p>
          Join us and transform your fitness journey. Discover your strength at Levels Gym!
        </p>
        <Button title="Join Now" />
      </motion.div>
      <div className="image-container md:block hidden" style={{ backgroundImage: "url('/assets/img/aboutV2.png')" }}>
        {/* Optional: Use an img tag if background image approach doesn't fit */}
        {/* <img src="/assets/img/aboutV2.png" alt="About Us" /> */}
      </div>
    </div>
  );
};

export default About;
