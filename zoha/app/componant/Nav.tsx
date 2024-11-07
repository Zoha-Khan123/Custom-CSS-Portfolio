import Link from "next/link";
import React from "react";
import "./Nav.css";

export const Nav = () => {
  return (
    <>
      <div className="crs">
        <svg
          fill="#ffffff"
          viewBox="0 -2 28 28"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="m5.216 11.998c0 1.44-1.168 2.608-2.608 2.608s-2.608-1.168-2.608-2.608 1.168-2.608 2.608-2.608 2.608 1.168 2.608 2.608z"></path>
            <path d="m5.216 2.608c0 1.44-1.168 2.608-2.608 2.608s-2.608-1.168-2.608-2.608 1.168-2.608 2.608-2.608 2.608 1.168 2.608 2.608z"></path>
            <path d="m5.216 21.389c0 1.44-1.168 2.608-2.608 2.608s-2.608-1.168-2.608-2.608 1.168-2.608 2.608-2.608 2.608 1.168 2.608 2.608z"></path>
            <path d="m9.794 0h15.247c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-15.247c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"></path>
            <path d="m9.794 9.39h15.247c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-15.247c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"></path>
            <path d="m9.794 18.781h15.247c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-15.247c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"></path>
          </g>
        </svg>
      </div>
      <div className="divRes">
        <Link href="/">
          <span className="nav-btn">Home </span>
        </Link>
        <Link href="./about">
          <span className="nav-btn">About </span>
        </Link>
        <Link href="./skills">
          <span className="nav-btn">Skills </span>
        </Link>
        <Link href="./Portfolio">
          <span className="nav-btn">Portfolio </span>
        </Link>
        <Link href="./contact">
          <span className="nav-btn">Contact </span>
        </Link>
      </div>
    </>
  );
};

export default Nav;
