import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

// Define the menu items for the navbar
const menuItems = [
  { id: "home", name: "Home" },
  { id: "about", name: "About Us" },
  { id: "plans", name: "Pricing Plans" },
  { id: "trainers", name: "Trainers" },
  { id: "classes", name: "Classes" },
  { id: "contact", name: "Contact Us" },
];

/**
 * The Navbar component renders a responsive navigation bar with social media links.
 * It includes sticky behavior and a collapsible menu for smaller screens.
 */
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle the menu state
  const handleChange = () => {
    setMenu(!menu);
  };

  // Handle scroll event to apply sticky class
  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  // Add event listener on scroll to apply sticky class or remove it when scrolling up
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`fixed w-full z-50 ${
          isSticky ? "bg-black bg-opacity-80" : "bg-transparent"
        } transition-all duration-300 flex flex-row justify-between px-5 py-4 md:px-32`}
      >
        <div className="flex items-center">
          <ScrollLink to="home" smooth duration={500}>
            <h1 className="font-semibold text-2xl text-[#ff3939] cursor-pointer">
              LA Gym
            </h1>
          </ScrollLink>
          <div className="flex items-center ml-4 space-x-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#e53961] transition-all"
            >
              <BsInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4267B2] transition-all"
            >
              <BsFacebook size={24} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#3f4549] transition-all"
            >
              <BsTwitter size={24} />
            </a>
          </div>
        </div>
      
        <nav className="hidden md:flex items-center gap-5">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              spy
              smooth
              duration={500}
              className="hover:text-[#ff3939] transition-all cursor-pointer"
            >
              {item.name}
            </ScrollLink>
          ))}
        </nav>
      
        <div className="md:hidden flex items-center" onClick={handleChange}>
          <AiOutlineMenuUnfold size={28} />
        </div>
      </div>
  
      {/* Collapsible menu for smaller screens */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col fixed bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 z-40`}
      > 
        {menuItems.map((item) => ( 
          <ScrollLink
            key={item.id}
            to={item.id}
            spy
            smooth
            duration={500}
            className="hover:text-[#ff3939] transition-all cursor-pointer"
            onClick={() => setMenu(false)}
          >
            {item.name}
          </ScrollLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
