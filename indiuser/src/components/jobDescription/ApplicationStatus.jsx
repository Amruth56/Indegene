import React from "react";

const ApplicationStatus = () => {
  return (
    <section className="p-6 mt-6 bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5">
      <h2 className="py-1.5 text-xl font-semibold text-black max-md:pr-5">
        Application Status
      </h2>
      <div className="mt-4 w-full">
        <div className="flex gap-3 pr-16 max-md:pr-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b27f7178a80f43601841a8f8855ffe906a05e80836e6a49a56799918a75f8875?placeholderIfAbsent=true&apiKey=8f286a89216d48f19ceeeaf7437e58bd"
            alt="Checkmark icon"
            className="object-contain shrink-0 my-auto w-8 rounded-full aspect-square"
          />
          <div>
            <h3 className="py-1.5 text-base font-semibold text-black">
              Application Submitted
            </h3>
            <p className="py-1 text-sm text-gray-500 max-md:pr-5">
              Oct 15, 2025
            </p>
          </div>
        </div>
        <div className="flex shrink-0 mt-4 ml-4 w-0.5 h-6 bg-gray-200 max-md:ml-2.5" />
        <div className="flex gap-3 pr-16 mt-4 max-md:pr-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/48de17062299b48e94306f09ea655c5be564b018913c48384cf4cc8f8c444821?placeholderIfAbsent=true&apiKey=8f286a89216d48f19ceeeaf7437e58bd"
            alt="Current stage icon"
            className="object-contain shrink-0 my-auto w-8 rounded-full aspect-square"
          />
          <div>
            <h3 className="pt-0.5 pb-2.5 text-base font-semibold text-black">
              Under Review
            </h3>
            <p className="py-1 text-sm text-gray-500">Current Stage</p>
          </div>
        </div>
        <div className="flex shrink-0 mt-4 ml-4 w-0.5 h-6 bg-gray-200 max-md:ml-2.5" />
        <div className="flex gap-3 pr-16 mt-4 whitespace-nowrap max-md:pr-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba8ef118ae85d4fb4d4eb588bc81948b4bf24ff00decbaa0e23f9a172a8405de?placeholderIfAbsent=true&apiKey=8f286a89216d48f19ceeeaf7437e58bd"
            alt="Interview icon"
            className="object-contain shrink-0 my-auto w-8 rounded-full aspect-square"
          />
          <div>
            <h3 className="pt-0.5 pb-2.5 text-base font-semibold text-black">
              Interview
            </h3>
            <p className="py-1 text-sm text-gray-500">Pending</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationStatus;
