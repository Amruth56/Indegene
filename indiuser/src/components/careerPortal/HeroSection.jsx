import React from "react";

function HeroSection() {
  return (
    <section className="flex overflow-hidden flex-col pb-9 w-full max-md:max-w-full">
      <div className="self-center px-6 ml-3.5 max-w-full w-[1306px] max-md:pl-5">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start self-stretch py-0.5 m-auto w-full max-md:mt-10 max-md:-mr-0.5 max-md:max-w-full">
                <h2 className="text-xs leading-10 text-black max-md:max-w-full">
                  <span
                    style={{
                      fontFamily:
                        "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      fontWeight: 700,
                      fontSize: "48px",
                      color: "rgba(0,0,0,1)",
                    }}
                  >
                    Your Career Journey
                  </span>
                  <span
                    style={{
                      fontFamily:
                        "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      fontWeight: 700,
                      fontSize: "48px",
                      color: "rgba(37,99,235,1)",
                    }}
                  >
                    {" "}
                    Powered by AI
                  </span>
                </h2>
                <p className="mt-6 text-xl leading-5 text-gray-600 max-md:max-w-full">
                  Discover opportunities that match your skills and aspirations
                  with our AI-driven career platform.
                </p>
                <div className="flex flex-wrap gap-4 self-stretch pr-20 mt-11 text-base text-center max-md:pr-5 max-md:mt-10">
                  <button className="px-9 py-5 text-white bg-blue-600 rounded-full max-md:px-5">
                    Explore Careers
                  </button>
                  <button className="px-8 py-5 text-gray-800 bg-gray-100 rounded-full max-md:px-5">
                    Employee Dashboard
                  </button>
                </div>
              </div>
            </div>
            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="px-12 pt-6 pb-20 w-full max-md:px-5 max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c31f0af4f58ddd0a8b659ffda3672c50cd75778b?placeholderIfAbsent=true&apiKey=8f286a89216d48f19ceeeaf7437e58bd"
                  alt="Career journey illustration"
                  className="object-contain w-full rounded-lg aspect-square shadow-[0px_25px_50px_rgba(0,0,0,0.25)] max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
