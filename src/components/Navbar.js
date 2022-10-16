import React, { useState } from "react";
import {
  FaBars,
  FaCross,
  FaRegClosedCaptioning,
  FaTimes,
} from "react-icons/fa";
import "./Navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="bg-white p-2 flex justify-between">
      <div className="w-full flex justify-evenly sm:w-10/12">
        <h1 className="text-3xl font-bold sm:text-center">FOOD NINJA</h1>
        <ul className="hidden md:flex justify-evenly md:w-3/12">
          <li className="cursor-pointer hover:scale-125 m-2 text-xl">
            <a href="/">Home</a>
          </li>
          <li className="cursor-pointer hover:scale-125 m-2 text-xl">
            <a href="/">About</a>
          </li>
          <li className="cursor-pointer hover:scale-125 m-2 text-xl">
            <a href="/">Contact</a>
          </li>
          <li className="cursor-pointer hover:scale-125 m-2 text-xl">
            <a href="/">Party</a>
          </li>
          <li className="cursor-pointer hover:scale-125 m-2 text-xl">
            <a href="/">Donate</a>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex justify-evenly md:w-3/12">
        <div>
          <button className="button-style hover:bg-rose-600 hover:text-white transition-all m-1">
            LOG IN
          </button>
          <button className="button-style hover:bg-rose-600 hover:text-white transition-all m-1">
            SIGN UP
          </button>
        </div>
      </div>
      <div className="md:hidden absolute right-1 text-2xl animate-bounce">
        <button
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          {!showMenu ? <FaBars /> : <FaTimes />}
        </button>
      </div>
    </div>
  );
}
export default Navbar;
