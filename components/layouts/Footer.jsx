import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { AiTwotonePhone, AiOutlineMail } from "react-icons/ai";

const newDate = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="bg-[#222] mt-5 rounded-t-3xl py-8">
      <div className="flex flex-col md:flex-row justify-between md:px-32 px-5 text-center md:text-left">
        <div className="w-full md:w-1/4">
          <ScrollLink to="home" smooth duration={500}>
            <h1 className="font-semibold text-2xl text-brightRed cursor-pointer">
              Level Gyms
            </h1>
          </ScrollLink>
          <p className="mt-4">
            The best fitness destination in Los Angeles, for men and women.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <h1 className="font-medium text-xl text-brightRed">Address</h1>
          <p className="mt-4">
            123 Main Street, Los Angeles, CA 90001
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <h1 className="font-medium text-xl text-brightRed">Business Hours</h1>
          <ul className="mt-4">
            <li>Mon-Sat: 7:00 AM – 12:00 AM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <h1 className="font-medium text-xl text-brightRed ">Contact</h1>
          <div className="flex flex-row items-center justify-center md:justify-start mt-4">
            <AiTwotonePhone size={20} />
            <p className="ml-2">+1-555-555-5555</p>
          </div>
          <div className="flex flex-row items-center justify-center md:justify-start mt-2">
            <AiOutlineMail size={20} color="red" />
            <p className="ml-2">info@levelgym.com</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-center">
          © <span className="text-brightRed">Levels Gym</span> | {newDate}
        </p>
      </div>
    </div>
  );
};

export default Footer;
