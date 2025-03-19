import React from "react";

function Header() {
  return (
    <header className="box-border flex items-center px-20 py-5 m-0 bg-white border-b border-solid max-md:p-10 max-sm:p-5">
      <h1 className="box-border p-0 m-0 text-xl font-bold text-indigo-600">
        CareerGrowth
      </h1>
      <nav className="box-border flex gap-6 p-0 m-0 ml-10 max-sm:hidden">
        <a href="#" className="box-border p-0 m-0 text-gray-500 cursor-pointer">
          Dashboard
        </a>
        <a href="#" className="box-border p-0 m-0 text-gray-500 cursor-pointer">
          Career Paths
        </a>
        <a href="#" className="box-border p-0 m-0 text-gray-500 cursor-pointer">
          Learning
        </a>
        <a href="#" className="box-border p-0 m-0 text-gray-500 cursor-pointer">
          Mentorship
        </a>
      </nav>
      <div
        className="box-border p-0 m-0 ml-auto w-8 h-8 bg-indigo-600 rounded-full"
        aria-label="User profile"
      />
    </header>
  );
}

export default Header;
