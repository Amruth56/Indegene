import React from "react";

function CareerTransitionCard({
  iconBgColor,
  title,
  pathType,
  matchPercentage,
  transferableSkills,
  salaryIncrease,
  transitionTime,
}) {
  return (
    <article className="box-border p-6 m-0 bg-white rounded-xl border border-gray-100 border-solid shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <header className="box-border flex gap-3 items-center p-0 m-0 mb-4">
        <div
          className={`box-border flex justify-center items-center p-0 m-0 w-11 h-11 ${iconBgColor} rounded-lg`}
          aria-hidden="true"
        />
        <div className="box-border flex-1 p-0 m-0">
          <h3 className="box-border p-0 m-0 text-base font-bold text-gray-900">
            {title}
          </h3>
          <p className="box-border p-0 m-0 text-sm text-gray-500">{pathType}</p>
        </div>
        <span className="box-border px-2 py-1 m-0 text-xs text-emerald-700 bg-emerald-100 rounded-full">
          {matchPercentage}% Match
        </span>
      </header>
      <ul className="box-border flex flex-col gap-3 p-0 mx-0 my-5">
        <li className="box-border flex gap-2 items-center p-0 m-0 text-sm text-gray-600">
          <i className="ti ti-check box-border p-0 m-0" aria-hidden="true" />
          <span>{transferableSkills} Transferable Skills</span>
        </li>
        <li className="box-border flex gap-2 items-center p-0 m-0 text-sm text-gray-600">
          <i
            className="ti ti-chart-pie box-border p-0 m-0"
            aria-hidden="true"
          />
          <span>{salaryIncrease}% Salary Increase Potential</span>
        </li>
        <li className="box-border flex gap-2 items-center p-0 m-0 text-sm text-gray-600">
          <i className="ti ti-clock box-border p-0 m-0" aria-hidden="true" />
          <span>{transitionTime} Transition Time</span>
        </li>
      </ul>
      <button className="box-border p-2 m-0 w-full text-base text-indigo-600 bg-indigo-50 rounded-lg cursor-pointer border-[none]">
        View Details
      </button>
    </article>
  );
}

export default CareerTransitionCard;
