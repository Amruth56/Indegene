import React from "react";

function JobCard({ job }) {
  const { title, type, description, location, locationIcon } = job;

  return (
    <article className="p-6 mx-auto w-full bg-white rounded-xl border border border-solid max-md:px-5 max-md:mt-8">
      <div className="flex gap-5 justify-between pb-2">
        <h3 className="text-xl font-bold leading-5 text-black">{title}</h3>
        <span className="flex flex-col items-start px-3 pt-1 pb-3.5 text-sm text-blue-600 whitespace-nowrap bg-blue-100 rounded-full">
          {type}
        </span>
      </div>
      <p className="pb-2 mt-4 text-base text-gray-600">{description}</p>
      <div className="flex gap-2 py-0.5 mt-4 w-full">
        <div className="flex overflow-hidden justify-center items-center self-start mt-1 min-h-4">
          <img
            src={locationIcon}
            alt="Location icon"
            className="object-contain self-stretch my-auto w-3 aspect-[0.75]"
          />
        </div>
        <p className="flex-auto text-base leading-none text-gray-500 w-[317px]">
          {location}
        </p>
      </div>
      <button className="px-16 pt-2 pb-4 mt-4 text-base text-center text-gray-800 bg-gray-100 rounded-full max-md:px-5 w-full hover:bg-gray-200 transition-colors">
        Apply Now
      </button>
    </article>
  );
}

export default JobCard;
