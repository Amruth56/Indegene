import React from "react";

function HeroSection() {
  return (
    <section className="box-border px-20 py-16 m-0 max-md:p-10 max-sm:p-5">
      <div className="box-border p-0 m-0 max-w-screen-md">
        <h2 className="box-border p-0 m-0 mb-3 text-4xl font-bold text-gray-900">
          Discover Your Next Career Move
        </h2>
        <p className="box-border p-0 m-0 mb-6 text-lg text-gray-600">
          Explore personalized career transitions based on your skills and
          experience.
        </p>
        <div className="box-border flex gap-4 p-0 m-0 max-sm:flex-col">
          <button className="box-border flex gap-2 items-center px-6 py-3.5 m-0 text-base text-white bg-indigo-600 rounded-lg cursor-pointer border-[none] max-sm:w-full">
            <i
              className="ti ti-compass box-border p-0 m-0"
              aria-hidden="true"
            />
            <span>Explore Paths</span>
          </button>
          <button className="box-border flex gap-2 items-center px-6 py-3.5 m-0 text-base text-indigo-600 bg-white rounded-lg border border-indigo-600 border-solid cursor-pointer max-sm:w-full">
            <i
              className="ti ti-chart-line box-border p-0 m-0"
              aria-hidden="true"
            />
            <span>Skills Assessment</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
