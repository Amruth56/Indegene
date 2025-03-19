"use client";
import React from "react";

const ActionButtons = () => {
  const handleApply = () => {
    console.log("Apply button clicked");
    // Add application logic here
  };

  const handleSave = () => {
    console.log("Save job button clicked");
    // Add save job logic here
  };

  return (
    <section className="p-6 mt-6 text-base font-semibold text-center bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5">
      <button
        onClick={handleApply}
        className="px-16 py-4 text-white bg-blue-600 rounded-lg w-full max-md:px-5 hover:bg-blue-700 transition-colors"
      >
        Apply Now
      </button>
      <button
        onClick={handleSave}
        className="px-16 py-5 mt-4 text-gray-700 rounded-lg border border-gray-300 border-solid w-full max-md:px-5 hover:bg-gray-50 transition-colors"
      >
        Save Job
      </button>
    </section>
  );
};

export default ActionButtons;
