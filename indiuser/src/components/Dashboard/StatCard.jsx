import React from "react";

function StatCard({ title, value, description }) {
  return (
    <article className="flex-1 p-6 bg-white rounded-xl shadow-sm min-w-[250px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-bold text-black">{title}</h3>
        <span className="text-2xl font-bold text-blue-600">{value}</span>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
    </article>
  );
}

export default StatCard;
