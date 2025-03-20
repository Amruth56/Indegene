import React from "react";
import FeatureCard from "./FeatureCard";

function AIFeatures() {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ff8aa94b3ada0d70abc750e392a0c69d629b1ec?placeholderIfAbsent=true&apiKey=8f286a89216d48f19ceeeaf7437e58bd",
      title: "Smart Job Matching",
      description:
        "Our AI analyzes your skills and experience to find the perfect role.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ee762a1c14cf2fa4ab19778ec6ce9c276d68ded?placeholderIfAbsent=true&apiKey=8f286a89216d48f19ceeeaf7437e58bd",
      title: "Career Path Planning",
      description: "Get personalized recommendations for your career growth.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6702f230a11d7a4a052375c4a4467fc760de7fe?placeholderIfAbsent=true&apiKey=8f286a89216d48f19ceeeaf7437e58bd",
      title: "Resume Screening",
      description:
        "Advanced AI screening to match your profile with opportunities.",
    },
  ];

  return (
    <section className="flex flex-col justify-center px-20 py-16 w-full bg-gray-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col px-6 w-full max-md:px-5 max-md:max-w-full">
        <h2 className="z-10 self-center -mt-1 text-3xl font-bold leading-none text-center text-black">
          AI-Powered Career Growth
        </h2>
        <div className="mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${index > 0 ? "ml-5" : ""} w-[33%] max-md:ml-0 max-md:w-full`}
              >
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIFeatures;
