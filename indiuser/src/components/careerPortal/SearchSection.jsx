"use client";
import React from "react";

function SearchSection() {
  return (
    <section className="flex flex-col justify-center px-20 py-16 w-full bg-gray-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center px-20 max-md:px-5 max-md:max-w-full">
        <div className="max-w-full w-[768px]">
          <div className="w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between py-3 pr-2 pl-6 w-full bg-white rounded-full border-2 border border-solid max-md:pl-5 max-md:max-w-full">
              <input
                type="text"
                placeholder="Search for jobs, skills, or locations..."
                className="my-auto text-lg leading-loose text-gray-400 bg-transparent outline-none flex-grow"
              />
              <button className="flex gap-2.5 px-7 py-2.5 text-base text-center text-white whitespace-nowrap bg-blue-600 rounded-full max-md:px-5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b48df952b4b5e549f7df25566ee4a24efa8fdccd?placeholderIfAbsent=true&apiKey=8f286a89216d48f19ceeeaf7437e58bd"
                  alt="Search icon"
                  className="object-contain shrink-0 w-4 aspect-[0.7]"
                />
                <span className="self-start">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
