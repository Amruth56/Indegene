import React from "react";
import LearningPathCard from "./LearningPathCard";

function LearningPathsSection() {
  const learningPaths = [
    {
      iconBgColor: "bg-red-100",
      title: "Cloud Security Fundamentals",
      duration: "12 Weeks Course",
      description: "Essential security concepts for cloud environments",
      enrolledCount: 1234,
    },
    {
      iconBgColor: "bg-violet-100",
      title: "Security Certifications",
      duration: "16 Weeks Program",
      description: "Prepare for top security certifications",
      enrolledCount: 856,
    },
    {
      iconBgColor: "bg-emerald-100",
      title: "Security Development",
      duration: "8 Weeks Course",
      description: "Secure coding practices and implementation",
      enrolledCount: 645,
    },
  ];

  return (
    <section className="box-border px-20 py-12 m-0 bg-white max-md:p-10 max-sm:p-5">
      <h2 className="box-border p-0 m-0 mb-8 text-2xl font-bold text-black">
        Recommended Learning Paths
      </h2>
      <div className="box-border grid gap-6 p-0 m-0 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        {learningPaths.map((path, index) => (
          <LearningPathCard
            key={index}
            iconBgColor={path.iconBgColor}
            title={path.title}
            duration={path.duration}
            description={path.description}
            enrolledCount={path.enrolledCount}
          />
        ))}
      </div>
    </section>
  );
}

export default LearningPathsSection;
