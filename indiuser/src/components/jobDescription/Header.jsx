import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col justify-center px-20 py-px w-full leading-none bg-white border border-b max-md:px-5 max-md:max-w-full">
      <nav className="flex flex-col justify-center p-4 w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full">
          <div className="flex gap-9 py-1">
            <h1 className="grow text-2xl font-bold text-blue-600">IndeGene</h1>
            <div className="flex flex-auto gap-7 self-start px-0.5 py-1.5 text-base text-gray-600">
              <a href="#" className="grow">
                Find Jobs
              </a>
              <a href="#" className="cursor-pointer">
                Companies
              </a>
              <a href="#" className="cursor-pointer">
                Resources
              </a>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/745914507e5939a9c44951506d8de4518076880fd0d8cb5815208cd76bb31688?placeholderIfAbsent=true&apiKey=8f286a89216d48f19ceeeaf7437e58bd"
            alt="User profile"
            className="object-contain shrink-0 aspect-[1.94] w-[62px]"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
