import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-slate-300">
      <div className=" w-10/12 mx-auto">
        <div className="sm:flex justify-evenly">
          <div className="py-4">
            <h1 className="text-2xl">COMPANY</h1>
            <ul>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Team</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Membership</a>
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h1 className="text-2xl">CONTACT</h1>
            <ul>
              <li>
                <a href="/">Help & Support</a>
              </li>
              <li>
                <a href="/">Partner with us</a>
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h1 className="text-2xl">LEGAL</h1>
            <ul>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Refund & Cancellation</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Cookie Policy</a>
              </li>
              <li>
                <a href="/">Phishing & Fraud</a>
              </li>
            </ul>
          </div>
          <div className="sm:hidden">
            <FaFacebook className="inline" /> &nbsp;
            <FaPinterest className="inline" /> &nbsp;
            <FaInstagram className="inline" /> &nbsp;
            <FaTwitter className="inline" />
            <h1 className="block text-3xl font-bold">FOOD NINJA&trade;</h1>
          </div>
        </div>
        <div className="hidden sm:flex justify-evenly items-center">
          <h1 className="text-center text-3xl font-bold">FOOD NINJA&trade;</h1>
          <h1 className="hidden md:block">&copy; 2022</h1>
          <div className="hidden sm:flex sm:justify-evenly sm:w-1/5">
            <a href="/" className="">
              <FaFacebook />
            </a>
            <a href="/" className="">
              <FaPinterest />
            </a>
            <a href="/" className="">
              <FaInstagram />
            </a>
            <a href="/" className="">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
