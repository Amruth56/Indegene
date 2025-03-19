import React from "react";

const JobDescription = () => {
  return (
    <section className="p-6 mt-6 text-base font-semibold text-black bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:max-w-full">
      <h2 className="py-1.5 text-xl bg-opacity-0 max-md:pr-5 max-md:max-w-full">
        Job Description
      </h2>
      <p className="flex flex-col py-1.5 pr-6 mt-4 text-gray-600 max-md:pr-5 max-md:max-w-full">
        <span className="max-md:max-w-full">
          We're looking for a Senior Product Designer to join our team and help
          shape the future of our digital
        </span>
        <span className="self-start mt-2">products...</span>
      </p>

      <h3 className="py-1.5 mt-6 whitespace-nowrap max-md:pr-5 max-md:max-w-full">
        Responsibilities:
      </h3>
      <ul className="mt-3 text-gray-600 list-disc list-inside max-md:max-w-full">
        <li className="px-6 py-1 max-md:px-5 max-md:max-w-full">
          Lead the design of complex features and products
        </li>
        <li className="px-6 py-1.5 mt-2 max-md:px-5 max-md:max-w-full">
          Collaborate with product managers and engineers
        </li>
        <li className="px-6 py-1.5 mt-2 max-md:px-5 max-md:max-w-full">
          Conduct user research and usability testing
        </li>
        <li className="px-6 py-1 mt-2 max-md:px-5 max-md:max-w-full">
          Create high-fidelity prototypes and design systems
        </li>
      </ul>

      <h3 className="py-1.5 mt-6 whitespace-nowrap max-md:pr-5 max-md:max-w-full">
        Requirements:
      </h3>
      <ul className="mt-3 text-gray-600 list-disc list-inside max-md:max-w-full">
        <li className="px-6 py-1 max-md:px-5 max-md:max-w-full">
          5+ years of product design experience
        </li>
        <li className="px-6 py-1 mt-2 max-md:px-5 max-md:max-w-full">
          Strong portfolio of shipped products
        </li>
        <li className="px-6 py-1.5 mt-2 max-md:px-5 max-md:max-w-full">
          Expertise in Figma and design systems
        </li>
        <li className="px-6 py-1.5 mt-2 max-md:px-5 max-md:max-w-full">
          Experience with user research methods
        </li>
      </ul>

      <h3 className="py-1.5 mt-6 whitespace-nowrap max-md:pr-5 max-md:max-w-full">
        Benefits:
      </h3>
      <ul className="mt-3 text-gray-600 list-disc list-inside max-md:max-w-full flex flex-wrap">
        <li className="flex items-center px-6 py-1 max-md:px-5 max-md:max-w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 7v10m5-5l-5 5-5-5" />
          </svg>
          Health Insurance
        </li>
        <li className="flex items-center px-6 py-1 mt-2 max-md:px-5 max-md:max-w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 4v16m8-8H4" />
          </svg>
          Paid Time Off
        </li>
        <li className="flex items-center px-6 py-1 mt-2 max-md:px-5 max-md:max-w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 6l5 5 5-5" />
            <path d="M12 17V3" />
          </svg>
          Remote Work
        </li>
        <li className="flex items-center px-6 py-1 mt-2 max-md:px-5 max-md:max-w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v8h8" />
            <path d="M4 6v12h8" />
          </svg>
          Learning Budget
        </li>
      </ul>
    </section>
  );
};

export default JobDescription;
