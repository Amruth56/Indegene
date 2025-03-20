import React from "react";
import NavLink from "./NavLink";

function Header() {
  return (
    <header className="flex z-10 flex-col justify-center px-20 py-px w-full border border-b bg-white bg-opacity-90 max-md:px-5 max-md:max-w-full">
      <nav className="flex flex-col justify-center px-6 py-4 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
          <h1 className="z-10 px-0.5 pb-2.5 my-auto text-2xl font-bold leading-none text-blue-600">
            Indegene Careers
          </h1>
          <div className="flex gap-9 items-start text-base text-gray-600">
            <NavLink text="Jobs" />
            <NavLink text="About Us" />
            <NavLink text="Benefits" />
            <NavLink text="Contact" />
            <button className="self-stretch px-6 pt-2 pb-4 text-center text-white bg-blue-600 rounded-full max-md:px-5">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
