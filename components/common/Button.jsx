import React from "react";

/**
 * The Button component renders a styled button with hover animations.
 * @param {string} title - The text to display on the button.
 * @param {function} onClick - The function to call when the button is clicked.
 * @param {string} type - The type attribute for the button (default is "button").
 */
const Button = ({ title, onClick, type = "button" }) => {
  return (
    <button 
      onClick={onClick}
      type={type}
      className="relative inline-flex items-center justify-center px-5 py-3 overflow-hidden font-bold text-white rounded-full group transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brightRed"
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-y-full bg-red-700 group-hover:translate-y-0 ease">
        <span className="relative text-white">{title}</span>
      </span>
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 bg-brightRed group-hover:translate-y-full ease">
        <span className="relative">{title}</span>
      </span>
      <span className="relative invisible">{title}</span>
    </button>
  );
};

export default Button;
