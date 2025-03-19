import React from "react";

function SkillProgressBar({ skillName, percentage, color }) {
  return (
    <div className="box-border p-0 m-0 mb-4">
      <div className="box-border p-0 m-0 mb-2 text-base text-gray-700">
        {skillName}
      </div>
      <div className="box-border p-0 m-0 h-2 bg-gray-200 rounded-full">
        <div
          className={`box-border p-0 m-0 h-full ${color} rounded-full`}
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          role="progressbar"
          aria-label={`${skillName} skill level: ${percentage}%`}
        />
      </div>
    </div>
  );
}

export default SkillProgressBar;
