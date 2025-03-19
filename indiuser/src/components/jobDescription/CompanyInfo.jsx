import React from "react";

const CompanyInfo = () => {
  return (
    <section className="p-6 mt-6 w-full text-base bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:max-w-full">
      <h2 className="py-1.5 text-xl font-semibold text-black max-md:pr-5 max-md:max-w-full">
        About the Company
      </h2>
      <div className="flex flex-wrap gap-4 pr-20 mt-4 leading-none max-md:pr-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b960e0b85cc0e6b820199a1480016d93d6433ae8586762a3132c5fe39acb4910?placeholderIfAbsent=true&apiKey=8f286a89216d48f19ceeeaf7437e58bd"
          alt="Google logo"
          className="object-contain shrink-0 w-16 rounded-lg aspect-square"
        />
        <div className="flex flex-col py-1.5 pr-1.5 my-auto">
          <h3 className="self-start font-semibold text-black">Google Inc.</h3>
          <p className="mt-2.5 text-gray-600">Technology · 10,000+ employees</p>
        </div>
      </div>
      <p className="flex flex-col items-start pt-0.5 pr-16 pb-2.5 mt-4 text-gray-600 max-md:pr-5 max-md:max-w-full">
        <span className="max-md:max-w-full">
          Google's mission is to organize the world's information and make it
          universally accessible and
        </span>
        <span className="mt-2">useful...</span>
      </p>
    </section>
  );
};

export default CompanyInfo;
