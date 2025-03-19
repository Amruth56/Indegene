import React from "react";

const JobInfoSection = () => {
  return (
    <section className="flex flex-wrap gap-4 mt-6 max-md:max-w-full">
      <div className="flex-1 p-4 bg-gray-50 rounded-lg">
        <h3 className="py-1 text-sm text-gray-600">Salary Range</h3>
        <p className="py-1.5 mt-1 text-base font-semibold text-black">
          $120k - $150k
        </p>
      </div>
      <div className="flex-1 p-4 bg-gray-50 rounded-lg">
        <h3 className="py-1 text-sm text-gray-600 whitespace-nowrap">
          Experience
        </h3>
        <p className="py-1.5 mt-1 text-base font-semibold text-black">
          5-7 years
        </p>
      </div>
      <div className="flex-1 p-4 bg-gray-50 rounded-lg">
        <h3 className="py-1 text-sm text-gray-600 whitespace-nowrap">
          Applications
        </h3>
        <p className="py-1.5 mt-1 text-base font-semibold text-black">
          127 applied
        </p>
      </div>
    </section>
  );
};

export default JobInfoSection;
