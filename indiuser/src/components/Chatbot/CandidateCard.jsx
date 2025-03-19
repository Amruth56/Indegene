import React from "react";

function CandidateCard() {
  return (
    <div className="p-3.5 mt-2 bg-white rounded-lg border border border-solid">
      <h2 className="mb-2 text-base font-bold text-black">
        Shortlisted Candidates:
      </h2>
      <div className="flex flex-col gap-2">
        <CandidateItem
          name="Michael Lee"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b35e72e25cbd9d23a2ce400aa1c9b3fb4f1a9023"
        />
        <CandidateItem
          name="Alice Johnson"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ad125952d4748530250eade8ca105c068e05c313"
        />
      </div>
    </div>
  );
}

function CandidateItem({ name, imageUrl }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img src={imageUrl} alt="" className="w-8 h-8 rounded-full" />
        <p className="text-base text-black">{name}</p>
      </div>
      <button className="text-sm text-blue-600 cursor-pointer border-[none]">
        View Profile
      </button>
    </div>
  );
}

export default CandidateCard;
