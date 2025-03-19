import React from "react";

function LearningPathCard({
  iconBgColor,
  title,
  duration,
  description,
  enrolledCount,
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
          <p className="box-border p-0 m-0 text-sm text-gray-500">{duration}</p>
        </div>
      </header>
      <p className="box-border p-0 m-0 text-gray-600 mb-2">{description}</p>
      <p className="box-border p-0 m-0 text-sm text-gray-500 mb-4">
        <i className="ti ti-users box-border p-0 m-0 mr-1" aria-hidden="true" />
        <span>{enrolledCount.toLocaleString()} Enrolled</span>
      </p>
      <button className="box-border p-2 m-0 w-full text-base text-indigo-600 bg-indigo-50 rounded-lg cursor-pointer border-[none]">
        Start Learning
      </button>
    </article>
  );
}

export default LearningPathCard;
