import React from "react";

function CareerOpportunityCard({ icon, title, description, actionText }) {
  return (
    <article className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
      <div className="flex gap-4 items-center">
        <div>{icon}</div>
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-bold text-black">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <button className="text-base text-blue-600 cursor-pointer">
        {actionText}
      </button>
    </article>
  );
}

export default CareerOpportunityCard;
