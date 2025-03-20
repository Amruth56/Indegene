import React from "react";

function FeatureCard({ feature }) {
  const { icon, title, description } = feature;

  return (
    <article className="flex flex-col grow items-center px-7 py-8 w-full text-center max-md:px-5 max-md:mt-8">
      <img
        src={icon}
        alt={`${title} icon`}
        className="object-contain w-16 rounded-full aspect-square"
      />
      <h3 className="mt-6 text-xl font-bold leading-none text-black">
        {title}
      </h3>
      <p className="self-stretch mt-7 text-base leading-4 text-gray-600">
        {description}
      </p>
    </article>
  );
}

export default FeatureCard;
