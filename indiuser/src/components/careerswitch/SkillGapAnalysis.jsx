import React from "react";
import SkillProgressBar from "./SkillProgressBar";

function SkillGapAnalysis() {
  const currentSkills = [
    { name: "Cloud Infrastructure", percentage: 85 },
    { name: "Python", percentage: 75 },
    { name: "CI/CD", percentage: 90 },
  ];

  const skillsToAcquire = [
    { name: "Security Frameworks", percentage: 35 },
    { name: "Threat Modeling", percentage: 25 },
    { name: "Compliance", percentage: 15 },
  ];

  return (
    <section className="box-border px-20 py-12 m-0 bg-white max-md:p-10 max-sm:p-5">
      <h2 className="box-border p-0 m-0 mb-8 text-2xl font-bold text-black">
        Your Skill Gap Analysis
      </h2>
      <div className="box-border grid gap-8 p-6 m-0 bg-white rounded-xl grid-cols-[1fr_1fr] max-sm:grid-cols-[1fr]">
        <div className="box-border p-0 m-0">
          <h3 className="box-border p-0 m-0 mb-7 text-lg font-bold">
            Current Skills
          </h3>
          <div className="box-border p-0 m-0">
            {currentSkills.map((skill, index) => (
              <SkillProgressBar
                key={index}
                skillName={skill.name}
                percentage={skill.percentage}
                color="bg-blue-600"
              />
            ))}
          </div>
        </div>
        <div className="box-border p-0 m-0">
          <h3 className="box-border p-0 m-0 mb-7 text-lg font-bold">
            Skills to Develop
          </h3>
          <div className="box-border p-0 m-0">
            {skillsToAcquire.map((skill, index) => (
              <SkillProgressBar
                key={index}
                skillName={skill.name}
                percentage={skill.percentage}
                color="bg-orange-400"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillGapAnalysis;
