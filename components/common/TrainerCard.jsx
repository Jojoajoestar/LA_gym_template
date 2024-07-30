import React from "react";
import { BsInstagram, BsTwitter, BsFacebook, BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";
/**
 * The TrainerCard component renders a card with details about a trainer.
 * @param {object} props - The properties passed to the component.
 * @param {string} props.img - The image URL of the trainer.
 * @param {string} props.alt - The alt text for the trainer's image.
 * @param {string} props.name - The name of the trainer.
 */
const TrainerCard = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-5 pt-9 pb-4 w-full md:w-1/4 bg-[#222] rounded-xl"
    >
      <div className="w-3/4">
        <img
          className="rounded-lg"
          src={props.img}
          alt={props.alt}
          loading="lazy"
        />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-semibold py-2">{props.name}</h1>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram
              size={25}
              className="hover:text-[#e53961] cursor-pointer"
            />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook
              size={25}
              className="hover:text-[#4267B2] cursor-pointer"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX
              size={25}
              className="hover:text-[#3f4549] cursor-pointer"
            />
          </a>
        </div>
        <button
          className="mt-4 btn-primary"
          onClick={() => alert('Booking a session with ' + props.name)}
        >
          Book a Session
        </button>
      </div>
    </motion.div>
  );
};

export default TrainerCard;
