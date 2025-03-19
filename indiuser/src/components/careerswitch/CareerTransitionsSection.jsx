import React from "react";
import CareerTransitionCard from "./CareerTransitionCard";

function CareerTransitionsSection() {
  const careerTransitions = [
    {
      iconBgColor: "bg-blue-100",
      title: "DevOps to Cloud Security",
      pathType: "High Demand Path",
      matchPercentage: 95,
      transferableSkills: 8,
      salaryIncrease: 35,
      transitionTime: "6-8 Months",
    },
    {
      iconBgColor: "bg-violet-100",
      title: "Data Analyst to ML Engineer",
      pathType: "Emerging Path",
      matchPercentage: 88,
      transferableSkills: 6,
      salaryIncrease: 45,
      transitionTime: "8-12 Months",
    },
    {
      iconBgColor: "bg-emerald-100",
      title: "SWE to Security Engineer",
      pathType: "Critical Path",
      matchPercentage: 92,
      transferableSkills: 7,
      salaryIncrease: 40,
      transitionTime: "4-6 Months",
    },
  ];

  return (
    <section className="box-border px-20 py-12 m-0 bg-white max-md:p-10 max-sm:p-5">
      <h2 className="box-border p-0 m-0 mb-8 text-2xl font-bold text-black">
        Recommended Career Transitions
      </h2>
      <div className="box-border grid gap-6 p-0 m-0 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        {careerTransitions.map((transition, index) => (
          <CareerTransitionCard
            key={index}
            iconBgColor={transition.iconBgColor}
            title={transition.title}
            pathType={transition.pathType}
            matchPercentage={transition.matchPercentage}
            transferableSkills={transition.transferableSkills}
            salaryIncrease={transition.salaryIncrease}
            transitionTime={transition.transitionTime}
          />
        ))}
      </div>
    </section>
  );
}

export default CareerTransitionsSection;
