import React from "react";

function MentorCard({ name, position, rating, menteeCount }) {
  return (
    <article className="box-border p-6 m-0 bg-white rounded-xl border border-gray-100 border-solid shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <header className="box-border flex gap-4 p-0 m-0 mb-5">
        <img
          src="https://placehold.co/64x64/4F46E5/4F46E5"
          alt={`${name}, ${position}`}
          className="box-border p-0 m-0 w-16 h-16 rounded-full"
        />
        <div className="box-border p-0 m-0">
          <h3 className="box-border p-0 m-0 text-base font-bold text-black">
            {name}
          </h3>
          <p className="box-border p-0 m-0 text-sm text-gray-500">{position}</p>
        </div>
      </header>
      <ul className="box-border flex flex-col gap-3 p-0 mx-0 my-5">
        <li className="box-border flex gap-2 items-center p-0 m-0 text-sm text-gray-600">
          <i className="ti ti-star box-border p-0 m-0" aria-hidden="true" />
          <span>{rating}/5 Rating</span>
        </li>
        <li className="box-border flex gap-2 items-center p-0 m-0 text-sm text-gray-600">
          <i className="ti ti-users box-border p-0 m-0" aria-hidden="true" />
          <span>{menteeCount} Mentees</span>
        </li>
      </ul>
      <button className="box-border p-2 m-0 w-full text-base text-white bg-indigo-600 rounded-lg cursor-pointer border-[none]">
        Request Mentorship
      </button>
    </article>
  );
}

export default MentorCard;
