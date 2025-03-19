import React from "react";
import MentorCard from "./MentorCard";

function MentorsSection() {
  const mentors = [
    {
      name: "Michael Chen",
      position: "Senior Security Engineer at Google",
      rating: "4.9",
      menteeCount: 12,
    },
    {
      name: "Sarah Williams",
      position: "Cloud Security Architect at AWS",
      rating: "4.8",
      menteeCount: 8,
    },
    {
      name: "David Kumar",
      position: "Security Lead at Microsoft",
      rating: "4.7",
      menteeCount: 15,
    },
  ];

  return (
    <section className="box-border px-20 py-12 m-0 bg-white max-md:p-10 max-sm:p-5">
      <h2 className="box-border p-0 m-0 mb-8 text-2xl font-bold text-black">
        Available Mentors
      </h2>
      <div className="box-border grid gap-6 p-0 m-0 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        {mentors.map((mentor, index) => (
          <MentorCard
            key={index}
            name={mentor.name}
            position={mentor.position}
            rating={mentor.rating}
            menteeCount={mentor.menteeCount}
          />
        ))}
      </div>
    </section>
  );
}

export default MentorsSection;
