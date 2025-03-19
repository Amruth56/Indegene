"use client";
import React from "react";

const AiMatchScore = () => {
  const matchPercentage = 67;

  return (
    <section className="p-6 w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5">
      <div className="flex gap-5 justify-between">
        <h2 className="self-start text-xl font-semibold leading-none text-black">
          AI Match Score
        </h2>
        <p className="pt-px pb-3 text-2xl font-bold text-blue-600 whitespace-nowrap">
          {matchPercentage}%
        </p>
      </div>
      <div className="flex flex-col items-start mt-4 bg-gray-100 rounded-full max-md:pr-5">
        <div
          className="flex shrink-0 h-2 bg-blue-600 rounded-full"
          style={{ width: `${matchPercentage}%` }}
        />
      </div>
      <p className="flex flex-col py-1 pr-7 mt-4 text-sm text-gray-600 max-md:pr-5">
        <span>Your profile strongly matches this position based</span>
        <span className="self-start mt-1.5">
          on your skills and experience.
        </span>
      </p>
    </section>
  );
};

export default AiMatchScore;
