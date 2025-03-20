import React from "react";
import JobCard from "./JobCard";

function FeaturedOpportunities() {
  const jobs = [
    {
      title: "Senior Software Engineer",
      type: "Full-time",
      description: "Build next-gen AI solutions for healthcare",
      location: "Bangalore, India",
      locationIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/873a11915d9c18d1bead17061a28d4991a845194?placeholderIfAbsent=true&apiKey=8f286a89216d48f19ceeeaf7437e58bd",
    },
    {
      title: "Product Manager",
      type: "Full-time",
      description: "Lead innovative healthcare products",
      location: "New York, USA",
      locationIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/803c7a8f3e8a805237cd172c5fc8b9fb16e1a33b?placeholderIfAbsent=true&apiKey=8f286a89216d48f19ceeeaf7437e58bd",
    },
    {
      title: "Data Scientist",
      type: "Full-time",
      description: "Drive insights from healthcare data",
      location: "London, UK",
      locationIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/80813e2cee02d0ee3f6fa000a3de59722ab60344?placeholderIfAbsent=true&apiKey=8f286a89216d48f19ceeeaf7437e58bd",
    },
  ];

  return (
    <section className="flex flex-col justify-center px-20 py-16 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col px-6 w-full max-md:px-5 max-md:max-w-full">
        <h2 className="z-10 self-start text-3xl font-bold leading-none text-black">
          Featured Opportunities
        </h2>
        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {jobs.map((job, index) => (
              <div
                key={index}
                className={`${index > 0 ? "ml-5" : ""} w-[33%] max-md:ml-0 max-md:w-full`}
              >
                <JobCard job={job} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedOpportunities;
