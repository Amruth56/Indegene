import React from "react";

function JobCard({ title, company, location, salary, matchPercentage }) {
  return (
    <article className="flex-1 p-6 bg-white rounded-xl shadow-sm min-w-[300px]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-bold text-black">{title}</h3>
          <p className="text-sm text-gray-500">
            {/* {company} • {location} */}
          </p>
        </div>
        {/* <div className="px-2 py-1 text-xs text-emerald-700 bg-emerald-100 rounded-full">
          {matchPercentage}% Match
        </div> */}
      </div>
      <div className="flex justify-between items-center">
        <div className="text-base text-gray-600">{salary}</div>
        <button aria-label="View job details">
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7063 8.70624C14.0969 8.31562 14.0969 7.68124 13.7063 7.29062L8.70625 2.29062C8.31563 1.89999 7.68125 1.89999 7.29063 2.29062C6.9 2.68124 6.9 3.31562 7.29063 3.70624L10.5875 6.99999H1C0.446875 6.99999 0 7.44687 0 7.99999C0 8.55312 0.446875 8.99999 1 8.99999H10.5844L7.29375 12.2937C6.90312 12.6844 6.90312 13.3187 7.29375 13.7094C7.68437 14.1 8.31875 14.1 8.70938 13.7094L13.7094 8.70937L13.7063 8.70624Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}

export default JobCard;
