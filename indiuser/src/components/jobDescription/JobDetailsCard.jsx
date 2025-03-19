import React from "react";

const JobDetailsCard = () => {
  return (
    <section className="p-6 w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
        <div className="py-px">
          <h2 className="text-2xl font-bold leading-none text-gray-900">
            Senior Product Designer
          </h2>
          <div className="flex gap-5 py-1 pr-8 mt-4 max-md:pr-5">
            <p className="grow text-base leading-none text-gray-600">
              Google Inc.
            </p>
            <div className="flex gap-1">
              <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c72c398c321b405f5bc84409cc62ade1e5892880104be721367426297ef6831?placeholderIfAbsent=true&apiKey=8f286a89216d48f19ceeeaf7437e58bd"
                  alt="Location icon"
                  className="object-contain self-stretch my-auto w-3 aspect-[0.75]"
                />
              </div>
              <p className="text-base leading-none text-gray-600 basis-auto">
                San Francisco, CA
              </p>
            </div>
          </div>
        </div>
        <div className="self-start text-sm text-blue-600 whitespace-nowrap">
          <span className="px-3 pt-1.5 pb-3 bg-blue-100 rounded-full inline-block">
            Full-time
          </span>
        </div>
      </div>
    </section>
  );
};

export default JobDetailsCard;
